<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\PagesController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

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

Route::get('/', [PagesController::class, 'index'])->name('index');
Route::resource('events', EventController::class)->middleware('verified');

Route::get('/email/verify', function () {
    return Inertia::render('VerifyEmail');
})->middleware(['auth'])->name('verification.notice');

Route::get('/emailverify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return redirect()->route('index')->with('message', 'Verification link resent');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');
