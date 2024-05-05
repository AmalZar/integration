<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

class EmailControlleur extends Controller
{
public function send(){
    mail::to(auth::user()->email()->send(new emailMailable()));
    return $this->sendResponse("email sent!");
}


}
