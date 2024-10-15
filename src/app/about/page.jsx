import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="h-full">
        <div className="flex flex-col items-center min-h-[50vh]">
            <Image
             src="https://cdn.pixabay.com/photo/2023/12/15/21/47/cat-8451431_1280.jpg"
             width={200}
             height={800}
            />
            <h1 className="text-lg m-6">นายวงศกร ยมจินดา</h1>
            <p>6414421023</p>
        </div>
    </div>
  );
}
