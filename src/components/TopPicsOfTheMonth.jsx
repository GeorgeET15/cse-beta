import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const img1 =
  "https://firebasestorage.googleapis.com/v0/b/cse-beta-2250d.appspot.com/o/wallpaper_1.jpg?alt=media&token=127db264-df43-4d62-be18-fb7e2a7aeefb";
const img2 =
  "https://m.media-amazon.com/images/M/MV5BMTY5ODI4NzMtM2EzYS00ZGFlLThjMjgtODMyN2QwYjBkYTYwXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_FMjpg_UX1000_.jpg";
const img3 =
  "https://firebasestorage.googleapis.com/v0/b/cse-beta-2250d.appspot.com/o/wallpaper_3.jpg?alt=media&token=abebd0d7-eeae-4b23-8693-321507c4115c";
const img4 =
  "https://firebasestorage.googleapis.com/v0/b/cse-beta-2250d.appspot.com/o/wallpaper_4.jpg?alt=media&token=0f482b85-27a5-4f58-ad88-7e2251ab7f96";
const img5 =
  "https://firebasestorage.googleapis.com/v0/b/cse-beta-2250d.appspot.com/o/wallpaper_5.jpg?alt=media&token=5340e176-4782-40f9-aecd-9e9f1e0c6c76";
const img6 =
  "https://cdn.britannica.com/51/182851-050-97EA5117/Publicity-image-Iron-Man-War-Machine-2.jpg";
const img7 =
  "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ca225ff72bf6775cd4b1a8855f5540cd.jpg";

gsap.registerPlugin(ScrollTrigger);

const LenisComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const section_1 = document.getElementById("vertical");
    const col_left = document.querySelector(".col_left");
    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      col_left,
      { y: 0 },
      { y: "170vh", duration: 1, ease: "none" },
      0
    );

    // ScrollTrigger animation for section_1
    ScrollTrigger.create({
      animation: timeln,
      trigger: section_1,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });

    const section_2 = document.getElementById("horizontal");
    let box_items = gsap.utils.toArray(".horizontal__item");

    gsap.to(box_items, {
      xPercent: -100 * (box_items.length - 1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: section_2,
        pin: true,
        scrub: 3,
        snap: 1 / (box_items.length - 1),
      },
    });

    // Ensure ScrollTrigger refreshes and works with the horizontal scroll
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {selectedImage && (
        <div className="model open">
          <CloseIcon onClick={closeModal} />
          <img src={selectedImage} style={{ width: "100%" }} alt="img" />
        </div>
      )}
      <div></div>

      <section id="horizontal" className="section_2">
        <h2 className="top-pics">Top Pics Of The Month</h2>
        <div className="container">
          <div class="horizontal__content">
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img1)}
              >
                1
              </div>
            </div>
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img2)}
              >
                2
              </div>
            </div>
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img3)}
              >
                3
              </div>
            </div>
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img4)}
              >
                4
              </div>
            </div>
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img5)}
              >
                5
              </div>
            </div>
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img6)}
              >
                6
              </div>
            </div>
            <div class="horizontal__item">
              <div
                class="horizontal__num"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(img7)}
              >
                7
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LenisComponent;
