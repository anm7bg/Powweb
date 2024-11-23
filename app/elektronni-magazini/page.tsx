import AnimatedProjects from '@/components/AnimatedProjects';
import { blogCard } from '@/lib/interface';
import { getStores } from '@/lib/service';


const BlogPage = async () => {
	const posts: blogCard[] = await getStores();
	console.log("Posts")
	console.log(posts)
    
    return (
        // <p>Loading</p>
		<div className="el-mag-page">
            <AnimatedProjects posts={posts} title="Ел. магазини"/>
			<p>Разгледайте нашите успешно реализирани проекти за електронни магазини! Powweb.bg предлага професионални уеб решения за онлайн търговия, съчетаващи стилен дизайн, функционалност и отлична потребителска навигация. Доверете се на опита ни в създаването на ефективни платформи за продажби, оптимизирани за всички устройства и с интегрирани маркетингови инструменти. Започнете своя успешен онлайн бизнес с Powweb.bg!</p>
		</div>
	);
};

export default BlogPage;