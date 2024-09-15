import Link from 'next/link';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getWordpressPosts} from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'; 
import { blogCard } from '@/lib/interface';
import PostCatMenu from '@/components/PostCatMenu';
import AnimatedPost from '@/components/AnimatedPosts';
// import SideNav from '@/components/side-nav';

const WpPublikacii = async () => {
	const posts: blogCard[] = await getWordpressPosts();

	// console.log("Posts2")
	// console.log(posts2)

	return (
        // <p>Loading</p>
        <div className='leftRightWrap'>
            <AnimatedPost posts={posts} title="За WordPress" />
            <p>Категорията - За WordPress предлага пълна гама от ресурси и инструменти за изграждане и оптимизация на WordPress сайтове. Открийте полезни ръководства, плъгини, теми и съвети за подобряване на функционалността, сигурността и SEO оптимизацията на вашия уебсайт. Независимо дали сте начинаещ или напреднал потребител, тук ще намерите всичко необходимо за създаване на успешен и професионален WordPress сайт.</p>
        </div>
	);
};

export default WpPublikacii