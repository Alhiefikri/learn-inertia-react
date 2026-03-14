<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function index()
    {
        $students = Student::paginate(10);
        return inertia('Students/Index', ['students' => $students]);
    }

    public function withData()
    {
        return inertia('Students/Index', [
            'name' => 'Name',
            'last_name' => 'Last Name',
        ]);
    }

    public function withRouteParameters($name = 'Guest', $last_name = 'User')
    {
        return inertia('Students/Index', [
            'name' => $name,
            'last_name' => $last_name,
        ]);
    }

    public function withOptionalParameters($name = 'Guest', $last_name = 'User')
    {
        return Inertia::render('Students/Index', [
            'name' => $name,
            'last_name' => $last_name,
        ]);
    }
}
