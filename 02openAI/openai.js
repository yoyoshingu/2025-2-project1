
function talk(){
    // alert("getWeather 가 수행됨됨")

    talkdata = {
        "model": "gpt-5-nano",
        "messages": [

        {
            "role": "user",
            "content": "약속시간에 늦지않는 방법 10가지"
         }
    ]
    }

    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        headers: {
            "Content-Type": "application/json",  
                "Authorization": "Bearer " 
                },
        data: JSON.stringify(talkdata),
                        

    }).done(function(response){
      
        console.log(response)
        txtMsg.value = "성공"

    }).fail(function(error){
        console.log(error)
        txtMsg.value = "실패 "
    });
}

