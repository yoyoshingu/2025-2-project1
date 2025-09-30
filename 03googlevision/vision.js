imagestring = null
function processFile(event){
    content = event.target.result;
    imagestring = content.replace('data:image/jpeg;base64,', '');
    gimage.src = content
}



function uploadFiles(files){
    file = files[0]
    reader = new FileReader()
    reader.onloadend = processFile

    reader.readAsDataURL(file);
}


var googleAPIKey = ""
function analyze(){

    
    // 요구하는 데이터를 JSON형식으로 지정
    // https://cloud.google.com/vision/docs/detecting-faces?hl=ko#vision_face_detection-drest
    requestData = 
        {
            "requests": [
                {
                    "image": {
                    "content": imagestring
                        },
                "features": [
                    {
                    "maxResults": 100,
                    "type": "FACE_DETECTION"
                    }
                    ]   
                }
             ]
        }       


    $.ajax({
        type: "POST",
        url: "https://vision.googleapis.com/v1/images:annotate?key=" + googleAPIKey,
        headers:{
            "Content-Type": "application/json",
            // "Authorization": "Bearer " + googleAPIKey
        },
        data: JSON.stringify(requestData)

    }).done(function(response){
        console.log(response)
        result.value = "성공\n\n" 

    })
    .fail(function(error){

        console.log(error)
        result.value = "실패 \n\n" 
        
    });

}