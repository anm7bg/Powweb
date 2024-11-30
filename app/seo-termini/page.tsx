import PostCatMenu from "@/components/PostCatMenu";
import { title } from "@/components/primitives";
import StarGrid from "@/components/StarGrid";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="page-seo">
      <Image
        src={"https://i.postimg.cc/6qxjttLk/seo-termini.jpg"}
        width={700}
        height={300}
        alt="SEO термини"
        priority
      />
      <h1 className="text-center">SEO Термини</h1>
      <h2>SEO термини и Обяснения за услугата Search Engine Optimization (SEO)</h2>
      <p>Тази статия има за цел да подпомогне нашите читатели и клиенти,да разберат какво означават част от термините използвани от SEO Оптимизаторите при SEO Оптимизацията на вашия уеб сайт.</p>
      <p>Ето един малък списък със  SEO Термини,които се надяваме да ви помогнат и обяснят какво точно  означават те и какво правят. Това ще ви даде основни познания в постоянно променящия се свят на търсачките и начините за оптимизация на вашия уеб сайт, като част от тези SEO Термини остават  сравнително постоянни.</p>
      <ul>
      <li><strong>SEO Оптимизация</strong> – Search Engine Optimisation (SEO) – Това е термин който се отнася до всеки аспект на оптимизиране на вашия уеб сайт и позиционирането му в търсещите машини и уеб сайтове.Това означава,че за да се индексирате добре в търсещите машини и по специално Google,Yahoo и Bing вашите уеб страници,трябва да имат чист и оптимизиран код на първо място и след това качествено и SEO оптимизирано съдържание за да се катерите в резултатите при търсене в търсачките.</li>   
      <li><strong>Търсещи машини</strong> – Search Engines – Надяваме се, че вече знаете какво означава думата  търсачка.За тези от вас, които не са сигурни,тези  три са основните www.google.com , www.yahoo.com и www.bing.com .Търсачките са предимно уеб сайтове, които правят възможно ние да търсиме в интернет и да намираме това, което търсим, било то информация за дадена тема, продукт или  вашето желание да закупите видео или изображения от интернет. Търсачката изискват на търсещия да въведете ключови думи или фрази.</li>
      <li><strong>Search Engine Results Pages ( SERP)</strong> – Определението SERP можем да поясним по следния начин.SERP е резултат от търсене в търсачката и начина по които се показва това търсене.Специалистите уебмастери,често проверяват резултатите от търсене на дадени думи и фрази за да разбират и повишат знанията си за SEO,за да могат да подобрят работата си и покачат резултатите в търсачките за своите клиенти.</li>     
      <li><strong>Линк билдинг</strong> – Това е процес на развитие на връзки и  обмен на линкове с други сайтове които водят към вашия уеб сайт и са relevant по съдържание и категория.</li>    
      <li><strong>Мета Тагове</strong> – Мета таговете се използват за  идентифициране на дадена страница какво съдържание,описание и ключови думи може да намерим в тази страница.От гледна точка на SEO оптимизацията на уеб сайтове тези мета тагове, са невидими за интернет потребителите  и са  поставени в „изходния код“ на всяка страница в един уеб сайт. Мета таговете се използват предимно от уеб разработчиците да създадат определени думи и фрази, за да покажат на роботите търсачки определена информация по отношение на уеб страницата със съдържание, което ние не  можем да се виждаме от самото съдържание на дадена страницата,тези мета тагове са видими само за роботите на търсещите машини.</li>       
      <li><strong>Search Engine Marketing (SEM)</strong> – В повечето случаи този термин е  известен като SEM.Това е пускането на вашия уеб сайт на първо място, отнася се до Pay-Per-Click PPC маркетинг, при който рекламодателят избира да наддава за избрани ключови думи за „спонсорирани връзки при търсене“ на тези думи в търг среда с други рекламодатели в Мрежата, които наддават за едни и същи ключови думи.Като най-високата цена ще има своя връзка която е поставена в средата или в дясната част на търсачката и е под формата на спонсорирани връзки при показване на резултатите от търсенето на определена ключова дума.PPC маркетинг е само един от многото начини , по който можете да се показвате на  пазара и да подпомагате развититето на вашия сайт.</li>    
      <li><strong>Алгоритми</strong> – Търсачките  използват много сложна математическа формула на „ранг“  за уеб сайтове по ключови думи и  търсения. Това е много сложна формула, която е строго пазена от търсачките и често се актуализира и подобрява, за да се направи практически невъзможно да се обясни или разбере от уебмастърите. Алгоритмите са може би най-пазената тайна на всички функции в една  интернет търсачка като Google, ако търсачките публикуват своите алгоритми,след това ще бъде лесно за уебмастърите да разбират правилата и по този начин  да манипулират ранглистата и да рушат целостта на търсачките както и  резултати от търсене в Google.</li>    
      <li><strong>Web Crawlers ( роботи и паяци )</strong> – Това са сложни робот файлове, който периодично обикалят в мрежата като хиляди малки интелигентни бъгове. Те четат сайтовете и  набелязват нови страници и нови територии  за да ги  индексират в огромна база данни, като библиотекар. Интернет е като огромна библиотека състояща се от текстови  страници, видео,музика и графика всичко публикувано в интернет и се съхранява в сървъри по целия свят. Гугъл бота пътува в тези сървъри, за да индексира всички нови страници,връзки и като цяло поддържа актуално това, което е публикувано в мрежата.Вие трябва да помните, че резултатите, които виждате са това, което търсачките са индексирали, а не на живо в Мрежата.</li>    
      <li><strong>Директории</strong> – Директория може да има няколко значения, но от гледна точка на SEO директория е термин, използван за създаването на ферми за линкове, където разработчиците могат да създават,добавят  директории с линкове от различни уеб сайтове,разделени по категории.</li>    
      <li><strong>HTML</strong> – Това означава Hyper Text Mark-up Language и е в основата основния език в интернет пространството, който е наградивните елементи и основи на интернет за последните десет години след създаването си през 1995 година. Важно за вашия уеб сайт да има ясен и чист  HTML код ,за да може търсещите роботи по бързо и лесно да преминават по вашето съдържание и да индексират сайта ви бързо.</li>    
      <li><strong>Link Popularity ( колко е популярен вашия линк )</strong> – това е  мярка за вашия уеб сайт как е  свързван и колко е  популярен  в рамките на дадена онлайн  общност,какво е  качеството на входящите линкове, които влизат в уебсайта е мярка за вашата популярност и мярка за търсачките. Популярността на вашия линк се измерва с броя на линковете, приложимостта и най-важното е качеството на връзки, сочещи обратно към вашия сайт от други уебсайтове. Когато един сайт публикува вашия уеб адрес и кратко описание на това е линк към сайта ви. Тези обратни връзки често са поставени в страниците за размяна на линкове.Обратните линкове се поставят основно за да покажат на роботите на търсещите машини, че линковете, които препращат към вас са обратни линкове от подобно на вашето съдържание или така наречените приятелски линкове.</li>    
      <li><strong>Спам</strong> – всяко неестествено усилие за манипулиране на SERP`s. Какво всъщност представлява спам е може би подлежи на тълкуване и може да се променя, така че ако искате да запазите в ход на това, което се счита за нежелана поща и това, което е безопасно винаги трябва да попитате вашия уеб разработчик да ви държи в течение.</li>      
      </ul>
      <p>Добавяне в директории и търсачки – добавянето на вашия сайт в масови директории е остаряла техника, когато трябваше даден уеб сайт да се добави и представи в търсачките безплатно или да се заплати  за да представите своя уебсайт за включване в дадена директория или търсачка.За тези години търсачките неколкократно оптимизирваха своите кодове и уебсайтове като с всеки изминал ден сегашните търсачки стават  много по-умни, като например Google, Yahoo, Bing, които съставляват основната част от търсения, извършени в Световен мащаб. Тези търсачки в момента са автоматизирани механизми и именно – така наречените Web Crawlers – паяци – Ботове активно обикалят интернет пространството и индексират всяка една нова страница с информация или уебсайт и не е нужно да се опитвате да добавяте сайта си в стотиците директории в които се добавяха уебсайтовете преди години. Ако искате вашите страници да бъдат индексирани от търсещите машини просто се уверете, че страниците ви са кодирани ясно, без рамки, ясно маркирани и с идентифицирани Мета тагове,описания и ключови думи.Убедете се че на вашия сайт има изобилие от ново и информативно съдържание,карта на сайта за да покажете на търсещите роботи как лесно и бързо да навигират във вашия сайт. Намерете начин да се сдобиете с качествени входящи линкове към вашия сайт, и просто оставете останалото на търсещите машини свършат останалата работа по индекисрането на вашия уеб сайт.</p>
    </div>
  );
}
