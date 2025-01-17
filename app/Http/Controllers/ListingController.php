<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreListingRequest;
use App\Http\Requests\UpdateListingRequest;
use App\Http\Resources\ListingResource;
use App\Models\Listing;
use Inertia\Response;
use Inertia\ResponseFactory;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ResponseFactory|Response
     */
    public function index()
    {
        $query = Listing::query()->where('status', 'active')->orderBy('created_at', 'desc');

        $listings = $query->paginate(24);

        return inertia('Browse/Index', [
            'listings' => ListingResource::collection($listings),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreListingRequest $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $listingId): Response
    {
        $listing = Listing::query()->findOrFail($listingId);

        return inertia('Browse/Show', [
            'listing' => new ListingResource($listing),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return void
     */
    public function edit(Listing $listing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @return void
     */
    public function update(UpdateListingRequest $request, Listing $listing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return void
     */
    public function destroy(Listing $listing)
    {
        //
    }
}
