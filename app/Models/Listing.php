<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Listing extends Model
{
    /** @use HasFactory<\Database\Factories\ListingFactory> */
    use HasFactory;

    /**
     * Get the car that owns the listing.
     *
     * @return HasOne<Car>
     */
    public function car(): HasOne
    {
        return $this->hasOne(Car::class, 'id');
    }

    /**
     * Get the user that owns the listing.
     *
     * @return HasOne<User>
     */
    public function user(): HasOne
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
