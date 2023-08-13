<?php

namespace App\Http\Controllers;

use App\Models\ServiceReview;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;

class ServiceReviewApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $response_ = ServiceReview::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($response_),
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
    }

    /**
     * Display the specified resource.
     */
    public function show(ServiceReview $serviceReview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ServiceReview $serviceReview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ServiceReview $serviceReview)
    {
        //
    }
}
