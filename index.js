const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav__links');
const sectionPR = document.querySelector('#section--5');

const fadeLink = function (e) {
	const navLink = e.target;
	if (!navLink.classList.contains('nav__link')) return;
	navLinks.forEach((link) => {
		link !== navLink ? (link.style.opacity = this) : '';
	});
};

const smoothTo = function (e) {
	e.preventDefault();
	const navLink = e.target;
	if (!navLink.classList.contains('nav__link')) return;
	const id = navLink.getAttribute('href');
	document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

nav.addEventListener('mouseover', fadeLink.bind(0.5));
nav.addEventListener('mouseout', fadeLink.bind(1));
nav.addEventListener('click', smoothTo);

// Reveal sections
const callback = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;
	entry.target.classList.remove('section--hidden');
	observer.unobserve(sectionPR);
};

const option = {
	root: null,
	rootMargin: '20px',
	threshold: 0,
};
const secObserve = new IntersectionObserver(callback, option);
secObserve.observe(sectionPR);
sectionPR.classList.add('section--hidden');
