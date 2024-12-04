gsap.registerPlugin(ScrollTrigger);
/* DOM */
const categoryImgsrc = ["../img/preview/cashmere.webp",
    "../img/preview/petites.webp",
    "../img/preview/tall.webp",
    "../img/preview/jumpsuit.webp", 
    "../img/preview/sweater.webp", 
    "../img/preview/tops.webp", 
    "../img/preview/blouse.webp",
    "../img/preview/pants.webp",
    "../img/preview/jeans.webp",
    "../img/preview/coats.webp",
    "../img/preview/blazer.webp",
    "../img/preview/suit.webp",
    "../img/preview/skirt.webp",
    "../img/preview/t-shirts.webp",
    "../img/preview/shirting.webp",
    "../img/preview/two-piece-dress.webp",
    "../img/preview/vest.webp",
    "../img/preview/jewely.webp",
    "../img/preview/winter-accessory.webp",
    "../img/preview/shoes.webp",
    "../img/preview/bag.webp",
    "../img/preview/belt.webp",
    "../img/preview/scarves.webp",
    "../img/preview/gloves.webp",
    "../img/preview/hat.webp",
    "../img/preview/socks.webp",
    "../img/preview/sunglasses.webp",];

const remoteicons = document.querySelectorAll('.remotemainicon');
const toSections = document.querySelectorAll('.controller');



const modifyImgFilter = () => {
    document.querySelector(".imagebox_for_relative").addEventListener("mouseover", () => {
        document.querySelector("#stickyimg").classList.add("active");
    });
    document.querySelector(".imagebox_for_relative").addEventListener("mouseleave", () => {
        document.querySelector("#stickyimg").classList.remove("active");
    });
};

const animateSection3 = () => {
    let section3tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            start: "center center",
            end: "+=1400",
            scrub: true,
            pin: true,
        },
    });
    section3tl
        .fromTo(".videowrap", { height: "480px" }, { height: "960px" })
        .from(".section3__spanwrap div span", { y: "50px", scale: 0.1, ease: "power3.out", stagger: { axis: "x", from: "edge", each: 0.1, amount: 0.5 } });
};

const showbftext = () => {
    let bttexttl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4_middle_blackfridaybanner",
            start: "top 40%",
            end: "bottom bottom",
            scrub: true,
        },
    });
    bttexttl
        .from(".sec4_bf_spanwrap1 div span", { y: "55px", scale: 0, ease: "power3.out", stagger: { axis: "x", from: "center", each: 0.1, amount: 0.5 } })
        .from(".sec4_bf_spanwrap2 div span", { y: "55px", scale: 0, ease: "power3.out", stagger: { axis: "x", from: "center", each: 0.1, amount: 0.5 } });
};

const showSec6 = () => {
    let sec6tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".greet_container",
            start: "top top",
            end: "bottom top-=1000px",
            pin: true,
            pinSpacing: true,
            scrub: true,
        },
    });
    sec6tl.from(".spanwrap1 > span", { x: -320, opacity: 0 }).from(".spanwrap3", { x: -300, opacity: 0 });
};

const showSec6all = () => {
    gsap.from("#outroimg1", {
        scrollTrigger: {
            trigger: ".greet_container",
            start: "top 80%",
            end: "bottom bottom",
            scrub: true,
        },
        y: -960,
        opacity: 0,
    });
    gsap.from("#outroimg2", {
        scrollTrigger: {
            trigger: ".greet_container",
            start: "top 50%",
            end: "bottom bottom",
            scrub: true,
        },
        x: 400,
        opacity: 0,
        ease: "power2.out",
    });
    gsap.from("#outroimg3", {
        scrollTrigger: {
            trigger: ".greet_container",
            start: "top 20%",
            end: "bottom center",
            scrub: true,
        },
        x: -400,
        opacity: 0,
        ease: "power3.out",
    });
    gsap.from(".spanwrap2", {
        scrollTrigger: {
            trigger: ".greet_container",
            start: "top top-=600px",
            end: "+=1000",
            scrub: true,
        },
        y: -100,
        opacity: 0,
        ease: "power3.out",
    });
};

/* 스크롤을 내리면 헤더가 뷰포트 상단에 고정되게 하는 함수 */
const modifyHeaderFix = () => {
    window.addEventListener('scroll', () => {
        if(window.scrollY >=99){
            document.querySelector('.header2').classList.add('active');
        } else {
            document.querySelector('.header2').classList.remove('active');
        }
    })
}


/* 카테고리를 클릭하면 메뉴가 나오는 함수 */
let currentMenu = 0;
let lotateArrow = 0;
const slideCategory = () => {
    $('.category-wrap').click(function(){
        lotateArrow += 180;
        if(currentMenu === 0) {
            $('.category-section').stop().slideDown();
            currentMenu = 1;
        } else {
            $('.category-section').stop().slideUp();
            currentMenu = 0;
        }
        // $('.menuarrow').stop().toggleClass('active');
        $('.menuarrow').css("transform", `rotate(${lotateArrow}deg)`);
    })
}


const clickremoteBtn = () => {
    $('.dotbtn').click(function(){
        $('.dotbtn').toggleClass('active')
        $('.controller').toggleClass('active')
        remoteicons.forEach(ele => {
            ele.classList.toggle('active');
        })
    })
}
/* 리모컨 */
const scrollToRemote = () => {
    for(let i = 0; i<toSections.length; i++){
        toSections[i].addEventListener('click', () => {
            switch(i){
                case i=0 : {
                    lenis.stop();
                    window.scrollTo({
                        top : document.querySelector('html').offsetTop
                    })
                    console.log('i = 0');
                    lenis.start()
                    break;
                }
                case i=1 : {
                    lenis.stop();
                    window.scrollTo({
                        top : document.querySelector('.section4').offsetTop
                    })
                    console.log('i = 1');
                    lenis.start();
                    break;
                }
                case i=2 : {
                    lenis.stop();
                    window.scrollTo({
                        top : document.querySelector('.hotitem_container').getBoundingClientRect().top + window.scrollY
                    })
                    console.log('i = 2');
                    lenis.start();
                    break;
                }
                case i=3 : {
                    lenis.stop();
                    alert("아직 구현중인 페이지입니다.")
                    console.log('i = 3');
                    lenis.start();
                    break;
                }
            }
        })
    }
}


/* 프리뷰 */
const previewImage = () => {
    const previewsimg = document.querySelectorAll('.preview');
    for(let i = 0; i < previewsimg.length; i++){
        previewsimg[i].addEventListener('mouseenter', () => {
            document.querySelector('#categorynavimg').src = categoryImgsrc[i];
        })
    }
}
/* 스크롤 부드럽기 조절 */
const lenis = new Lenis({
    duration: 2,
});
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* 배너섹션  */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    disableOnInteraction:false,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});
/* 캐시미어 섹션 */
var swiper = new Swiper(".cashmereSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    disableOnInteraction:false,
    autoplay: {
        delay:2000,
    },
    loop: true,
    speed:1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on : {
        init : function(){
            const thiscontainer = document.querySelector('.cashmereSwiper');
            thiscontainer.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            })
            thiscontainer.addEventListener('mouseleave', () => {
                this.autoplay.start();
            })
        }
    }
});



modifyImgFilter();
animateSection3();
showbftext();
showSec6all();
showSec6();
slideCategory();
modifyHeaderFix();
clickremoteBtn();
scrollToRemote();
previewImage();
ScrollTrigger.create({
    trigger: ".section5", // 고정할 섹션
    start: "bottom bottom-=100",
    end: "+=200%",
    pin: true, // section1을 고정
    pinSpacing: false, // 고정된 동안 다른 섹션의 공간 유지
});