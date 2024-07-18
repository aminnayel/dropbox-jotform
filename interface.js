function getJotformWidgetDataFun() {

    var widgetData = JFCustomWidget.getWidgetSettings()
    var countdownSound = widgetData.countdownSound
    var maxLength = widgetData.maxlength
   

    if (!widgetData.countdownSound) {
   
        setTimeout(() => {
            getJotformWidgetDataa()
            console.log("nooo ", JFCustomWidget.getWidgetSettings(), countdownSound, maxLength);
            
        }, 100);
    } else {
        console.log("wooha ", JFCustomWidget.getWidgetSettings(), countdownSound, maxLength);
    }

}
getJotformWidgetDataFun()



// function fireJotform() {
    console.log(document.getElementById("userId").value)

function myWidget() {

var widget = document.getElementById("userId")



// get widget parameters if any
var params = JFCustomWidget.getWidgetSettings();

// exposed functions
this.init = init;
this.getData = getData;



// initialization of the widget
function init(formData) {
}




// get widget data
function getData() {

    return {
        valid: true,
        value: widget.value

    };
}


// $('#userId').on('change', function() {

// generateButton.addEventListener('click', function () {
    
setInterval(() => {
    JFCustomWidget.sendData(getData());
   
    console.log("pushed to jotform");
}, 500);

}
// )}

JFCustomWidget.subscribe("ready", function(data) {
var widget = new myWidget();
widget.init(data);

JFCustomWidget.subscribe("submit", function() {
    JFCustomWidget.sendSubmit(widget.getData());
});


});

