"use client"
import React, { useRef } from "react";

import Image from "next/image";
import { Spotlight } from "@/components/Spotlight";
import StarGrid from "@/components/StarGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function AnimatedContent() {
// export default function AnimatedContent({slice}: {slice:Content.HeroSlice} ) {

    const container = useRef(null);
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        tl.fromTo(".hero__heading", {scale:0.5}, {scale:1, opacity:1});
        tl.fromTo(".hero__img", {y:20}, {y:0, opacity:1});
        tl.fromTo(".hero__body", {scale:0.5}, {scale:1, opacity:1});
        tl.fromTo(".hero__glow", {scale:0.5}, {scale:1, opacity:1});


    }, {scope:container})

  return (
      <div ref={container}>
          <StarGrid />
          <div>
              <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20
              h-screen' fill='white' />
              <Spotlight className='top-10 left-90 h-[80vh] w-[50vw]' fill='purple' />
              <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
          </div>
          <div className="promocii hero p-[20px] text-[1.2rem] ">
              <h1 className='hero__heading opacity-0 page-title uppercase tracking-widest text-[1.5rem] text-center text-blue-100'>
                  Промоции!
              </h1 >
              <Image className="hero__img opacity-0 home-img" src={"/FB-2.jpg"} width={848} height={300} alt="SEO | Изработка и поддръжка на уеб сайтове и SPA!" />
              <div className="hero__glow opacity-0 glow-home absolute -z-10 aspect-square w-full  bg-blue-400/20 blur-3xl filter" />
             
              <div className="hero__body opacity-0 home-wrap-dark bg-gradient-to-b from-gray-900 to-gray-95 p-[20px]">
              <h2 className="text-center text-[1.7rem]">
                      Цената е валидна до 15 Март!!!
                  </h2>
                  <p className="text-center">Здравейте, промоцията включва изработване на сайт с базова функционалност и брой страници.</p>
                  <h3>Какво е включено в цената?</h3>
                  <ul>
                    <li>Професионално изработен и оптимизиран уебсайт, подходящ за стартиращ бизнес или личен блог.</li>
                    <li>Дизайн по избор.</li>
                    <li>Въвеждащо обучение за работа със сайта и административния панел и съвети за развитието на сайтът.</li>
                  </ul>
                  <br />
                  <h3>Какво не включва цената?</h3>
                  <ul>
                    <li>Цената не включва хостинг и домейн.</li>
                  </ul>
              </div>
          </div>
      </div>
  )
}