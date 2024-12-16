<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {*/
/*    return Inertia::render('Welcome', [*/
/*        'canLogin' => Route::has('login'),*/
/*        'canRegister' => Route::has('register'),*/
/*        'laravelVersion' => Application::VERSION,*/
/*        'phpVersion' => PHP_VERSION,*/
/*    ]);*/
/*});*/

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/browse', function () {
    return Inertia::render('Browse/Browse', [
        'listings' => DB::table('listings')->paginate(24),
    ]);
})->name('browse');

Route::get('/browse/{listingId}', function ($listingId) {
    return Inertia::render('Browse/Listing', [
        'listing' => DB::table('listings')->where('id', $listingId)->first(),
    ]);
})->name('listing');

require __DIR__.'/auth.php';