// evnet Properties
$(document).ready(function(){
    // event Delgate Target
    $(".eventdelegateTarget").on("click" , "button" , function(e){
        $(e.delegateTarget).css("background-color" , "red");
        $("#desc").text("color change only happen for button click only - this process done by event.delegateTarget");
    });
    // event prevent default
    $("#eventpreventdefault").click(function(event){
        event.preventDefault();
        alert("event prevent default is prevented true or False - "+ event.isDefaultPrevented())
    })
});