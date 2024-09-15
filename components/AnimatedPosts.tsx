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


export default function AnimatedPost(props:any) {
    // export default function AnimatedPost({posts}:any, {postTitle}: {postTitle: string}) {
// export default function AnimatedContent({slice}: {slice:Content.HeroSlice} ) {

let posts = props.posts;
let title = props.title;

    const container = useRef(null);
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        tl.fromTo(".post__title", {scale:0.5}, {scale:1, opacity:1});
        tl.fromTo(".post__menu", {y:20}, {y:0, opacity:1});
        tl.fromTo(".post__body", {scale:0.5}, {scale:1, opacity:1});
        // tl.fromTo(".hero__glow", {scale:0.5}, {scale:1, opacity:1});


    }, {scope:container})
    console.log("title")
    console.log(props.title)
    return (
        <div ref={container}>
             <h1 className='post__title opacity-0 page-title uppercase tracking-widest text-[1.5rem] text-center text-blue-100'>
            {title}
        </h1 >
            <PostCatMenu />
			<div className="posts post__body opacity-0">
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
    )
}