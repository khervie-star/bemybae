import Image from "next/image";
import { FallingPetals } from "../components";

export default function Home() {
  return (
    <main className="flex w-full h-screen p-5 lg:p-8 bg-[#f8c8dc]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full lg:max-w-[800px]">
          <h1 className="text-[20px] lg:text-[28px] font-bold text-gray-900 mb-8 font-lato text-center">
            Heyy Angelface, 🥺🥺🥺🥺
          </h1>
          <p className="text-[40px] text-[#A50104] lg:text-[70px] font-semibold font-la_belle text-center">
            Will you be my valentine? 🌸🩷
          </p>
        </div>
      </div>
    </main>
  );
}