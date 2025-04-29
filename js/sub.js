

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.body.classList.add("page-in-active");
    }, 500);
  });

document.addEventListener("DOMContentLoaded", () => {
  subKvInteraction();
});

function subKvInteraction() {
  const y = document.querySelector("main")?.getAttribute("id");
  if (!y) return;

  if (document.querySelector(`#${y} .sub_top.top_img`)) {
    _();
  }

  function m(v, x, b) {
    return v + b * (x - v);
  }

  function _() {
    const v = document.querySelector(`#${y} .top_tit_area.sticky`);
    const x = document.querySelector(`#${y} .main-inner .top_kv_area`);
    const b = document.querySelector(`#${y} .main-inner .top_kv_area .core-wrap`);
    const S = document.querySelector(`#${y} .main-inner .top_kv_area .video`);
    const T = document.querySelector(`#${y} .main-inner .top_kv_area .core-wrap-inner`);
    const w = document.querySelector(`#${y} .main-inner .top_kv_area .video video`);
    const M = document.querySelector(`#${y} .main-inner .sub_top .top_tit-inner.absol`);
    const E = document.querySelector(`#${y} .main-inner .sub_top .top_tit-inner.static`);

    let A, C, L, N, R, P = false;
    const areaWidth$1 = window.innerWidth;

    if (w) w.load();
    if (M && E) M.style.width = E.getBoundingClientRect().width + "px";

    function D() {
      A = v?.getBoundingClientRect().top || 0;
      C = x?.offsetTop || 0;
      L = v?.getBoundingClientRect().height || 0;
      N = window.innerWidth < 769 ? 0.8934 : 0.8;
      if (M && E) M.style.width = E.getBoundingClientRect().width + "px";
      R = 100;
    }

    D();

    function I() {
      D();
      if (w && !P) {
        w.addEventListener("canplaythrough", function () {
          P = true;
          w.play();
        });
      }

      const F = window.scrollY;
      const k = v?.offsetTop || 0;
      const O = x?.getBoundingClientRect().top + F || 0;
      const B = O - L;
      const V = O + L;
      const W = O - A;
      const z = V - B;
      const $ = k / W;
      const q = F / O;

      if (q >= 0 && q <= 1) {
        if (b) b.style.width = `${m(areaWidth$1 * N, areaWidth$1, q)}px`;
        if (T) {
          T.style.height = window.innerWidth >= 769
            ? `${m(40.85, R, q)}%`
            : `${m(116.8, 130.7, q)}vw`;
        }
      } else if (q > 1) {
        if (b) b.style.width = `${window.innerWidth}px`;
        if (T) {
          T.style.height = window.innerWidth >= 769
            ? `${R}%`
            : `130.7vw`;
        }
      }

      if (S && q > 1.7 && P && w) {
        w.pause();
      } else if (S && q <= 1.7 && q > 0 && P && w) {
        w.play();
      }

      const staticTit = document.querySelector(".sub_top .top_tit-inner.static");
      if (staticTit) {
        if ($ >= 0 && $ <= 1) {
          const ee = -1 * (C - k - L) / z * 2 * 100;
          staticTit.style.clipPath = `inset(0% 0% ${ee}% 0%)`;
        } else if ($ >= 1) {
          staticTit.style.clipPath = "inset(0% 0% 100% 0%)";
        } else if ($ <= 0) {
          staticTit.style.clipPath = "inset(0% 0% 0% 0%)";
        }
      }
    }

    I();
    window.addEventListener("scroll", I);
    window.addEventListener("resize", I);
  }


  












  $(function () {
    // Lenis 부드러운 스크롤
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  
    // ✅ Lenis + ScrollTrigger 연동!
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  
    gsap.registerPlugin(ScrollTrigger);

    // 임시방편
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    $('.section03 > .scroll_inner').height($(window).innerHeight() * 5 + 'px');
    if(!isMobile) {
      $(window).on('resize', function() {
        $('.section03 > .scroll_inner').height($(window).innerHeight() * 5 + 'px');
      });
    }

    // 카카오톡 브라우저만의 방어용
    // const isKakaoInAppBrowser = /KAKAOTALK/i.test(navigator.userAgent);
    // if(!isKakaoInAppBrowser) {
    //   $(window).on('resize', function() {
    //     $('.section03 > .scroll_inner').height($(window).innerHeight() * 5 + 'px');
    //   });
    // }

    gsap.to(".img_box", {
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".scroll_pin",
        pinSpacing: true,
        // markers: true
      }
    });
  
    // 카드 올라오는 애니메이션
    gsap.to(".img_box ul:nth-child(5)", {
      y: "0%",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "3% 0",
        end: "16% 0",
        scrub: true,
      },
    });
  
    gsap.to(".img_box ul:nth-child(4)", {
      y: "0%",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "18% 0",
        end: "31% 0",
        scrub: true,
      },
    });
  
    gsap.to(".img_box ul:nth-child(3)", {
      y: "0%",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "18% 0",
        end: "31% 0",
        scrub: true,
      },
    });
  
    gsap.to(".img_box ul:nth-child(2)", {
      y: "0%",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "33% 0",
        end: "46% 0",
        scrub: true,
      },
    });
  
    gsap.to(".img_box ul:nth-child(1)", {
      y: "0%",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "33% 0",
        end: "46% 0",
        scrub: true,
      },
    });
  
    // 카드 펼치기
    gsap.to(".txt_wrap .txt_box .img_box ul li", {
      x: "0",
      y: "0",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "50% 0",
        end: "70% 0",
        scrub: true,
      },
    });
  
    // 두 번째, 네 번째 줄 카드 위로 이동
    gsap.to(".txt_wrap .txt_box .img_box ul:nth-child(2n) li img", {
      y: "-20%",
      x: "0",
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "50% 0",
        end: "70% 0",
        scrub: true,
      },
    });

    if (window.innerWidth <= 1024) {    
      // 두 번째 줄 이미지 x: 20%, y: -20% 이동
      gsap.to(".txt_wrap .txt_box .img_box ul:nth-child(2) li img", {
        x: "30%",
        y: "-20%",
        scrollTrigger: {
          trigger: ".scroll_inner",
          start: "50% 0",
          end: "70% 0",
          scrub: true,
        },
      });

      gsap.to(".txt_wrap .txt_box .img_box ul:nth-child(4) li img", {
        x: "-30%",
        y: "-20%",
        scrollTrigger: {
          trigger: ".scroll_inner",
          start: "50% 0",
          end: "70% 0",
          scrub: true,
        },
      });
    }

    if (window.innerWidth <= 450) {    
      // 두 번째 줄 이미지 x: 20%, y: -20% 이동
      gsap.to(".txt_wrap .txt_box .img_box ul:nth-child(2) li img", {
        x: "120%",
        y: "-20%",
        scrollTrigger: {
          trigger: ".scroll_inner",
          start: "50% 0",
          end: "70% 0",
          scrub: true,
        },
      });

      gsap.to(".txt_wrap .txt_box .img_box ul:nth-child(4) li img", {
        x: "-120%",
        y: "-20%",
        scrollTrigger: {
          trigger: ".scroll_inner",
          start: "50% 0",
          end: "70% 0",
          scrub: true,
        },
      });
    }
  
    // 텍스트 사라지기
    gsap.to(".txt_wrap .txt_box .txt", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".scroll_inner",
        start: "50% 0",
        end: "63% 0",
        scrub: true,
      },
    });
  
    ScrollTrigger.create({
      trigger: ".scroll_inner",
      start: "50% 0",
      onEnter: () => {
        document.querySelectorAll(".img_box ul li").forEach(li => {
          const img = li.querySelector("img");
          if (window.innerWidth > 1024) {
            img.classList.add("dark");
            li.classList.add("dark"); // 여기 중요!
          } else {
            img.classList.remove("dark");
            li.classList.remove("dark");
          }
        });
      },
      onLeaveBack: () => {
        document.querySelectorAll(".img_box ul li").forEach(li => {
          const img = li.querySelector("img");
          img.classList.remove("dark");
          li.classList.remove("dark");
        });
      }
    });
     
  });







  // infinite_rolling  START
  let roller = document.querySelector('.infiroll_wrap');
  roller.id = 'roller1'; 

  let clone = roller.cloneNode(true)
  clone.id = 'roller2';
  document.querySelector('.infi_box').appendChild(clone);

  roller.classList.add('original');
  clone.classList.add('clone');
  // infinite_rolling   END
}





// last_section
$(function () {
  gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  ScrollTrigger.matchMedia({
    // 데스크탑: 1025px부터
    "(min-width: 1025px)": function() {
      gsap.to(".last_txt_wrap .last_sec_img", {
        scrollTrigger: {
          trigger: ".last_section",
          start: "50% 50%",
          end: "bottom top",
          scrub: true,
          pin: ".last_wrap",
          pinSpacing: true,
        },
        width: "100vw",
        height: "100vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      });
    },
  
    // 모바일: 1024px 이하 전부
    "(max-width: 1024px)": function() {
      gsap.to(".last_txt_wrap .last_sec_img", {
        scrollTrigger: {
          trigger: ".last_section",
          start: "50% 50%",
          end: "bottom top",
          scrub: true,
          pin: ".last_wrap",
          pinSpacing: true,
        },
        width: "110vw",
        height: "80vw",
        top: "50%",
        left: "40%",
        margin:"0 0 0 -70%",
        transform: "translate(-50%, -40%)",
      });
      ScrollTrigger.refresh();
    },
  });
});
// last_section   END




