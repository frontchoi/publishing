jQuery(function($) {
    $("dl dt").click(function(){
        if($(this).hasClass("open")){
            $(this).removeClass("open");
            $("dd").addClass("hidden");
        }else{
            $("dt").removeClass("open");
            $(this).addClass("open");
            $("dd").addClass("hidden");
            $(this).parent("dl").children("dd").removeClass("hidden");
        }
    });
});
$(window).resize(function() {
    pop_height();
});
function pop_height(){
    $("body").css("overflow","hidden");
    $("body").css("height",$(window).height());

    var wh1 = $(window).height() * 0.72;
    var wh2 = $(window).height() * 0.1;
    $("#layer_pop .terms").css("height",wh1);
    $("#layer_pop .btn_pop_close").css("height",wh2);
}
function terms_open(v){
    pop_height();

    $("#layer_pop").removeClass("hidden");
    $("#layer_pop .terms").addClass("hidden");
    if(v == 1){
        $("#layer_pop #terms01").removeClass("hidden");
    }else if(v == 2){
        $("#layer_pop #terms02").removeClass("hidden");
    }
}
function terms_close(){
    $("body").css("overflow","visible");
    $("body").css("height","auto");
    $("#layer_pop").addClass("hidden");
}