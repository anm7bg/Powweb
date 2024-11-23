import AnimatedProjects from '@/components/AnimatedProjects';
import { blogCard } from '@/lib/interface';
import { getProekti } from '@/lib/service';


const BlogPage = async () => {
	const posts: blogCard[] = await getProekti();
	console.log("Posts")
	console.log(posts)
    
    return (
        // <p>Loading</p>
		<div className="proekti-page">
            <AnimatedProjects posts={posts} title="Проекти"/>
			<p>Открийте реализираните уеб проекти от Powweb.bg – вашият доверен партньор в уеб дизайна и разработката. Вдъхновете се от иновативни решения, модерни дизайни и професионални услуги, които превръщат идеите в успешни онлайн платформи. Разгледайте нашето портфолио от сайтове за бизнес, е-търговия и персонализирани проекти. С Powweb.bg мечтите ви стават реалност!</p>
		</div>
	);
};

export default BlogPage;