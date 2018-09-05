$('.nav-tabs a').on('click',function(){
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass('active');
});

$('.form-control').on('focus',function(){
    $(this).select();
});