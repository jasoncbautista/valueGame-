$(function(){
    var colorPicker = $("#color-picker");
    colorPicker.change(function(){
        console.log(colorPicker.val());
        var cssColor = generateGreyCSS();
        console.log(cssColor);
        $("#colorId").css({"background-color": cssColor});
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
});
