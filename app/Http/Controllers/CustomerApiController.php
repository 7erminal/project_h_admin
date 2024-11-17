<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\CustomerDetails;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Log;

class CustomerApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $customers = Customer::join('project_h_core_customers','auth_user.id','project_h_core_customers.user_id')->get();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($customers),
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
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        //
        Log::info("Request received");
        Log::info($request->first_name);
        Log::info($request->id);
        $firstName = $request->first_name;
        $lastName = $request->last_name;
        $username = $request->username;
        $email = $request->email;
        $mobileNumber = $request->mobile_number;
        $address = $request->address;
        $location = $request->location;
        $deliveryLocation = $request->delivery_location;

        $data = ['first_name'=>$firstName, 'last_name'=>$lastName, 'username'=>$username, 'email'=>$email];

        $data2 = ['address'=>$address, 'mobile_number'=>$mobileNumber, 'location'=>$location, 'delivery_location'=>$deliveryLocation];

        Customer::where(['id'=>$request->id])->update($data);
        CustomerDetails::where(['user_id'=>$request->id])->update($data2);

        $response = [
            'success' => true,
            'data'    => "",
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
