<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HostDetailsApiController;
use App\Http\Controllers\ServicesApiController;
use App\Http\Controllers\RequestApiController;
use App\Http\Controllers\CategoryApiController;
use App\Http\Controllers\CustomerApiController;
use App\Http\Controllers\RequestNoticeResponseApiController;
use App\Http\Controllers\RequestResponseApiController;
use App\Http\Controllers\RequestNoticeApiController;
use App\Http\Controllers\ServiceReviewApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware'=>'CORS'], function($router){
    Route::get('/hosts',[HostDetailsApiController::class, 'index']);
    Route::get('/hosts/{id}',[HostDetailsApiController::class, 'show']);
    Route::post('/hosts',[HostDetailsApiController::class, 'store']);
    Route::put('/hosts/{id}',[HostDetailsApiController::class, 'update']);
    Route::delete('/hosts/{id}',[HostDetailsApiController::class, 'destroy']);

    Route::get('/services',[ServicesApiController::class, 'index']);
    Route::get('/services/{id}',[ServicesApiController::class, 'show']);
    Route::post('/services',[ServicesApiController::class, 'store']);
    Route::put('/services/{id}',[ServicesApiController::class, 'update']);
    Route::delete('/services/{id}',[ServicesApiController::class, 'destroy']);

    Route::get('/requests',[RequestApiController::class, 'index']);
    Route::get('/requests/{id}',[RequestApiController::class, 'show']);
    Route::post('/requests',[RequestApiController::class, 'store']);
    Route::put('/requests/{id}',[RequestApiController::class, 'update']);
    Route::delete('/requests/{id}',[RequestApiController::class, 'destroy']);

    Route::get('/request-notices',[RequestNoticeApiController::class, 'index']);
    Route::get('/request-notices/{id}',[RequestNoticeApiController::class, 'show']);
    Route::post('/request-notices',[RequestNoticeApiController::class, 'store']);
    Route::put('/request-notices/{id}',[RequestNoticeApiController::class, 'update']);
    Route::delete('/request-notices/{id}',[RequestNoticeApiController::class, 'destroy']);

    Route::get('/categories',[CategoryApiController::class, 'index']);
    Route::get('/categories/{id}',[CategoryApiController::class, 'show']);
    Route::post('/categories',[CategoryApiController::class, 'store']);
    Route::put('/categories/{id}',[CategoryApiController::class, 'update']);
    Route::delete('/categories/{id}',[CategoryApiController::class, 'destroy']);

    Route::get('/customers',[CustomerApiController::class, 'index']);
    Route::get('/customers/{id}',[CustomerApiController::class, 'show']);
    Route::post('/customers',[CustomerApiController::class, 'store']);
    Route::put('/customers/{id}',[CustomerApiController::class, 'update']);
    Route::delete('/customers/{id}',[CustomerApiController::class, 'destroy']);

    Route::get('/request-notice-responses',[RequestNoticeResponseApiController::class, 'index']);
    Route::get('/request-notice-responses/{id}',[RequestNoticeResponseApiController::class, 'show']);
    Route::post('/request-notice-responses',[RequestNoticeResponseApiController::class, 'store']);
    Route::put('/request-notice-responses/{id}',[RequestNoticeResponseApiController::class, 'update']);
    Route::delete('/request-notice-responses/{id}',[RequestNoticeResponseApiController::class, 'destroy']);

    Route::get('/request-responses',[RequestResponseApiController::class, 'index']);
    Route::get('/request-responses/{id}',[RequestResponseApiController::class, 'show']);
    Route::post('/request-responses',[RequestResponseApiController::class, 'store']);
    Route::put('/request-responses/{id}',[RequestResponseApiController::class, 'update']);
    Route::delete('/request-responses/{id}',[RequestResponseApiController::class, 'destroy']);

    Route::get('/service-reviews',[ServiceReviewApiController::class, 'index']);
    Route::get('/service-reviews/{id}',[ServiceReviewApiController::class, 'show']);
    Route::post('/service-reviews',[ServiceReviewApiController::class, 'store']);
    Route::put('/service-reviews/{id}',[ServiceReviewApiController::class, 'update']);
    Route::delete('/service-reviews/{id}',[ServiceReviewApiController::class, 'destroy']);
// });