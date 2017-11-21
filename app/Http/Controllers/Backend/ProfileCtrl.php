<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use JavaScript;
use Illuminate\Support\Facades\Session;

class ProfileCtrl extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Show the profile page
     *
     * @return \Illuminate\Http\Response
     */
    public function Visit()
    {
        JavaScript::put([
            '_ajaxUploadHIT' => route('admin.upload.tmp-profile-pic'),
            '_removeTMPimg_'    => route('admin.remove.tmp-profile-pic'),
        ]);
        // admin_notify('gritter-color info', 'Welcome', 'Hi, welcome back to digprix admin');
        return view('backend.profile');
    }

    /**
     * ajax upload of the temporary profile picture
     * @param \Illuminate\Http\Request
     * @return string uploaded image url
     */
    public function UploadInitialAjaxTmpPicture(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|image|dimensions:min_width=200,min_height=200|max:3000',
        ]);

        $destinationPath = 'assets/backend/img/profile/tmp/';

        //if any previously existing tmp file thn remove it first
        if(Session::has('tmp-profile'))
        {
            unlink($destinationPath . Session::get('tmp-profile'));
        }

        //upload attempt curr file
        $file = $request->file('file');
        $basename = $file->getClientOriginalName();
        $filename = pathinfo($basename, PATHINFO_FILENAME);
        $extension = $file->getClientOriginalExtension();

        $save_as = (file_exists($destinationPath . $basename)) ? $filename . time() . '.' . $extension : $basename;
        $file->move($destinationPath, $save_as);

        //set session as temporary image uploaded
        Session::put('tmp-profile', $save_as);

        return response()->json(['theimage' => asset($destinationPath . $save_as)]);
    }

    /**
     * remove temporary ajax uploaded image
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function RemoveInitialAjaxTmpPicture(Request $request)
    {
        $request->validate([
            'remove' => 'required|boolean'
        ]);

        if($request->input('remove'))
        {
            if ($request->session()->has('tmp-profile')) {
                unlink('assets/backend/img/profile/tmp/' . $request->session()->pull('tmp-profile'));

                return response('remove success', 200);
            }
        }
    }

}
