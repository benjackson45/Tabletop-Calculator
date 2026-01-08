<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

// Route::get('/test', function () {
//     return inertia('Test');
// });