<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', 'AuthController@register');
Route::post('login', array('middleware' => 'cors', 'uses' => 'AuthController@login'));



Route::group(['middleware' => ['auth:api', 'cors']], function() {
    Route::get('dashboard', 'UserController@dashboard');
    Route::get('user/{userId}/detail', 'UserController@show');
  });
