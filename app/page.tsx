import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { Spotlight } from "@/components/Spotlight";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20
                h-screen' fill='white' />
                <Spotlight className='top-10 left-90 h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
            </div>
      <div className="hero p-[20px] text-[1.2rem]">
        <h1 className='home-page-title uppercase tracking-widest text-[1.5rem] text-center text-blue-100'>
            SEO | Изработка и поддръжка на уеб сайтове и SPA!
        </h1 >
        <Image className="rounded home-img" src={"https://powweb.space/wp-content/uploads/2024/07/analiz.jpg"} width={848} height={300} alt="SEO | Изработка и поддръжка на уеб сайтове и SPA!" />
        <h2 className="text-center text-[1.5rem]">
          Професионално инсталиране, конфигуриране, оптимизиране, поддръжка и SEO, за сайтове, електронни магазини и SPA. React / Next js И WordPress на достъпни цени!
        </h2>
        <p className="text-center">Здравейте, занимаваме се WordPress от края на 2013 година и от 2023 с React / Next js.  Специализирани сме в изработката, оптимизация, поддръжка и SEO, на малки и средни сайтове, ел. магазини и SPA. Предлагаме цялостни решения за стартиране на онлайн бизнес. </p><p className="text-center">На първо място за нас е клиента да остане доволен, получи професионални услуги и да плати възможно най-ниската цена за услугата която търси. </p><p className="text-center">Постоянно обновяваме нашите услуги и следим най-новите тенденции в изработката на сайтове, SPA и SEO. И не на последно място, обръщаме голямо внимание към всеки детайл. </p><p className="text-center">Ако имате нужда от някоя, от изброените услуги, не се колебайте да се свържете със нас: powwebs@gmail.com, за безплатна консултация.</p>
      </div>
    </section>
  );
}
