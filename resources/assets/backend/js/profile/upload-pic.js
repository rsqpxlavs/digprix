import axios from 'axios';
import jQuery from 'jquery';

const $ = jQuery;

function validateImage(filename)
{
    const re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
    if (filename != '')
    {
        return re.test(filename);
    }

    return false;
}

function afterInitialAjaxUpload() {
    let uploadField = $("input#upload-field");
    let output = $("#progress-output");

    //active the file field
    uploadField.prop('disabled', false);

    //reset the uplad progress
    output.hide();
    output.attr('aria-valuenow', '00');
    output.css('width', '0%');
    output.html('0 %');
}

$(document).ready(function(){
    let uploadField = $("input#upload-field");
    let output = $("#progress-output");
    let saveClrBtns = $("#pic-save-section");

    uploadField.on('change', () => {
        if (validateImage(uploadField.val()))
        {
            //disable the file type field
            //uploadField.attr('disabled', 'disabled');

            //upload image via ajax
            let data = new FormData();
            data.append('file', document.getElementById("upload-field").files[0]);

            let config = {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: function (progressEvent) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    if (percentCompleted > 0) {
                        $("#op-progress").show();
                        output.attr('aria-valuenow', percentCompleted);
                        output.css('width', `${percentCompleted}%`);
                        output.html(`${percentCompleted} %`);
                    }
                },
            };

            axios.post(`${trans._ajaxUploadHIT}`, data, config)
                .then(function (res) {

                    //set the image in proper place to init the j crop
                    $("div#interface").html(`<img width="400" src="${res.data.theimage}" id="target">`);

                    //show the save image & clear btns
                    saveClrBtns.show();

                    afterInitialAjaxUpload();
                    
                    //trigger j crop
                    $("button#tmp-upload-success").click();
                    
                })
                .catch(function (err) {
                    afterInitialAjaxUpload();

                    saveClrBtns.hide();

                    $("div#interface").html('');

                    if (err.response.status == 422)
                    {
                        alert('upload error, invalid image');
                    }

                    console.log(err.response);
                });
        }
        else
        {
            alert('invalid image');
        }
    });
});
