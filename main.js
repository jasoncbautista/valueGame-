$(function(){
    var userBox = $("#userBox");
    var colorPicker = $("#color-picker");

    colorPicker.change(function(){
         var rgb  = colorPicker.val();
        userBox.css("background-color", rgb);

        var targetRGB = hexToRGBA(rgb);
        if (targetRGB === cssColor){
            $("#results").text("Correct");
        } else {
            $("#results").text("False: target" + targetRGB + ": yours: " + cssColor);
        }
    });

    var _generateGreyColor = function(){
        var ii = Math.floor(Math.random() * 256);

        console.log('ii', ii);
        var rgb = ii;
        console.log('rgb', rgb);
        return rgb;
    };

    var generateGreyCSS = function(){
        var rgb = _generateGreyColor();
        return "rgb(" + rgb + "," + rgb + "," + rgb +")";
    };

    function hexToRGBA(h){
        return "rgb(" + hexToR(h) + "," + hexToG(h) + "," + hexToB(h) + ")";
    };

    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}


    // Setup css color
    var cssColor = generateGreyCSS();
    $("#targetId").css({"background-color": cssColor});
    userBox.css({"background-color": "black"});

    // Generate CSS color:
    var targetColor = generateGreyCSS();

    // Slider:
    // $("#slider1").val();

     $("#slider1").change(function(e){
         var val = $("#slider1").val();
         console.log(val)
         $('#slideValue').text(val);
     });
});
