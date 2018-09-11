<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use App\User;

class AuthenticateController extends Controller
{
    public function index() {
        return "Auth index";
    }

    public function authenticate(Request $request) {
        $credientials = $request->only('email', 'password');
        try {
            // verify credientials (unauthorized)
            if (!$token = JWTAuth::attempt($credientials) ) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTExecption $e) {
            // something went wrong (internal server error)
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $loggedInUser = User::where('email', $request->email)->first();
        $id = $loggedInUser['id'];
        return response()->json(compact('token', 'id'));
    }

    public function getAuthenticatedUser() {

        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        }  catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                return response()->json(['token_expired'], $e->getStatusCode());
        }  catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                return response()->json(['token_invalid'], $e->getStatusCode());
        }  catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }
}
