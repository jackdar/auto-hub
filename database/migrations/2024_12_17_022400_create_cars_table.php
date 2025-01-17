<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('make');
            $table->string('model');
            $table->string('variant');
            $table->integer('year');
            $table->enum('body_type', ['Sedan', 'Hatchback', 'Suv', 'Crossover', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Ute']);
            $table->enum('transmission', ['Manual', 'Automatic']);
            $table->bigInteger('odometer');
            $table->enum('fuel_type', ['Petrol', 'Diesel', 'Electric', 'Hybrid']);
            $table->integer('seats');
            $table->integer('doors');
            $table->string('colour');
            $table->integer('engine_size');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
