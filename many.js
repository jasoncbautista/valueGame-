
$(function(){
    console.log('hi');

    for (var ii = 0; ii < 8; ii++){

        var frame = $("<div> <iframe src='/index.html'></iframe></div>");
        $("#iframeContainer").append(frame);
    }


});
