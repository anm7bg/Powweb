import Image from 'next/image';
import React from 'react';



const Logo = () => {
  return (
        <Image className='main-logo' src={"/logo.png"} width={200} height={100} alt='Powweb logo' />
  )
}

export default Logo 