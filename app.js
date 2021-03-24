$(document).ready(function() {
    var apiKey = "cda6ba4445ba68b5cb8199c475d634a56a54eb26";
    console.log("test");
    $("#button").click(function() {
        // alert("you clicked a button!")
        $.get(`https://comicvine.gamespot.com/api/characters/?api_key=${apiKey}&filter=name:spider-woman&format=json`,function (first) {
        var htmlStr = "";
        console.log("test");
        // var pic = $(first.results.screen_url).text();
        console.log(response);
        // htmlStr += `<img src='${pic}'alt='SpiderWoman Test Image'>`
        });
        // $("#charImage").append(htmlStr);
    });
    
    
    
    // var charVal = $("#charName").text();
    // var url = `https://comicvine.gamespot.com/api/characters/?api_key=${apiKey}&filter=name:${charVal}&format=json`;

    // Character Description
    // $("form").submit(function () {
    //     $.get(url, function (getChar) {
    //         var results = getChar.results
    //         var htmlStr = "";
    //         console.log(test)
    //         for(var i = 0; i < results.length; i++) {
    //             console.log(test)
    //             htmlStr += `<h3>${results[i].name}</h3>`;
    //         } 
    //         $("#charInfo").append(htmlStr);
    //     });
    //     return false;
    // });

});
// var spiderwoman = 1453;