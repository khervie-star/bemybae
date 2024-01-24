"use client";

// components/FallingPetals.js
import React, { useEffect } from "react";
import { TweenLite, TweenMax, Linear, Sine } from "gsap";
export const FallingPetals: React.FC = () => {
  useEffect(() => {
    const falling = true;

    TweenLite.set("#container", { perspective: 600 });

    const total = 10;
    const container = document.getElementById("container");
    const w = window.innerWidth;
    const h = window.innerHeight;

    const R = (min: number, max: number) => min + Math.random() * (max - min);

    for (let i = 0; i < total; i++) {
      const Div = document.createElement("div");
      const Div2 = document.createElement("div");
      const Div3 = document.createElement("div");
      TweenLite.set(Div, {
        attr: { class: "dot" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
        xPercent: "-50%",
        yPercent: "-50%",
      });
      TweenLite.set(Div2, {
        attr: { class: "dot2" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
        xPercent: "-50%",
        yPercent: "-50%",
      });
      TweenLite.set(Div3, {
        attr: { class: "dot3" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
        xPercent: "-50%",
        yPercent: "-50%",
      });
      container?.appendChild(Div);
      container?.appendChild(Div2);
      container?.appendChild(Div3);
      animm(Div);
      animm2(Div2);
      animm3(Div3);
    }

    function animm(elm: any) {
      TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }

    function animm2(elm: any) {
      TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -25,
      });
      TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }

    function animm3(elm: any) {
      TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -5,
      });
      TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }

    console.log("hey");
  }, []);

  return <div id="container"></div>;
};
