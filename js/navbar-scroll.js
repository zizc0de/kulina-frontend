window.onscroll = () => {
	let nav = document.getElementById('nav');
	let logo = document.getElementById('nav-logo');
	let toggler = document.getElementById('toggler');
	if ( window.pageYOffset > 85 ) {
		nav.classList.add("navbar-white");
		nav.classList.remove("navbar-transparent");
		logo.src = "assets/images/logo/kulina-logo-red.png";
		toggler.classList.add("color-tomato");
		toggler.classList.remove("text-white");
	} else {
		nav.classList.add("navbar-transparent");
		nav.classList.remove("navbar-white");
		logo.src = "assets/images/logo/kulina-logo-white.svg";
		toggler.classList.add("text-white");
		toggler.classList.remove("color-tomato");
	}
};