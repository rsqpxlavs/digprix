import axios from 'axios';

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
    let uploadField = document.querySelector("input#upload-field");
    let output = document.querySelector("#progress-output");

    //active the file field
    uploadField.removeAttribute('disabled');

    //reset the uplad progress
    output.style.display = 'none';
    output.setAttribute('aria-valuenow', '00');
    output.style.width = '0%';
    output.innerHTML = '0 %';
}

(function () {
    let uploadField = document.querySelector("input#upload-field");
    let output = document.querySelector("#progress-output");
    let saveClrBtns = document.querySelector("#pic-save-section");

    uploadField.onchange = () => {
        if (validateImage(uploadField.value))
        {

            //upload image via ajax
            let data = new FormData();
            data.append('file', document.getElementById("upload-field").files[0]);

            let config = {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: function (progressEvent) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    if (percentCompleted > 0) {
                        document.getElementById("op-progress").style.display = 'block';
                        output.setAttribute('aria-valuenow', percentCompleted);
                        output.style.width = `${percentCompleted}%`;
                        output.innerHTML = `${percentCompleted} %`;
                    }
                },
            };

            axios.post(`${trans._ajaxUploadHIT}`, data, config)
                .then(function (res) {

                    //set the image in proper place to init the j crop
                    document.querySelector("div#interface").innerHTML = `<img width="400" src="${res.data.theimage}" id="target">`;

                    //show the save image & clear btns
                    saveClrBtns.style.display = 'block';

                    afterInitialAjaxUpload();
                    
                    //trigger j crop
                    document.querySelector("button#tmp-upload-success").click();
                    
                })
                .catch(function (err) {
                    afterInitialAjaxUpload();

                    saveClrBtns.style.display = 'none';

                    document.querySelector("div#interface").innerHTML = '';

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
    };

})();
