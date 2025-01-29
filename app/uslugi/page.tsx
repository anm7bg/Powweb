"use client"
import Image from 'next/image';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import StarGrid from '@/components/StarGrid';
import { Spotlight } from '@/components/Spotlight';
// import SideNav from '@/components/side-nav';

export default function Uslugi() {

    let title = "Услуги предлагани от Powweb";

    const container = useRef(null);
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        // tl.fromTo(".post__title", {scale:0.5}, {scale:1, opacity:1});
        // tl.fromTo(".post__menu", {y:20}, {y:0, opacity:1});
        tl.fromTo(".post__body", {y:20}, {y:0, opacity:1});
        tl.fromTo(".post__glow", {scale:0.5}, {scale:1, opacity:1});

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

                <h1 className='post__title page-title uppercase tracking-widest text-[1.5rem] text-center text-blue-100'>
                    {title}
                </h1 >

                <Image className="hero__img  home-img" src={"/uslugi.jpg"} width={848} height={300} alt="SEO | Изработка и поддръжка на уеб сайтове и SPA!" />


                <div className='uslugi'>
                    <p>Здравейте, ние от Powweb предлагаме: SEO услуги, изработка и поддръжка на уебсайтове и SPA на възможно най-ниската цена, спрямо вашите нужди.</p>
                    <p>Като ниската цена не означава ниско качество с нашият над 10 годишен опит ще ви предложим най-добрата услуга след кратка и безплатна консултация с Вас.</p>
                    <p>Ако имате нужда от: изработка или поддръжка на уебсайт, SPA или SEO услуга - пишете ни на имейл powwebs@gmail.com</p>
                </div>
            </div>
  );
}