const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





function animatebutton() {


    var video = document.querySelector('#video');
    var videoplay = document.querySelector('.playvideo');
    video.addEventListener("mouseenter", function () {
        gsap.to(videoplay, {
            opacity: 1,
            scale: 1
        })
    })
    video.addEventListener("mouseleave", function () {
        gsap.to(videoplay, {
            opacity: 0,
            scale: 0
        })
    })
    video.addEventListener("mousemove", function (dets) {
        gsap.to(videoplay, {
            left: dets.x,
            top: dets.y
        })
    })
}
animatebutton();


function animationall() {

    gsap.from("#change h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        stagger: 0.4,
        duration: 0.5
    })
    gsap.from("#toovideo", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5
    })
}
animationall()
let z = document.querySelector(".cursor")
document.addEventListener("mousemove", function (dets) {
    gsap.to(z, {
        left: dets.x,
        top: dets.y
    })
})
var vb = document.querySelector("#child1")
var vc = document.querySelector("#child2")
var vd = document.querySelector("#child3")
var ve = document.querySelector("#child4")
vb.addEventListener("mouseenter", function () {
    gsap.to(z, {
        scale: 1,
        opacity: 1

    });

})
vb.addEventListener("mouseleave", function () {
    gsap.to(z, {
        scale: 0,
        opacity: 0

    });

})
vc.addEventListener("mouseenter", function () {
    gsap.to(z, {
        scale: 1,
        opacity: 1

    });

})
vc.addEventListener("mouseleave", function () {
    gsap.to(z, {
        scale: 0,
        opacity: 0

    });

})
vd.addEventListener("mouseenter", function () {
    gsap.to(z, {
        scale: 1,
        opacity: 1

    });

})
vd.addEventListener("mouseleave", function () {
    gsap.to(z, {
        scale: 0,
        opacity: 0

    });

})
ve.addEventListener("mouseenter", function () {
    gsap.to(z, {
        scale: 1,
        opacity: 1

    });

})
ve.addEventListener("mouseleave", function () {
    gsap.to(z, {
        scale: 0,
        opacity: 0

    });

})
