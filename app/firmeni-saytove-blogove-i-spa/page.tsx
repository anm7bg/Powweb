import AnimatedProjects from '@/components/AnimatedProjects';
import { blogCard } from '@/lib/interface';
import { getBlogs } from '@/lib/service';


const BlogPage = async () => {
	const posts: blogCard[] = await getBlogs();
	console.log("Posts")
	console.log(posts)
    
    return (
        // <p>Loading</p>
		<div className="el-mag-page">
            <AnimatedProjects posts={posts} title="Фирмени сайтове, блогове и SPA"/>
			<p>Открийте професионални решения за фирмени сайтове, блогове и SPA приложения с Powweb.bg. Ние предлагаме персонализиран дизайн, бърза скорост и интуитивен потребителски интерфейс, за да ви помогнем да изградите успешен онлайн образ. Доверете се на експертите в уеб разработката и създайте уебсайт, който впечатлява и привлича клиенти!</p>
		</div>
	);
};

export default BlogPage;