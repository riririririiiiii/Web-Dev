export class Product {
  id: number;
    name: string;
    description: string;
    price: string;
    imageLink?: string;
    rating: number;
    sourceLink?: string;
    category: string;
    like: number;
    constructor(id: number, name: string, description: string, price: string, imageLink: string, rating: number, sourceLink: string, category:string, like: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageLink = imageLink;
      this.rating = rating;
      this.sourceLink = sourceLink;
      this.category=category;
      this.like=like;
    }
}

export const products = [
  new Product(1, 'Пылесос Deerma DX700 белый', 'тильный, компактный и удобный пылесос', '14 980', 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium', 5, 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000', 'Малая техника для дома', 0),
  new Product(2, 'Блендер Slaouwo HB-2075 черный', 'погружной блендер', '6 927', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000', 'Мелкая техника для кухни', 0),
  new Product(3, 'Электрогриль Xiaomi Smart Air Fryer 6.5L BHR7357EU', 'Конвекционный нагрев на 360° ', '59 400', 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h3f/87089997873182.jpg?format=gallery-medium', 5, 'https://kaspi.kz/shop/p/elektrogril-xiaomi-smart-air-fryer-6-5l-bhr7357eu-118273472/?c=750000000', 'Мелкая техника для кухни', 0),
  new Product(4, 'Микроволновая печь LG MS-2042DB черный', 'Микроволновая печь LG MS-2042DB выполнена в стильном черном цвете, что делает ее универсальной для кухни любого дизайна.', '46 320', 'https://resources.cdn-kaspi.kz/img/m/p/h87/h60/63757616578590.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/lg-ms-2042db-chernyi-2900200/?c=750000000', 'Мелкая техника для кухни', 0),
  new Product(5, 'Очиститель воздуха Xiaomi Smart Air Purifier 4 Lite', 'позволит дышать чистым и свежим воздухом без неприятных запахов и частичек пыли или пыльцы', '76 000', 'https://resources.cdn-kaspi.kz/img/m/p/h30/h42/64319244173342.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/ochistitel-vozduha-xiaomi-smart-air-purifier-4-lite-ac-m17-sc-belyi-103535997/?c=750000000', 'Климатическая техника', 0),
  new Product(6, 'Холодильник LG GC-B459MLWM серый', 'главное преимущество это тихая работа', '244 400', 'https://resources.cdn-kaspi.kz/img/m/p/h40/hde/85253298913310.jpg?format=gallery-medium', 5, 'https://kaspi.kz/shop/p/lg-gc-b459mlwm-seryi-116895924/?c=750000000', 'Крупная техника для дома', 0),
  new Product(7, 'Стиральная машина Samsung WW70AG5S21EELD белый', 'рассчитана на 7 кг', '177 837', 'https://resources.cdn-kaspi.kz/img/m/p/hce/h01/82826771955742.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/samsung-ww70ag5s21eeld-belyi-112549979/?c=750000000', 'Крупная техника для дома', 0),
  new Product(8, 'Робот-пылесос Xiaomi Robot Vacuum S20 BHR8629EU белый', 'идеальный помощник для дома)', '79 864', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/had/86299588788254.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-bhr8629eu-belyi-120489305/?c=750000000', 'Малая техника для дома', 0),
  new Product(9, 'Отпариватель Sunqar PRO S200 розовый', 'выполняет 2 функции: пароотпаривателя и пароочистителя', '51 990', 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p7f/10447584.jpeg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/sunqar-pro-s200-rozovyi-121118551/?c=750000000', 'Малая техника для дома', 0),
  new Product(10, 'Кухонный комбайн KENWOOD KCL95.004SI Cooking Chef XL', 'Если современная кулинарная техника еще и не в состоянии полноценно заменить повара-человека, то купив кухонную машину Kenwood KCL 95 004 SI Cooking Chef XL, вы сможете убедиться, насколько близко к этому уже подошли технологии!', '649 990', 'https://resources.cdn-kaspi.kz/img/m/p/h72/he4/63921091969054.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000', 'Мелкая техника для кухни', 0),
  new Product(11, 'Кофемашина SOKANY SK-6862 серебристый', 'идеальное решение для ценителей ароматного и насыщенного кофе.', '35 250', 'https://resources.cdn-kaspi.kz/img/m/p/p78/p3b/7463539.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/kofemashina-sokany-sk-6862-serebristyi-109791914/?c=750000000', 'Мелкая техника для кухни', 0),
  new Product(12, "Кондиционер CHANGHONG CHG-09QB белый + монтажный комплект", 'Главной особенностью данной модели является многофункциональность, направленная именно в русло полезных в быту опций', '104 990', 'https://resources.cdn-kaspi.kz/img/m/p/h50/hed/80801770799134.png?format=gallery-medium', 4.1, 'https://kaspi.kz/shop/p/changhong-chg-09qb-belyi-montazhnyi-komplekt-103951213/?c=750000000', 'Климатическая техника', 0),
  new Product(13, 'Швейная машина Janome 4100L белый ','100 разнообразных швейных операций, включая строчки для квилтинга и богатый выбор декоративных строчек. Семь видов петель для различных типов тканей.', '175 000', 'https://resources.cdn-kaspi.kz/img/m/p/p23/p82/7102814.jpg?format=gallery-medium', 4.8, 'https://kaspi.kz/shop/p/janome-4100l-belyi-5000343/?c=750000000', 'Малая техника для дома', 0),
  new Product(14, 'Стеклоочиститель Cybros ORN7504 белый', 'прибор предназначен для быстрой и эффективной очистки различных гладких поверхностей: пластиковых окон, стеклопакетов, витражей, зеркал, мебели, кафеля, мраморной плитки и других', '34 990', 'https://resources.cdn-kaspi.kz/img/m/p/he6/hd4/86634392879134.jpg?format=gallery-medium', 4.8,'https://kaspi.kz/shop/p/cybros-orn7504-belyi-121765409/?c=750000000', 'Малая техника для дома', 0),
  new Product(15, 'Посудомоечная машина Hausberg HDW-600BI белый ', 'с вместимостью до 12 комплектов посуды', '124 990', 'https://resources.cdn-kaspi.kz/img/m/p/pf0/pc1/12264768.png?format=gallery-medium', 3, 'https://kaspi.kz/shop/p/hausberg-hdw-600bi-belyi-131041931/?c=750000000', 'Крупная техника для дома', 0),
  new Product(16, 'Духовой шкаф Midea MO670A4X серебристый', 'Модель имеет 7 программ приготовления, выбор которых осуществляется с помощью механического регулятора.', '133 600', 'https://resources.cdn-kaspi.kz/img/m/p/p38/p0d/26062703.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/midea-mo670a4x-serebristyi-2502092/?c=750000000', 'Крупная техника для дома', 0),
  new Product(17, 'Сушильная машина DAUSCHER DTD-1282DSW серебристый ', 'вентиляционная модель, которая требует вывода отработанного воздуха наружу через гофротрубу (диаметр 12 см).', '159 900', 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h35/87067819278366.jpg?format=gallery-medium', 5.0, 'https://kaspi.kz/shop/p/dauscher-dtd-1282dsw-serebristyi-122318061/?c=750000000', 'Крупная техника для дома',0),
  new Product(18, 'Озонатор Air Purifier Caiyue ', 'инновационное устройство для создания чистой и здоровой атмосферы', '8 100','https://resources.cdn-kaspi.kz/img/m/p/p2c/p85/12006216.jpg?format=gallery-medium', 4.9, 'https://kaspi.kz/shop/p/air-purifier-caiyue-107592225/?c=750000000', 'Климатическая техника', 0),
  new Product(19, 'Водонагреватель Ariston BLU1 R ABS 80 V ', 'относится к устройствам накопительного типа', '62 999', 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h61/63807716425758.jpg?format=gallery-medium', 5.0,'https://kaspi.kz/shop/p/ariston-blu1-r-abs-80-v-3900990/?c=750000000', 'Климатическая техника', 0),
  new Product(20, 'Рекуператор VAKIO Open Air', 'Обеспечивает автоматический приток свежего воздуха, очищенного от частиц крупной пыли, пуха, насекомых, сажи (благодаря фильтру F6), ослабляет уличные шумы и может устанавливаться в любых помещениях.', '98 000', 'https://resources.cdn-kaspi.kz/img/m/p/h32/h36/80798929780766.jpg?format=gallery-medium', 2.2, 'https://kaspi.kz/shop/p/vakio-open-air-110395960/?c=750000000', 'Климатическая техника', 0),
  ];
