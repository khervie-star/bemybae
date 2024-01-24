import Image from "next/image";
import { FallingPetals } from "../components";

export default function Home() {
  return (
    <main className="flex w-full h-screen p-5 lg:p-8 bg-[#f8c8dc]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full lg:max-w-[800px]">
          <h1 className="text-[20px] lg:text-[28px] font-bold text-gray-700 mb-8 font-snowtimes text-center">
            Heyy Angelface, 🥺🥺🥺🥺
          </h1>
          <p className="text-[50px] text-pink-600 lg:text-[80px] font-semibold font-snowtimes text-center">
            Will you be my valentine? 🌸🩷
          </p>
        </div>
      </div>
    </main>
  );
}
