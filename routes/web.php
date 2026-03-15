<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(StudentsController::class)->group(function(){
    // Route::get('students', 'withData')->name('students.list');
    Route::get('students', 'index')->name('students.index');
    Route::get('/students/create', 'create')->name('students.create');
    Route::post('/students', 'store')->name('students.store');
    // Route::get('students/{name?}/{last_name?}', 'withRouteParameters');
});

Route::inertia('teachers', 'Teachers/Index')->name('teachers.list');

Route::fallback(function(){
    return Inertia::render('Errors/NotFound');
}); 
