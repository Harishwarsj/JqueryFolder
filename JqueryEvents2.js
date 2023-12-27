$(document).ready(function(){
    // Mouse Down
    $(".mouseupdown").mousedown(function(){
        $("#h2").text("Mouse Down");
    });
    // Mouse Up
    $(".mouseupdown").mouseup(function(){
       $("#h3").text("Mouse Up"); 
    });
    // mouse enter
    $(".mouseenterleave").mouseenter(function(){
        $("#h4").text("Mouse Cursor Entered");
    });
    // mouse leave
    $(".mouseenterleave").mouseleave(function(){
        $("#h5").text("Mouse Cursor leaves");
    });
    // mosue in
    $(".mouseinout").mouseover(function(){
        $("#h6").text("Mouse Cursor over");
    });
    // mouse out
    $(".mouseinout").mouseout(function(){
        $("#h7").text("Mouse Cursor out");
    });
    // mousemove
    $(window).mousemove(function(e){
        $(".span").text(e.pageX+ "," +e.pageX)
    })
// Key events - Key down
    $(".keyupdown").keydown(function(){
        $(this).css("background-color" , "Pink");
    });
    // KEY UP
    $(".keyupdown").keyup(function(){
        $(this).css("background-color" , "yellow");
    });
    // Key Press    
    let X = 0;
    $(".keyupdown").keypress(function(){
        $("#keypress").text(X+=1);
    });
});
