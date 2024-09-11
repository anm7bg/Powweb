import Link from 'next/link';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getSeoPosts} from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'; 
import { blogCard } from '@/lib/interface';
// import SideNav from '@/components/side-nav';

const SeoPublikacii = async () => {
	const posts2: blogCard[] = await getSeoPosts();

	// console.log("Posts2")
	// console.log(posts2)

	return (
        // <p>Loading</p>
        <div className='leftRightWrap'>
            <div className="blog-page">
                <h1 className="center blue">Какво е SEO?</h1>
                <div className="posts">
                    {posts2.map((post: any, idx: number) => {
                        // console.log("Post")
                        // console.log(post)
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
                                        <Link href={`${post.slug}`}>Виж</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
                <p>Категорията - Какво е SEO? предоставя подробна информация за оптимизацията за търсачки (SEO) – процес, който помага на уебсайтовете да се класират по-високо в резултатите на търсачките като Google. Тук ще откриете ключови понятия, основни техники и стратегии, които подобряват видимостта на вашия сайт, увеличават органичния трафик и водят до по-добро онлайн присъствие. Независимо дали сте начинаещ или опитен специалист в областта на SEO, тази категория предлага полезни съвети и актуални тенденции, които ще ви помогнат да подобрите позициите си в търсачките и да постигнете по-добри резултати.</p>
            </div>
            {/* <SideNav /> */}
        </div>
	);
};

export default SeoPublikacii