// 네비게이션 바 스크롤 변화
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// 네비게이션 바 링크에 활성 상태 스타일 추가
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
});

// 비디오 확대 효과 및 자동 페이드 인 (화면에 들어오면 활성화)
const birthdayVideo = document.querySelector(".birthday-video");
if (birthdayVideo) {
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target); // 한 번만 트리거되도록 함
            }
        });
    }, observerOptions);

    videoObserver.observe(birthdayVideo);
}

// 이미지 요소에 확대 효과 추가
const images = document.querySelectorAll(".photo, .gallery-photo, .cake-image");
images.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.classList.add("zoom-in");
    });
    image.addEventListener("mouseout", () => {
        image.classList.remove("zoom-in");
    });
});
