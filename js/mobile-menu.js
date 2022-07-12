(() => {
	const refs = {
		openMenuBtn: document.querySelector(".menu-open-btn"),
		closeMenuBtn: document.querySelector(".menu__mob-close"),
		menu: document.querySelector(".menu__mob"),
		body: document.querySelector("body"),
	};

	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.menu.classList.toggle("is-hidden");
		refs.body.classList.toggle("no-scroll");
	}
})();
