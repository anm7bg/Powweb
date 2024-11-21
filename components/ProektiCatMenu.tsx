import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const ProektiCatMenu = () => {
  return (
        <ul className='proekti-menu post__menu'>
            <li><Link href={"/proekti"}>Всички</Link></li>
            <li><Link href={"/elektronni-magazini"}>Ел. магазини</Link></li>
            <li><Link href={"/firmeni-saytove-blogove-i-spa"}>Фирмени сайтове, блогове и SPA</Link></li>
        </ul>
  )
}

export default ProektiCatMenu 