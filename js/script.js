const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}


let bg = document.querySelectorAll('.mouse-parallax-bg');
if (bg.length > 0) {
	for (let index = 0; index < bg.length; index++) {
		window.addEventListener('mousemove', function (e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			bg[index].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
		});
	}
}

let plus = document.querySelectorAll('.inner-program__plus');

plus.forEach(function (el) {
	$(el).hover(
		function () {


			this.parentElement.classList.remove("_tr");
			this.parentElement.classList.add('_active');
		},
		function () {
			this.parentElement.classList.add("_tr");
			this.parentElement.classList.remove("_active");
		},
	)
})



let color = document.querySelector('.dop__toggle');

$(color).on('click', function () {
	$(".dop__toggle").toggleClass('color');



	$("html").toggleClass('color');

	$(".inner-program__plus").toggleClass('color');
	$(".btn").toggleClass('color');
	$(".plate-header__author").toggleClass('color');
	$(".intro-header__date").toggleClass('color');
	$(".intro-header__title").toggleClass('color');

	$(".header__logo-img").toggle();
	$(".header__logo-img-purple").toggle();
})











