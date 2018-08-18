
$(document).ready(function(){

    $("#wrapper ul li").click(function(){
       $(this).slideUp("slow");
        
    });

   
    $("#wrapper button").hover(function (){

        $("button").css("width", 140);
        
       
    }, function (){

        $("button").css("width", 130);
       
    })

    $("#wrapper button").mousedown(function (){

        $("button").css("color", "white");
        $("button").css("background-color", "black");
        $("button").css("width", 130);
        
        $("li").show("slow");
       
    })
    $("#wrapper button").mouseup(function (){

        $("button").css("color", "black");
        $("button").css("background-color", "white");
        $("button").css("width", 140);
        
    })

      
});
