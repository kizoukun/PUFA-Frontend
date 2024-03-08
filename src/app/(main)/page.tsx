import Image from "next/image";
import BGImage from "@/assets/backgroundimg.png";
import AnagataLogo from "@/assets/anagatalogo.svg";
import Member from "@/assets/member.jpg";
import Link from "next/link";
import Button from "@/components/Button";
import Faq from "@/components/main/Faq";
import NewsCard from "@/components/news/NewsCard";
import NewsCardBig from "@/components/news/NewsCardBig";
import StudyProgCard from "@/components/main/StudyProgCard";
import CardStore from "@/components/store/CardStore";
import EventSection from "@/components/event/EventSection";
import { Suspense } from "react";
import { FaqData, StudyProgramData } from "@/lib/data";
import CompreciationCards from "./_components/CompreciationCards";
import Loading from "@/components/Loading";

export const revalidate = 600;
export const dynamic = "force-dynamic";

export default async function Index() {
   return (
      <div className="min-h-screen">
         <div>
            <Image
               src={BGImage}
               alt="PUMA Photo"
               width="0"
               height="0"
               sizes="100vw"
               className="h-auto w-full"
            />
         </div>
         <section
            id="introduction"
            className="container mx-auto -mt-24 sm:-mt-32 md:-mt-48 lg:-mt-64 xl:-mt-96"
         >
            <Image
               alt="PUFA Photo"
               className="mx-auto my-12 h-48 rounded-2xl object-cover md:h-96"
               width={1080}
               height={720}
               src={Member}
            />
            {/* <img
               className="mx-auto my-5 aspect-video h-48 md:h-96 rounded-2xl"
               src="../member.jpg"
               alt="PUMA Photo"
            /> */}
            <div className="space-y-6 px-8 text-justify md:px-24">
               <p className="text-xl">
                  PUMA Computing is President University Major Association of
                  Computing. Members of PUMA Computing consist of students from
                  the IT (Information Technology) and IS (Information System)
                  majors.
               </p>
               <p className="text-xl">
                  PUMA Computing is President University Major Association of
                  Computing. Members of PUMA Computing consist of students from
                  the IT (Information Technology) and IS (Information System)
                  majors.
               </p>
               <Link href="/" className="block w-max">
                  <Button>See Details</Button>
               </Link>
            </div>
         </section>

         {/* programs */}
         <section className="my-[10rem] flex flex-col items-center space-y-12">
            <div className="border-l-4 border-[#3C99DC] pl-4">
               <h1 className="text-[1.5rem] font-[600]">Study Programs</h1>
            </div>

            <h1 className="text-center">
               The Faculty of Computing has four study programs that produce
               qualified student graduates in their fields.
            </h1>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
               {StudyProgramData.map((StudyProgram, index) => (
                  <div key={index}>
                     <StudyProgCard {...StudyProgram} />
                  </div>
               ))}
            </div>
         </section>

         {/* cabinet anagata */}
         <section className="my-[10rem] flex flex-col items-center space-y-12">
            <div className="border-l-4 border-[#1FA820] pl-4">
               <h1 className="text-[1.5rem] font-bold">Cabinet 2023/2024</h1>
            </div>

            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-4">
               <div className="h-[250px] w-[250px] rounded-lg bg-[#1FA820]"></div>

               <div className="flex max-w-[38rem] flex-col gap-8 rounded-lg border-2 border-[#1FA820] px-8 py-12">
                  <div className="flex items-center gap-4">
                     <h1 className="text-[1.2rem] font-[600]">
                        ANAGATA CABINET
                     </h1>
                     <hr className="h-[2px] w-[20rem] border-[#1FA820]" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <h1 className="font-[400]">
                        "One Team, One Vision, One for Computing"
                     </h1>
                     <h1>
                        We are attempting to be a bridge for the Computing
                        Faculty in a more positive way by growing together with
                        us.
                     </h1>
                  </div>
               </div>
            </div>

            <button className="rounded-lg border-2 border-[#1FA820] px-10 py-2 text-[#1FA820] transition-all duration-300 hover:bg-[#1FA820] hover:text-white">
               See our Cabinet
            </button>
         </section>

         {/* event section */}
         <section className="my-[10rem] flex select-none flex-col items-center space-y-8 md:space-y-12">
            <div className="border-l-4 border-[#E50D0D] pl-4">
               <h1 className="text-[1.5rem] font-[600]">Computing Events</h1>
            </div>

            <h1 className="text-center">
               Discover the latest updates on events in our faculty.
            </h1>

            {/* event card untuk home (2 besar) */}
            <div className="grid scale-90 grid-cols-1 gap-12 md:scale-100 md:grid-cols-2 md:gap-8">
               <div className="flex max-w-[35rem] gap-4 rounded-lg shadow-lg">
                  <div className="h-[300px] w-[250px] scale-110 rounded-lg bg-[#E50D0D]"></div>
                  <div className="max-w-[20rem] space-y-10 p-6">
                     <h1 className="text-[1.0rem] font-[600]">
                        Computing Social Project 2023
                     </h1>
                     <h1 className="text-[0.8rem]">
                        w/ Rumah Tahfidz Taman Qur'ani
                     </h1>
                     <p className="text-[0.8rem]">
                        Hola everyone, we are from PUFA Computing 2023. We are
                        so excited to announce the Social Project.
                     </p>
                     <div className="flex justify-between">
                        <h1 className="font-[600]">PUMA IT</h1>
                        <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                           <h1 className="text-[#E50D0D]">Upcoming</h1>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex max-w-[35rem] gap-4 rounded-lg shadow-lg">
                  <div className="h-[300px] w-[250px] scale-110 rounded-lg bg-[#E50D0D]"></div>
                  <div className="max-w-[20rem] space-y-10 p-6">
                     <h1 className="text-[1.0rem] font-[600]">
                        Computing Social Project 2023
                     </h1>
                     <h1 className="text-[0.8rem]">
                        w/ Rumah Tahfidz Taman Qur'ani
                     </h1>
                     <p className="text-[0.8rem]">
                        Hola everyone, we are from PUFA Computing 2023. We are
                        so excited to announce the Social Project.
                     </p>
                     <div className="flex justify-between">
                        <h1 className="font-[600]">PUMA IT</h1>
                        <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                           <h1 className="text-[#E50D0D]">Upcoming</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* event card untuk home (3 kecil) */}
            <div className="grid scale-90 grid-cols-1 gap-8 md:scale-75 md:grid-cols-3">
               <div className="max-w-[25rem] space-y-6 rounded-lg border border-[#E50D0D] p-6">
                  <h1 className="text-[1.2rem] font-[600]">
                     Computing Social Project 2023
                  </h1>
                  <h1>Hola everyone, We are from PUFA Computing 2023...</h1>
                  <div className="flex justify-between">
                     <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                        <h1 className="text-[0.8rem] text-[#E50D0D]">
                           Completed
                        </h1>
                     </div>
                     <Link href="">Read More</Link>
                  </div>
               </div>

               <div className="max-w-[25rem] space-y-6 rounded-lg border border-[#E50D0D] p-6">
                  <h1 className="text-[1.2rem] font-[600]">
                     Computing Social Project 2023
                  </h1>
                  <h1>Hola everyone, We are from PUFA Computing 2023...</h1>
                  <div className="flex justify-between">
                     <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                        <h1 className="text-[0.8rem] text-[#E50D0D]">
                           Completed
                        </h1>
                     </div>
                     <Link href="">Read More</Link>
                  </div>
               </div>

               <div className="max-w-[25rem] space-y-6 rounded-lg border border-[#E50D0D] p-6">
                  <h1 className="text-[1.2rem] font-[600]">
                     Computing Social Project 2023
                  </h1>
                  <h1>Hola everyone, We are from PUFA Computing 2023...</h1>
                  <div className="flex justify-between">
                     <div className="rounded-2xl border-2 border-[#E50D0D] px-4">
                        <h1 className="text-[0.8rem] text-[#E50D0D]">
                           Completed
                        </h1>
                     </div>
                     <Link href="">Read More</Link>
                  </div>
               </div>
            </div>

            <button className="rounded-lg border-2 border-[#E50D0D] px-10 py-2 text-[#E50D0D] transition-all duration-300 hover:bg-[#E50D0D] hover:text-white">
               See all Events
            </button>
         </section>

         {/* event */}

         <section
            id="event"
            className="max-w-8xl mx-auto my-32 space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#E50D0D]"></span>
               Computing Events
            </h2>
            <h3 className="">
               Discover the latest updates on events in our faculty.
            </h3>

            <div className="flex flex-col items-center justify-center gap-7 md:flex-row"></div>
            <Suspense fallback={<Loading />}>
               <EventSection />
            </Suspense>
         </section>
         {/* end */}

         {/* news */}
         <section
            id="news"
            className="max-h-xl mx-auto my-[10rem] max-w-7xl space-y-12 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#FF6F22]"></span>
               Computing News
            </h2>
            <h3 className="">
               The latest news about research, technology, achievements, and
               campus life
            </h3>
            <div className="grid grid-cols-1 gap-8 text-justify md:grid-cols-2">
               <NewsCardBig
                  image="../aot.jpg"
                  title="Attack On Titan"
                  description="AOT DEBEST"
                  time="10 november"
               />
               <div className="grid grid-cols-2 gap-8">
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
                  <NewsCard
                     image="../aot.jpg"
                     title="Attack On Titan"
                     description="AOT DEBEST"
                     time="10 november"
                  />
               </div>
            </div>
            <div className="flex items-center justify-center">
               <Link href="/" className="block w-max">
                  <Button className="border-[#FF6F22] px-10 py-2 text-[#FF6F22] hover:bg-[#FF6F22] hover:text-white">
                     See all News
                  </Button>
               </Link>
            </div>
         </section>

         {/* compreciacion */}

         <section
            id="compreciacion"
            className="max-h-xl mx-auto my-32 max-w-7xl space-y-8 p-5 text-center"
         >
            <h2 className="text-2xl font-bold">
               <span className="mr-4 border-l-4 border-l-[#AF95FF]"></span>
               Compreciation
            </h2>
            <h3 className="">Appreciation to Computizen’s best projects.</h3>
            <Suspense fallback={<Loading />}>
               <CompreciationCards />
            </Suspense>
            <div className="flex items-center justify-center">
               <Link href="/projects" className="block w-max">
                  <Button className="border-[#AF95FF] px-10 py-2 text-[#AF95FF] hover:bg-[#AF95FF] hover:text-white">
                     See all items
                  </Button>
               </Link>
            </div>
         </section>

         {/* store */}
         <section className="my-[10rem] flex flex-col items-center space-y-6 md:space-y-12">
            <div className="border-l-4 border-[#BA704F] pl-4">
               <h1 className="text-[1.5rem] font-[600]">Computing Store</h1>
            </div>

            <h1 className="text-center">
               Special merchandise for all Computizens
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
               <CardStore
                  image="../store/merch.png"
                  title="Computing Varsity"
                  category="Jacket"
                  price={343}
               />
               <CardStore
                  image="../store/merch.png"
                  title="Computing Varsity"
                  category="Jacket"
                  price={343}
               />
               <CardStore
                  image="../store/merch.png"
                  title="Computing Varsity"
                  category="Jacket"
                  price={343}
               />
            </div>

            <button className="rounded-lg border-2 border-[#BA704F] px-10 py-2 text-[#BA704F] transition-all duration-300 hover:bg-[#BA704F] hover:text-white">
               See all Items
            </button>
         </section>

         {/* Faq */}
         <section
            id="faq"
            className="max-h-xl mx-auto my-32 max-w-7xl space-y-8 p-5"
         >
            <div className="items-justify container mx-auto flex flex-col rounded-lg border border-black bg-white px-4 py-8 md:p-8">
               <div>
                  <h2 className="text-2xl font-semibold sm:text-4xl">
                     Frequently Asked Questions
                  </h2>
               </div>
               <div className="mb-6 mt-8 space-y-4">
                  {FaqData.map((FaqContent, index) => (
                     <div key={index}>
                        <Faq {...FaqContent} />
                     </div>
                  ))}
               </div>
            </div>
         </section>
         {/* end */}
      </div>
   );
}
