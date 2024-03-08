"use client";
import Button from "@/components/Button";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MemberCard from "@/components/cabinet/MemberCard";
import { Pagination } from "swiper/modules";

const members = [
   {
      name: "Aura Shafarina Salsabila",
      position: "Chairperson",
      image: "/member/bod/Aura Shafarina Salsabila.jpg",
   },
   {
      name: "Bintang Wira Gemilang",
      position: "Vice Chairperson 1",
      image: "/member/bod/Bintang Wira Gemilang.png",
   },

   {
      name: "Zioneza Auxiliadora Lou Jeronimo Martins",
      position: "Vice Chairperson 2",
      image: "/member/bod/Zioneza Auxiliadora Lou Jeronimo Martins.jpg",
   },
   {
      name: "Irene Putri Sihite",
      position: "Secretary 1",
      image: "/member/bod/Irene Putri Sihite.png",
   },
   {
      name: "Gita Olfa Hidayah",
      position: "Secretary 2",
      image: "/member/bod/Gita Olfa Hidayah.jpg",
   },
   {
      name: "Gabriela Imanuel Setiawan",
      position: "Secretary 3",
      image: "/member/bod/Gabriela Imanuel Setiawan.jpg",
   },
   {
      name: "Alexandra Verencia Poluakan",
      position: "Treasure 1",
      image: "/member/bod/Alexandra Verencia Poluakan.jpg",
   },
   {
      name: "Dian Vania Jessicha Rondonuwu",
      position: "Treasure 2",
      image: "/member/bod/Dian Vania Jessicha Rondonuwu.png",
   },
   {
      name: "Dinda Ayu Maulina",
      position: "Treasure 3",
      image: "/member/bod/Dinda Ayu Maulina.jpg",
   },
];

export default function page() {
   return (
      <section>
         <div className="flex flex-col space-y-12 px-4 py-[2rem] md:px-[10rem]">
            {/* text logo nya  */}
            <div className="flex flex-col border-l-4 border-[#1FA820] pl-4 md:pl-8">
               <h1 className="text-[2rem] font-[900] uppercase tracking-widest md:text-[3rem]">
                  Board of Director
               </h1>
               <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                  <h1 className="text-[2rem] font-thin uppercase tracking-widest text-stroke-1 text-stroke-black text-stroke-fill-white md:text-[3rem]">
                     Division
                  </h1>
                  <h1 className="text-justify text-[0.8rem] md:max-w-[20rem]">
                     is a representative of the highest division consisting of
                     Chairperson, Vice Chairperson, Secretary, and Treasurer.
                  </h1>
               </div>
            </div>

            {/* gambarnya  */}
            <div className="h-[200px] w-full rounded-lg bg-[#1FA820] md:h-[363px] md:w-[645px]"></div>
         </div>

         <div className="px-4 py-[3rem] md:px-[10rem]">
            <h1 className="text-center font-[700] text-[#353535] md:text-[2.25rem]">
               Events and Workplan
            </h1>
            <div className="mx-auto grid grid-cols-1 gap-4 py-4 md:grid-cols-3 md:gap-10 md:py-[2rem]">
               <Button className="rounded-full border-[#1FA820] text-sm uppercase text-[#1FA820] hover:bg-[#1FA820] md:text-[1.563]">
                  legislator
               </Button>
               <Button className="rounded-full border-[#1FA820] text-sm uppercase text-[#1FA820] hover:bg-[#1FA820] md:text-[1.563]">
                  annual event
               </Button>
               <Button className="rounded-full border-[#1FA820] text-sm uppercase text-[#1FA820] hover:bg-[#1FA820] md:text-[1.563]">
                  review & report
               </Button>
               <Button className="rounded-full border-[#1FA820] text-sm uppercase text-[#1FA820] hover:bg-[#1FA820] md:text-[1.563]">
                  computing cash
               </Button>
            </div>
         </div>

         {/* member */}
         <div className="bg-[#F2F2F2] px-4 py-4 md:px-[10rem] md:py-[1rem]">
            <h1 className="justify-center py-1 text-center text-[2.25rem] font-[700] text-[#353535] md:flex md:py-[0.125rem]">
               Division Members
            </h1>
            {/* carousel  */}
            <div className="block py-4 md:hidden">
               <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
               >
                  {members.map((member, index) => (
                     <SwiperSlide key={index}>
                        <MemberCard
                           name={member.name}
                           position={member.position}
                           image={member.image}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="hidden py-4 md:block">
               <Swiper
                  slidesPerView={4}
                  spaceBetween={5}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
               >
                  {members.map((member, index) => (
                     <SwiperSlide key={index}>
                        <MemberCard
                           name={member.name}
                           position={member.position}
                           image={member.image}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   );
}
 