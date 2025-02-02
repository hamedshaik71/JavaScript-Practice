window.addEventListener("mousemove", function (details) {
	let rect = document.querySelector("#center");
	let xVal = gsap.utils.mapRange(
		0,
		window.innerWidth,
		100 + rect.getBoundingClientRect().width / 2,
		window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
		details.clientX
	);
	gsap.to("#center", {
		left: xVal + "px",
		ease: Power3,
	});
});
