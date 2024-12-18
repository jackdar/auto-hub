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
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('car_id')->constrained()->onDelete('cascade');
            $table->string('area');
            $table->string('region');
            $table->string('description');
            $table->float('price');
            $table->string('contact_email');
            $table->string('contact_phone');
            $table->enum('status', ['active', 'inactive']);
            $table->timestamps();

            /** Foreign Keys */
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('car_id')->references('id')->on('cars');

            /** Indexes */
            $table->index('area');
            $table->index('region');
            $table->index('price');
            $table->index('status');
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listings');
    }
};
