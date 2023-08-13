<?php

namespace App\Http\Controllers;

use App\Models\HostDetails;
use Illuminate\Http\Request;
use App\Http\Resources\HostDetailsResource;

class HostDetailsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $hosts = HostDetails::all();

        // return response()->json($hosts);

        // echo json($hosts);

        $response = [
            'success' => true,
            'data'    => new HostDetailsResource($hosts),
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $host = new HostDetails;
        $host->location_cordinates = $request->location_cordinates;
        $host->office_address = $request->office_address;
        $host->service_coverage_zone = $request->service_coverage_zone;
        $host->official_certifications = $request->official_certifications;
        $host->number_of_years_practice_speciality = $request->number_of_years_practice_speciality;
        $host->number_of_years_experience = $request->number_of_years_experience;
        $host->referrals = $request->referrals;
        $host->specializations = $request->specializations;
        $host->languages_spoken = $request->languages_spoken;
        $host->customer_id = $request->customer_id;
        $host->host_name = $request->host_name;

        $host->save();

        return response()->json($host);

    }

    /**
     * Display the specified resource.
     */
    public function show(HostDetails $hostDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HostDetails $hostDetails)
    {
        //
        $host = HostDetails::where('host_details_id',$request->host_details_id);
        $host->location_cordinates = $request->location_cordinates;
        $host->office_address = $request->office_address;
        $host->service_coverage_zone = $request->service_coverage_zone;
        $host->official_certifications = $request->official_certifications;
        $host->number_of_years_practice_speciality = $request->number_of_years_practice_speciality;
        $host->number_of_years_experience = $request->number_of_years_experience;
        $host->referrals = $request->referrals;
        $host->specializations = $request->specializations;
        $host->languages_spoken = $request->languages_spoken;
        $host->customer_id = $request->customer_id;
        $host->host_name = $request->host_name;

        $host->save();

        return response()->json($host);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HostDetails $hostDetails)
    {
        //
        if(HostDetails::where('host_details_id',$hostDetails->host_details_id)->exists()){
            $host = HostDetails::find($hostDetails->host_details_id);
            $host->delete();

            return response()->json([
                'message' => 'record deleted successfully'
            ], 202);
        } else {
            return response()->json([
                'message' => 'record not found'
            ], 404);
        }
        
        // return response()->json($hostDetails);
        
    }
}