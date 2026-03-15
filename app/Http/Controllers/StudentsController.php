<?php

namespace App\Http\Controllers;

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
            ->paginate(10)
            ->withQueryString();
        return inertia('Students/Index', ['students' => $students, 'search' => $search]);
    }

    public function create(){
        return Inertia::render('Students/Create');
    }

    public function store(Request $request){
        $student = new Student();
        $student->name = $request->name;
        $student->email = $request->email;
        $student->age = $request->age;
        $student->date_of_birth = $request->date_of_birth;
        $student->gender = $request->gender;
        $student->score = $request->score;
        $student->user_id = 5;
        $student->save();

        return redirect()->route('students.index');
    }

}
