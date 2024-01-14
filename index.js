const split = new SplitType(".item.one b", { types: "chars,words" });

gsap.to(
    split.chars,
    0.7,
    {
        x: "20",
        ease: "power2.inOut",
        yoyo: true,
        stagger: 0.06,
        repeat: -1
    }
);


document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');
    const toggleBody = document.querySelector('.toggle-body');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', () => {
        background.classList.toggle('background--on');
        toggleBody.classList.toggle('toggle-body--on');
        toggleBtn.classList.toggle('toggle-btn--on');
        toggleBtn.classList.toggle('toggle-btn--scale');

    });
});

gsap.from(logo, { x: -200, duration: 3, ease: 'power2.out' });
