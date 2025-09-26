function uploadfiles(files){

}


var googleAPIKey = ""
function analyze(){

    reqestData = 


    $.ajax({
        type: "POST",
        url: "https://vision.googleapis.com/v1/images:annotate",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + googleAPIKey
        },
        data: JSON.stringify(requestData)

    }).done(function(response){
        console.log(response)
        result.value = "성공\n\n" 

    })
    .fail(function(error){

        console.log(error)
        result.value = "실패 \n\n" +
        
    });

}