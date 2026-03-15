<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentStoreRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $students = Student::with('user:id,name')
            ->when($search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")->orWhere('date_of_birth', 'like', "%{$search}%");
                $query->where('name', 'like', "%{$search}%")->orWhere('age', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        return inertia('Students/Index', ['students' => $students, 'search' => $search]);
    }

    public function create()
    {
        return Inertia::render('Students/Create');
    }

    public function store(StudentStoreRequest $request)
    {
        $validated = $request->validated();

        $validated['user_id'] = 1;
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('students', 'public');
        }

        Student::create($validated);

        return redirect()->route('students.index');
    }
}
