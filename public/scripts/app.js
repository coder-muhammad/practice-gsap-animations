gsap.to(".green", {
  rotation: 27,
  x: 100,
  duration: 2,
});

gsap.to(".blue", { 
  rotation: 360,
  x: 100,
  duration: 3,
});

gsap.from(".purple", { 
  rotation: -360,
  x: -100,
  duration: 3,
});

gsap.fromTo(".red",
  { x: -500 }, 
  { 
    rotation: 360, 
    x: 100, 
    duration: 3,
  });


let tl = gsap.timeline();
tl.to("#green", {duration: 1, x: 774})
  .to("#blue", {duration: 2, x: 774})
  .to("#purple", {duration: 1, x: 774})
  .to("#red", {duration: 1, x: 774})