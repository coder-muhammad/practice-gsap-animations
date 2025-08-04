gsap.to(".green", {
  rotation: 27,
  x: 200,
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
  { x: -100 }, 
  { 
    rotation: 360, 
    x: 100, 
    duration: 3,
  });
