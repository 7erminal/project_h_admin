<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HostDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
        // return [
        //     'host_details_id' => $request->host_details_id,
        //     'location_cordinates' => $request->location_cordinates,
        //     'office_address' => $request->office_address,
        //     'service_coverage_zone' => $request->service_coverage_zone,
        //     'official_certifications' => $request->official_certifications,
        //     'years_speciality' => $request->number_of_years_practice_speciality,
        //     'years_experience' => $request->number_of_years_experience,
        //     'referrals' => $request->referrals,
        //     'specializations' => $request->specializations,
        //     'languages_spoken' => $request->languages_spoken,
        //     'date_created' => $request->created_at
        // ];
    }
}
