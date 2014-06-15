
$(function(){

    console.log('hi');

    var colorPicker = $("#color-picker");
    colorPicker.change(function(){
        console.log(colorPicker.val());
    });
});
