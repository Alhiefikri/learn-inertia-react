<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Buat User Admin/Tester
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'user_type' => 'teacher',
        ]);

        // 2. Buat Users dengan type student, lalu buat data Student-nya
        // Karena user_id di tabel students itu UNIQUE, kita gunakan recycle atau manual creation
        User::factory(100)->state(['user_type' => 'student'])->create()->each(function ($user) {
            Student::factory()->create([
                'user_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ]);
        });

        // 3. Buat beberapa Teacher (hanya User saja)
        User::factory(5)->state(['user_type' => 'teacher'])->create();
    }
}
