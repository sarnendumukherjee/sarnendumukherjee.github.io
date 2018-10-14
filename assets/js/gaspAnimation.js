document.addEventListener('DOMContentLoaded', function(){
    TweenMax.from("#bannerIcon", 2, {x:-300, y:-300,ease: Power3.easeOut});
    TweenMax.staggerFrom("#socialIconsContainer .socialIcon",2,{x:300,y:-300,ease: Power3.easeOut},0.5)
    TweenMax.from("#myCartoonisedImage",2,{opacity:0,y:300, ease: Power3.easeOut})

});