import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const PostCatMenu = () => {
  return (
        <ul className='post-menu post__menu opacity-0'>
            <li><Link href={"/blog"}>Всички</Link></li>
            <li><Link href={"/kakvo-e-seo"}>SEO</Link></li>
            <li><Link href={"/za-wordpress"}>WordPress</Link></li>

        </ul>
  )
}

export default PostCatMenu 