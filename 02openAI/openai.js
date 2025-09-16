
function talk(){
    // alert("getWeather 가 수행됨됨")

    userquestion = txtcity.value
    if (userquestion == ""){
        userquestion = "기분이 좋아지는 농담을 하나 해줘"
    }
    txtMsg.value = "생각중입니다"
    talkdata = {
        // "model": "gpt-5-nano",
        "model": aimodel.value,
        "messages": [

        {
            "role": "user",
            "content": userquestion
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
        txtMsg.value = "성공\n\n" +
                response.model + "\n" +
                "total token = " + response.usage.total_tokens + "\n\n" + 
                response.choices[0].message.content

    }).fail(function(error){
        console.log(error)
        txtMsg.value = "실패 \n\n" + error.responseText
    });
}

