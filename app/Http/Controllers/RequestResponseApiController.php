<?php

namespace App\Http\Controllers;

use App\Models\RequestResponse;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;

class RequestResponseApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $response_ = RequestResponse::all();

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
    public function show(RequestResponse $requestResponse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RequestResponse $requestResponse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RequestResponse $requestResponse)
    {
        //
    }
}
