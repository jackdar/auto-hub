<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'car' => $this->car,
            'area' => $this->area,
            'region' => $this->region,
            'description' => $this->description,
            'price' => $this->price,
            'contact_email' => $this->contact_email,
            'contact_phone' => $this->contact_phone,
            'created_at' => $this->created_at,
        ];
    }
}
