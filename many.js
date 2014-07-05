
$(function(){
    console.log('hi');

    for (var ii = 0; ii < 8; ii++){
        var frame = $("<div> <iframe frameBorder='0' src='/index.html'></iframe></div>");
        $("#iframeContainer").append(frame);
    }
});
