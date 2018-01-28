<?php

namespace App\Http\Controllers\Backend\misc;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Session;

class TrackPushNotificationTag extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'tag' => 'required|integer|exists:admin_login_history,id'
        ]);

        //check if it was previously displayed to the current user
        if(Session::has('push-tags'))
        {
            $tags = Session::get('push-tags');

            if(in_array($request->tag, $tags))
            {
                return response()->json(['confirm' => 0]);
            }
        }

        $tags[] = $request->tag;
        $unique_list = array_unique($tags);
        Session::put('push-tags', $unique_list);

        return response()->json(['confirm' => 1]);
    }
}
