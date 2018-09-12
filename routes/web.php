<?php

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
// View::addExtension('html', 'php');

Route::get('/', function () {
    // return view('welcome');
    // return View::make('index');
    return File::get('public/index.html');
});

Route::group(['middleware' => 'cors', 'prefix' => 'api'], function () {
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::post('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
});

Route::group(['middleware' => 'cors', 'prefix' => 'api'], function () {
    Route::get('messages/from/{user_id}/to/{reciever_id}', 'MessagesController@getConversation');
    Route::resource('messages', 'MessagesController');
    Route::resource('users', 'UsersController');
});
