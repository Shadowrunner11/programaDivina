$(()=>{
    $("#menu-icon").click(()=>{
        
        $("#menu-icon").toggleClass("animate");
        $(".center").find('div').removeClass('no-animate');
        $("#menu").slideToggle("slow");
    });
})