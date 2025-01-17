<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Listing;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        Car::factory()->create([
            'make' => 'Toyota',
            'model' => 'Corolla',
            'variant' => 'GLX',
            'year' => 2015,
            'body_type' => 'Sedan',
            'transmission' => 'Automatic',
            'odometer' => 149421,
            'fuel_type' => 'Petrol',
            'seats' => 5,
            'doors' => 4,
            'colour' => 'White',
            'engine_size' => 1800,
        ]);

        Listing::factory()->create([
            'user_id' => 1,
            'car_id' => 1,
            'area' => 'North Shore',
            'region' => 'Auckland',
            'description' => 'This is a test listing',
            'price' => 14999.99,
            'contact_email' => 'test@test.com',
            'contact_phone' => '0211234567',
            'status' => 'active',
        ]);
    }
}
