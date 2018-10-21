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

    var helloAnimation = TweenMax.from("#hello-container",2,{opacity:0,y:300, ease: Power3.easeOut})

    var hiMessageScene = new ScrollMagic.Scene({
        triggerElement: '#hello-section'
    })
    .setTween(helloAnimation)
    //.addIndicators()
    .addTo(controller);

});