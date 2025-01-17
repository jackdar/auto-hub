<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'make' => fake()->words([
                'Toyota', 'Ford', 'Chevrolet', 'Nissan', 'Honda', 'Audi', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Subaru', 'Mazda', 'Jeep', 'Ram', 'GMC', 'Buick', 'Cadillac', 'Lexus', 'Acura', 'Infiniti', 'Lincoln', 'Volvo', 'Porsche', 'Jaguar', 'Land Rover', 'Tesla', 'Fiat', 'Mitsubishi', 'Mini', 'Smart', 'Bentley', 'Ferrari', 'Maserati', 'McLaren', 'Rolls-Royce', 'Lamborghini', 'Bugatti', 'Alfa Romeo', 'Aston Martin', 'Lotus', 'Koenigsegg', 'Pagani', 'Genesis', 'Rivian', 'Lucid', 'Polestar',
            ]),
            'model' => fake()->words([
                'Corolla', 'Carib', 'Crown', 'Camry', 'Focus', 'Fiesta', 'Mustang', 'Cruze', 'Skyline', 'Sentra', 'Accord', 'Civic', 'A4', 'A6', 'A8', 'Q7', 'Golf', 'Passat', '320i', '335i', '420i', '120i', '128i', '235i', 'M3', 'M5', 'A180', 'C63 AMG', 'B180', 'C300', '190E', 'G63 AMG', 'i30', 'i45', 'Kona', 'Sportage', 'Stinger', 'Forrester', 'Impreza', 'Outback', 'Legacy', 'Familia', 'RX-7', 'CX-5', 'MX-5', 'MX-6', 'CX-7', 'CX-9', 'Protege',
            ]),
        ];
    }
}
