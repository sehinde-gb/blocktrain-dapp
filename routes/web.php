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



Auth::routes();

Route::get('/{any}', 'SpaController@index')-> where('any', '.*');

Route::get('/journey', function () {
    if (rand(1, 10) < 3) {
        abort(500, 'We could not retrieve the journey');
    }

    return factory('App\Journey', 10)->make();
});




//Route::get('/fare', function () {
  //  return view('journey');

//});

//Route::get('/', function () {
//    return view('fare');
//
//});




//Route::get('/', function () {
  //  return view('passenger');
    /*$client = new Client(); //GuzzleHttp\Client
    $result = $client->post('http://localhost:3000/api/org.blocktrain.model.Passenger', [
        'form_params' => [
            'passengerId' => '5',
            'firstName' => 'Hannab',
            'lastName' => 'Gordon',
            'email' => 'gordon@gmail.com'
        ]
    ]);*/

//});

Route::resource('cards', 'CardsController');





    Route::get('/dashboard' , function () {

    return view('dashboard');

});

#Static



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


