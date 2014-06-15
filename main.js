$(function(){
    var colorPicker = $("#color-picker");

    colorPicker.change(function(){
        console.log(colorPicker.val());
    });

    var _generateGreyColor = function(){
        var ii = Math.floor(Math.random() * 32);
        var rgb = ii*8;
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
    $("#userBox").css({"background-color": "black"});

    // Generate CSS color:
    var targetColor = generateGreyCSS();



});
