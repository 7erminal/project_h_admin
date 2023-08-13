<?php

namespace App\Http\Controllers;

use App\Models\RequestNotice;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;

class RequestNoticeApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $requests = RequestNotice::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($requests),
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
    public function show(RequestNotice $requestNotice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RequestNotice $requestNotice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RequestNotice $requestNotice)
    {
        //
    }
}
