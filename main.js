const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.registerPlugin(ScrollTrigger);


gsap.to(".animate_header", {
  background: "#f9f9f9",
  color: "#000",
  duration: 2,
  scrollTrigger: {
    trigger: ".animate_header",
    start: "100px top",
    end: "bottom top",
    scrub: 2, 
    // markers: true,
    triggerActions: "restart none reverse none "
  },
})

var tl = gsap.timeline();

//sequenced one-after-the-other
tl.fromTo(".anime_top-text span", {
   opacity: 0,
   y: 50,
   transformOrigin: 'bottom'
},{
  opacity: 1,
  duration: 1,
  ease: "power2.inOut",
  delay: 1,
  y: 0
})
.fromTo(".anime_second_text span", {
  opacity: 0,
  transformOrigin: 'left',
  y: 50,
},{
 opacity: 1,
 duration: 1,
 ease: "power2.inOut",
 y: 0,
})
.fromTo(".rotating_image", {x: "-1500px", opacity: 0},{x: 0, opacity:1, duration: 1})
.fromTo(".anime_last_one span", {
  opacity: 0,
  transformOrigin: 'left',
  y: 50,
},{
 opacity: 1,
 duration: 1,
 ease: "power2.inOut",
 y: 0
})
.to(".rotating_image", {
  rotation: 360,
  duration: 1,
  repeat: 1,
  repeatDelay: 1,
  repeat: -1,
  ease: "power2.inOut",
})


const reces = document.querySelector(".animate_items")
let raceWidth = reces.offsetWidth;
let amountToScroll = raceWidth - window.innerWidth;

setTimeout(function(){
  console.log("raceWidth", raceWidth)
  console.log("amountToScroll", amountToScroll)
}, 100)


const tween = gsap.to(reces, {
  x : -amountToScroll,
  duration: 3,
  ease: "none"
})

ScrollTrigger.create({
  trigger: ".animate_items_container",
  start: "top 40%",
  end: "+=" + amountToScroll,
  pin: true,
  animation: tween,
  scrub: 2,
  markers: true
})





