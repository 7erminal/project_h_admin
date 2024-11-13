<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Log;

class CategoryApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = Category::all();

        Log::debug("Categories fetched:::");
        Log::debug($categories);

        $response = [
            'success' => true,
            'data'    => new ServiceResource($categories),
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
        Log::info("Request received ");
        Log::info($request);

        $serviceName = $request->serviceName;
        $description = $request->description;
        $service_icon = $request->icon;
        $serviceNameFrench = $request->serviceNameFrench;
        $serviceNameSpanish = $request->serviceNameSpanish;
        $serviceNamePortugal = $request->serviceNamePortugal;
        $descriptionFrench = $request->descriptionFrench;
        $descriptionPortugal = $request->descriptionPortugal;
        $descriptionSpanish = $request->descriptionSpanish;

        $data = ['service_name'=>$serviceName, 'description'=>$description, 'active'=>1, 'service_icon'=>$service_icon, 'service_category_description_ENGLISH'=>$description, 'service_category_description_FRENCH'=>$descriptionFrench, 'service_category_description_PORTUGAL'=>$descriptionPortugal, 'service_category_description_SPANISH'=>$descriptionSpanish, 'service_category_name_ENGLISH'=>$serviceName, 'service_category_name_FRENCH'=>$serviceNameFrench, 'service_category_name_PORTUGAL'=>$serviceNamePortugal, 'service_category_name_SPANISH'=>$serviceNameSpanish, 'service_image'=>$service_icon, 'created_at'=>date("Y-m-d"), 'updated_at'=>date("Y-m-d"), 'has_form'=>0];

        $status = 400;
        try{
            Category::insert($data);
            // $response = [
            //     'success' => true,
            //     'data'    => new ServiceResource($services),
            //     'message' => "Success",
            // ];
            return view('categories');
            
        } catch(e){
            $response = [
                'success' => false,
                'data'    => null,
                'message' => "Failed",
            ];

            Log::info("Error response ");
            Log::info($e);
        }
        Log::info("Returning response ");
        Log::info($response);

        // return response()->json($response, $status);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Category $category)
    {
        //
        $id = $request->id;
        Log::debug("ID received is ".$id);

        $user=Category::where('service_id',$id)->delete();

        return view('categories');
    }
}
