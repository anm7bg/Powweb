 import Image from "next/image";
import { apiUrl } from "@/env";
import { blogCard } from "@/lib/interface";
import { getPostBySlug, getPosts } from "@/lib/service";

export const dynamicParams = true;

export async function generateStaticParams() {
	const response = await getPosts()
	// console.log("Response")
	// console.log(response)
	// const posts = await response;

    // console.log("Posts")
    // console.log(response)

	return response.map((post: any) => ({
		// postId: post.id.toString(),
		postSlug: post.slug,
	}));
}

async function getSinglePost(postId: string) {

	const response = await fetch(

		`${apiUrl}/posts/${postId}`
	);
	const post = await response.json();
	return post;
}

const Page = async ( {params}: {params: {postSlug: string}} ) => {

	console.log("Params")
	console.log(params.postSlug)

	const post: blogCard  = await getPostBySlug(params.postSlug);

    console.log('Post2')
    console.log(post)

	if (!post) {
		return <div>Loading...</div>;
	}

	// return (
	// 	<p>Loading</p>
	// );
		

	return (
		<div className="single-blog-page">
			<h1 className="post-page-title my-[50px] uppercase tracking-widest text-[1.5rem] text-center text-blue-100">{post.title}</h1>
			<Image 
				src={post.featuredImage.node.sourceUrl} 
				alt="image" 
				width={600} 
				height={400}
				className='post-image rounded-t-lg object-cover'
				unoptimized
			/>
			<div className="blog-post mt-[50px]">
				<p dangerouslySetInnerHTML={{ __html: post.content }}></p>
			</div>
		</div>
	);
	
};

export default Page;