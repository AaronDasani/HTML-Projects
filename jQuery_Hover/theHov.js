
$(document).ready(function(){

    $("ul li img").hover(function(){
        let tempSrc=$(this).attr("src");
        let tempAltSrc=$(this).attr("alt-src");

        $(this).attr("src", tempAltSrc);
        $(this).attr("alt-src", tempSrc);
        
        
    })
});