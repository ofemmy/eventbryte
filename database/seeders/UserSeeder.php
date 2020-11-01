<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;
use \App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
                ->times(10)
                ->has(Event::factory()->count(3))
                ->create();
    }
}
