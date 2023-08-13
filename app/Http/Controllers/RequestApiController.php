<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Request as Requests_;
use App\Http\Resources\ServiceResource;

class RequestApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $requests = Requests_::join('project_h_core_services', 'project_h_core_services.service_id','project_h_core_requests.host_service_id')->get();

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
    public function show(Requests_ $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Requests_ $requests_)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Requests_ $request)
    {
        //
    }
}
