document.addEventListener('DOMContentLoaded', function(){
    var controller = new ScrollMagic.Controller();
    
    var pinPhotoScene = new ScrollMagic.Scene({
        triggerElement:'#myCartoonisedImage',
        triggerHook:0,
        duration: '20%'
    })
    .setPin('#myCartoonisedImage',{pushFollowers: false})
    //.setPin('#myCartoonisedImage')
    //.addIndicators()
    .addTo(controller);
});