<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return ['Laravel' => app()->version()];
    return view('index');
})->middleware('auth');

Route::get('/customers-overview', function () {
    // return ['Laravel' => app()->version()];
    return view('customers_overview');
})->middleware('auth');

Route::get('/customers', function () {
    // return ['Laravel' => app()->version()];
    return view('customers');
})->middleware('auth');

Route::get('/services', function () {
    // return ['Laravel' => app()->version()];
    return view('services');
})->middleware('auth');

Route::get('/categories', function () {
    // return ['Laravel' => app()->version()];
    return view('categories');
})->middleware('auth');

Route::post('/add-category',[App\Http\Controllers\CategoryApiController::class, 'store']);
Route::post('/delete-category',[App\Http\Controllers\CategoryApiController::class, 'destroy']);

Route::get('/transactions', function () {
    // return ['Laravel' => app()->version()];
    return view('transactions');
})->middleware('auth');

Route::get('/register', function () {
    // return ['Laravel' => app()->version()];
    return view('register');
});

Route::get('/login', function () {
    // return ['Laravel' => app()->version()];
    return view('login');
});

require __DIR__.'/auth.php';
