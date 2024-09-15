import React from "react"

export default function PostPageTitle({title}: {title:string}) {
    return (
        <h1 className='post__title opacity-0 page-title uppercase tracking-widest text-[1.5rem] text-center text-blue-100'>
            {title}
        </h1 >
      )
}