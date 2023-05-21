(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());












let header_burger = document.querySelector(".header__burger")

let header_bottom = document.querySelector(".header__bottom")

let header_close = document.querySelector(".header__close")

header_burger.addEventListener("click", function () {
    header_bottom.classList.add("header__bottom_active")
})

header_close.addEventListener("click", function () {
    console.log(1)
    header_bottom.classList.remove("header__bottom_active")
})


let header_link = document.querySelectorAll(".header__link")

if (window.innerWidth < 768) {

    for (let i = 0; i <  header_link.length; i++)

    {
        header_link[i].addEventListener("click", function () {
            header_bottom.classList.remove("header__bottom_active")

        })
    }

}


