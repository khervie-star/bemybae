"use client";

import Image from "next/image";
import { FallingPetals } from "../components";
import { useState } from "react";
import Lottie from "react-lottie";
import bunnyCry from "../../public/animations/bunnyCry.json";
import bunnyPlease from "../../public/animations/bunnyPlease.json";
import bunnyYes from "../../public/animations/bunnyYes.json";
import bunnyPunch from "../../public/animations/bunnyPunch.json";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "../components";

const getRandomPosition = () => {
  if (typeof window !== "undefined") {
    return {
      randomLeft: `${Math.random() * (window.innerWidth - 100)}px`,
      randomTop: `${Math.random() * (window.innerHeight - 50)}px`,
    };
  } else {
    return {
      randomLeft: "0px",
      randomTop: "0px",
    };
  }
};

export default function Home() {
  const [bunnyState, setBunnyState] = useState("normal");
  const [hovered, setHovered] = useState(false);
  const [randomPosition, setRandomPosition] = useState(getRandomPosition());
  const [hasStarted, setHasStarted] = useState(false);

  const bunnyCryOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyCry,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bunnyPleaseOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyPlease,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bunnyYesOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyYes,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bunnyPunchOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyPunch,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleHover = (hoverState: boolean) => {
    setHasStarted(true);
    if (hoverState === true) {
      setRandomPosition(getRandomPosition());
      const randomBunnyState = Math.floor(Math.random() * 2);
      setBunnyState("cry");
    }

    console.log(randomPosition);

    setHovered(hoverState);
  };

  const handleYesClick = () => {
    setBunnyState("yes");
    axios
      .post("https://formspree.io/f/mrgnekdw", {
        status: "She said Yessss",
      })
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex w-full min-h-screen p-5 lg:p-8 bg-[#f8c8dc] overflow-x-hidden fixed">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full lg:max-w-[800px]">
          <h1 className="text-[24px] lg:text-[32px] font-bold text-gray-700 mb-8 font-snowtimes text-center animate__animated animate__fadeInDown">
            Heyy Angelface, 🥺🥺🥺🥺
          </h1>
          <p className="text-[45px] text-pink-600 lg:text-[75px] font-semibold font-snowtimes text-center animate__animated animate__fadeInUp">
            Will you be my valentine? 🌸🩷
          </p>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center">
              <SplitText
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i: number) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                }}>
                Will you be my valentine? 🌸🩷
              </SplitText>
            </motion.div>
          </AnimatePresence>
          <div className="animation">
            {bunnyState === "normal" && (
              <Lottie options={bunnyPleaseOptions} height={300} width={300} />
            )}
            {bunnyState === "cry" && (
              <Lottie options={bunnyCryOptions} height={300} width={300} />
            )}
            {bunnyState === "yes" && (
              <Lottie options={bunnyYesOptions} height={400} width={400} />
            )}
            {bunnyState === "punch" && (
              <Lottie options={bunnyPunchOptions} height={300} width={300} />
            )}
          </div>
          {bunnyState !== "yes" && (
            <div className="mt-[40px] w-full flex items-center justify-center gap-6 lg:gap-8">
              <button
                className="bg-gradient-to-tr from-pink-600 to-rose-500 text-white shadow-lg px-8 py-2 font-outfit font-medium rounded-full text-[14px] lg:text-base"
                onMouseEnter={() => setBunnyState("normal")}
                onClick={handleYesClick}>
                Yesss 🥺🥺
              </button>
              <button
                className={`${
                  hasStarted ? "absolute" : "relative"
                } transition-all duration-300 ease-in-out bg-gradient-to-tr from-pink-600 to-rose-500 text-white shadow-lg px-8 py-2 font-outfit font-medium rounded-full text-[14px] lg:text-base`}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                style={{
                  top: hasStarted ? randomPosition.randomLeft : "0",
                  left: hasStarted ? randomPosition.randomLeft : "0",
                }}>
                Nope 😔
              </button>
            </div>
          )}
          {bunnyState == "yes" && (
            <div className="mt-[40px] w-full flex items-center justify-center text-center gap-6 lg:gap-8 text-pink-600 font-snowtimes text-[32px] font-bold ">
              Yaaaaaaay!!! You make me so happy babe 🥺🌸🩷🌸🩷🌸🩷
            </div>
          )}
        </div>
      </div>
      {/* <FallingPetals /> */}
    </main>
  );
}
