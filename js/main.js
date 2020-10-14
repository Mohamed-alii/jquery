

let distanceToMove = $(".options").outerWidth(); 

let section1 = $("#section1").offset().top;

$(".change-color").css("color" , localStorage.getItem("fontColor"));
$(".border").css("border-color" , localStorage.getItem("fontColor"));
$(".options").css("left" , - distanceToMove);


$(window).scroll(function(){


    let distanceFromTop = $(window).scrollTop();


    // transiton  is made in 1 sec in css file for smoothing
    if (distanceFromTop >= section1){

        $("#btnUp").fadeIn(500);

        $("#navbar").css({"background-color" : " #8e7754 " ,"opacity" : "0.7 "  });

    }else{

        $("#navbar").css({"background-color" : " transparent " ,"opacity" : "1"  });

        $("#btnUp").fadeOut(500);

    }

})

$("#btnUp").click(function(){

    $("html , body").animate({scrollTop : '0'} , 1000);

})



$("a").click(function(){

    $("a").css("border" , "none");

    $(this).css("border-bottom" , "solid #D3D3D3 ");

    let sectionName = $(this).attr("href")

    let distance = $(sectionName).offset().top;

    $("html , body").animate({scrollTop : distance} , 1500);
})


let color = $(".color-item");

color.eq(0).css("background-color" , "tomato");
color.eq(1).css("background-color" , "red");
color.eq(2).css("background-color" , "blue");
color.eq(3).css("background-color" , "green");
color.eq(4).css("background-color" , "yellow");
color.eq(5).css("background-color" , "black");
color.eq(6).css("background-color" , "purple");


color.click(function(){

    let fontColor = $(this).css("background-color");

    $(".change-color").css("color" , fontColor);
    $(".border").css("border-color" , fontColor)

    localStorage.setItem("fontColor" , fontColor);


})



$(".img-bg").click(function(){


    let backGroundImage = $(this).attr("src");


    $(".header").css("background-image" , `url(${backGroundImage})` );


})

$(".icon").click(function(){


    if($(".options").css("left") == "0px") //  move to left 
    {

        $(".options").animate({left : - distanceToMove} , 1000);

    }else // move to right
    {

        $(".options").animate({left : 0} , 1000);

    }


})

$("document").ready(function (){

    $(".loading").fadeOut(1500 , function(){

        $("body").css("overflow" , "auto");

    });

})



// window.onload = function(){

//         $(".loading").fadeOut(1500 , function(){

//         $("body").css("overflow" , "auto");

//     });

// }



















