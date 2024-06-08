var timeout


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline()

    tl.from(".nav",{
        y:-'-10',
        opacity:0,
        duration:.5,
        ease: Expo.easeInOut,
    })
    tl.to(".boundingclint",{
        y:-9.5,
        ease: Expo.easeInOut,
        duration:1,
        stagger:.1,
    })
    tl.from(".herofooter",{
        y:-10,
        opacity:0,
        duration:1,
    })
}


function circlecapta(){
    var xscal = 1;
    var yscal = 1;

    var xpeve = 0;
    var ypeve = 0;


window.addEventListener("mousemove",function(dets){
    this.clearTimeout(timeout)

  xscal = gsap.utils.clamp(.8,1.2, dets.clientX - xpeve)
  yscal = gsap.utils.clamp(.8,1.2, dets.clientY - ypeve)

    xpeve = dets.clientX
    ypeve = dets.clientY

     
    circleMousefollower(xscal,yscal)

    timeout = setTimeout (function (){


    document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
     },100)
})
}


function circleMousefollower(xscal,yscal) {
window.addEventListener('mousemove',function(dets){
    document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscal}, ${yscal})`;
})
}
circlecapta()
circleMousefollower()
firstPageAnimation()


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });


// document.querySelectorAll(".elem").forEach(function(elem){
//     elem.addEventListener("mousemove", function (dets){
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease:Power1,
//             top:dets.clientY,
//             left:dets.clientY,
//         })
//     })

// })
    