const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.2, ease: "Elastic.easeOut.config(1,0.3)" },
});
const container = document.querySelector(".container");

tl.to(container, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
tl.to(".next", { opacity: "0" });
tl.to(".title1", { opacity: "1" }, "+=.3");

tl.to(
  container,
  { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
  "+=1"
);
tl.to(".title2", { opacity: "1" });
tl.to(".title2", { color: "white" }, "+=.7");
tl.to(
  ".container2",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  "-=.3"
);
tl.to(".container2", { zIndex: "1" });
tl.to(
  ".info",
  {
    duration: 1,
    ease: "Back.easeInOut",
    opacity: "1",
    right: "20%",
  },
  "+=.5"
);

document.querySelector(".next").addEventListener("click", () => {
  tl.play();
});

document.querySelector(".container2").addEventListener("click", () => {
  tl.reverse();
});
