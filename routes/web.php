<?php

use App\Http\Controllers\ListingController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\ListingResource;
use App\Models\Listing;
use Illuminate\Foundation\Application;
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
        'listings' => ListingResource::collection(
            Listing::query()
                ->where('status', 'active')
                ->orderBy('created_at', 'desc')
                ->paginate(6)
        ),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::prefix('browse')->group(function () {
    Route::get('/', [ListingController::class, 'index'])->name('browse');
    Route::get('/{listingId}', [ListingController::class, 'show'])->name('browse.show');
});

require __DIR__.'/auth.php';
