<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'email',
        'age',
        'date_of_birth',
        'gender',
        'score',
        'image',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
