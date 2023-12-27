$(document).ready(function(){
    // focus
    $("#input").focus(function(){
        $(this).css("background-color" , "black");
    });
    // blur
    $("#input").blur(function(){
        alert ("Event focus lost and blur occured!!");
   });
    //change
    $("input").change(function(){
        $(this).css("background-color" , "yellow");
    });
    // click
    $(".button1").click(function(){
        alert("the button is clicked");
    });
    // dbclick
    $(".button2").dblclick(function(){
        alert("the button2 is double cliked")
    });
// hover method
    $("#hoverbtn").hover(function(){
        $(this).css("background-color" , "yellow")},
        function(){
            $(this).css("color" , "green"
            );
    })

// Focus in and focus out
    $("div").focusin(function(){
        $(this).css("background-color" , "lightgrey");
        });
    $("div").focusout(function(){
        $(this).css("background-color" , "white");
    });
    
    // on event and off event
    $("#onevent").on("click" , function(){
        $(this).css({ "background-color" : "Green" , "color" : "white"} );
        alert("click event triggered");
    });
    $("#offevent").click(function(){
        $("#onevent").off("click");
    });
    // one event

    $(".oneevent").one("click dblclick" , function(){
        $(this).animate({fontSize:"+=6px"});
    });

    // resize event
let x = 0 ;
    $(window).resize(function(){
        $("#spanresize").text(x+=1)
    });
    // scroll event
let a = 0;
    $(".scroll").scroll(function(){
        $("#scrollid").text(a+=1);
    });

// select event
$("#inputselect").select(function(){
    alert("you select event triggered");
});

// submit

    $("form").submit(function(){
        alert("form submited");
    });


    });


