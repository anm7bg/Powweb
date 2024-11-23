"use client"
import React, { useRef, useState } from "react";


import Link from 'next/link';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import Image from "next/image";
import PostCatMenu from '@/components/PostCatMenu';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PostPageTitle from "./PostPageTitle";
import StarGrid from "./StarGrid";
import { Spotlight } from "./Spotlight";
import ProektiCatMenu from "./ProektiCatMenu";


export default function AnimatedProjects(props:any) {
    // export default function AnimatedPost({posts}:any, {postTitle}: {postTitle: string}) {
// export default function AnimatedContent({slice}: {slice:Content.HeroSlice} ) {

let posts = props.posts;

console.log("props.posts")
console.log(props.posts)

let title = props.title;

    const container = useRef(null);
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        // tl.fromTo(".post__title", {scale:0.5}, {scale:1, opacity:1});
        // tl.fromTo(".post__menu", {y:20}, {y:0, opacity:1});
        tl.fromTo(".post__body", {y:20}, {y:0, opacity:1});
        tl.fromTo(".post__glow", {scale:0.5}, {scale:1, opacity:1});


    }, {scope:container})
    console.log("title")
    console.log(props.title)
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
            <PostCatMenu />
            <ProektiCatMenu />
            <div className="post__body opacity-0 post-wrap-dark p-[20px] mt-[20px]">
                <div className="post__glow opacity-0 glow-post absolute -z-10 aspect-square w-full  bg-blue-400/20 blur-3xl filter" />
                <div className="posts">
                    {posts.map((post: any, idx: number) => {
                        console.log("Post")
                        console.log(post)
                        // console.log("Project Link")
                        // console.log(post.url.projectLink)
                        return (
                            <Card className='mb-[20px]' key={idx}>
                                <Image 
                                    src={post.featuredImage.node.sourceUrl} 
                                    alt="image" 
                                    width={600} 
                                    height={400}
                                    className='rounded-t-lg object-cover'
                                />
                                <CardHeader className='project-title py-[5px] my-[5px] blog-card-head'>
                                    <h3 className='text-center text-lg line-clamp-2'>{post.title}</h3>
                                </CardHeader>
                                <CardBody className='p-[5px]'>
                                    <p dangerouslySetInnerHTML={{ __html: post.content }} className='project-content line-clamp-2 text-sm'></p>
                                </CardBody>
                                <CardFooter>
                                    <Button className='w-full mt7 projects-button'>
                                        <Link target="_blank" rel="nofollow" className='post-link' href={`${post.url.projectLink}`}>Виж</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
			</div>
            <div className="post__body opacity-0 post-wrap p-[20px] mt-[20px]">
                <div className="post__glow opacity-0 glow-home absolute -z-10 aspect-square w-full  bg-blue-400/20 blur-3xl filter" />
                <div className="posts">
                    {posts.map((post: any, idx: number) => {
                        console.log("Post")
                        console.log(post)
                        return (
                            <Card className='mb-[20px]' key={idx}>
                                <Image 
                                    src={post.featuredImage.node.sourceUrl} 
                                    alt="image" 
                                    width={600} 
                                    height={400}
                                    className='rounded-t-lg object-cover'
                                />
                                <CardHeader className='py-[5px] my-[5px] blog-card-head'>
                                    <h3 className='text-center text-lg line-clamp-2'>{post.title}</h3>
                                </CardHeader>
                                <CardBody className='p-[5px]'>
                                    <p className='line-clamp-2 text-sm'>{post.shortDesc}</p>
                                </CardBody>
                                <CardFooter>
                                    <Button className='w-full mt7'>
                                        <Link className='post-link' href={`${post.slug}`}>Виж</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
			</div>
        </div>
    )
}