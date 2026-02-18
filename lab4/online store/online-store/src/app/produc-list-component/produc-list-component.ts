import { Component, signal } from '@angular/core';
import { product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card-component/product-card-component';


@Component({
    selector: 'app-produc-list-component',
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './produc-list-component.html',
    styleUrl: './produc-list-component.css',
})
export class ProducListComponent {
    products = signal<product[]>([
        {
            id: 1,
            name: 'Видеокарта Palit RTX 5060 Ti INFINITY 3 16GB',
            description: 'Погрузитесь в мир высоких технологий с Palit RTX 5060 Ti INFINITY 3 16GB — видеокартой, которая обеспечит вам невероятную производительность и высокое качество графики для игр и профессиональных приложений.',
            price: 314990,
            rating: 3,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/p0b/37066117.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pf2/p0b/37066117.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0b/37066118.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pba/p0b/37066119.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-rtx-5060-ti-infinity-3-16gb-ne7506t019t1-gb2061s-16-gb-138216471/?c=750000000'
        },
        {
            id: 2,
            name: 'Видеокарта Palit GeForce RTX 5070 Infinity 3 (NE75070019K9-GB2050S) 12 Гб',
            description: 'Новая эра мощности малого форм-фактора: сборки серии Infinity 3 малого форм-фактора набирают популярность не без оснований. Они экономят место, избавляют от лишних деталей и обеспечивают большую портативность',
            price: 413000,
            rating: 4,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd3/pe8/58359334.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7f/pe8/58359337.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000'
        },
        {
            id: 3,
            name: 'Видеокарта Palit RTX 5060 Dual NE75060019P1-GB2063D 8 Гб',
            description: 'Palit GeForce RTX 5060 Dual предлагает классическую эффективность охлаждения в гладком современном черном дизайне. Два 95 - миллиметровых вентилятора обеспечивают конкурентоспособное охлаждение и тихую работу, а компактная 2 - слотовая конструкция подходит для сборок с малым форм - фактором.',
            price: 208000,
            rating: 4,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pd3/p61/45597346.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pd3/p61/45597346.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pef/p61/45597347.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p27/p62/45597349.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-rtx-5060-dual-ne75060019p1-gb2063d-8-gb-140586515/?c=750000000'
        },
        {
            id: 4,
            name: 'Видеокарта Colorful GeForce RTX 2060 SUPER NB 8G-V 8 ГБ',
            description: 'Видеокарта GeForce RTX 2060 SUPER обеспечит высокую производительность вашей игровой или рабочей станции как в профессиональных приложениях, предназначенных для работы с графикой, так и во время игровых сессий с высокими настройками изображения',
            price: 149900,
            rating: 1,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h5a/68468278067230.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/he7/h5a/68468278067230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hba/h47/68468278591518.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h49/h74/68468279115806.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/colorful-geforce-rtx-2060-super-nb-8g-v-8-gb-108680611/?c=750000000'
        },
        {
            id: 5,
            name: 'Видеокарта ASUS RTX 5060 Ti Dual OC DUAL-RTX5060TI-O16G 16 Гб',
            description: 'ASUS Dual GeForce RTX 5060 Ti сочетает в себе мощные тепловые характеристики с широкой совместимостью. Передовые решения охлаждения от флагманских видеокарт — включая два вентилятора Axial-tech для оптимизации воздушного потока к радиатору.',
            price: 339000,
            rating: 4,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5c/pd4/43506800.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p5c/pd4/43506800.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p95/pd4/43506802.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb1/pd4/43506803.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/asus-rtx-5060-ti-dual-oc-dual-rtx5060ti-o16g-16-gb-140011715/?c=750000000'
        },
        {
            id: 6,
            name: 'Видеокарта MSI RTX 5070 Ti 16G SHADOW 3X OC 16 Гб',
            description: 'Код товара:137472756 СерияGeForce RTX 50 Series ИнтерфейсPCI-E 5.0',
            price: 602000,
            rating: 5,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/p26/34378357.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p48/p26/34378357.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/msi-rtx-5070-ti-16g-shadow-3x-oc-16-gb-137472756/?c=750000000'
        },
        {
            id: 7,
            name: 'Видеокарта Inno3D GeForce RTX 5070 TWIN X2 OC 12 Гб',
            description: 'INNO3D GeForce RTX 5070 TWIN X2 OC (N50702-12D7X-195064N) — это компактная мощная видеокарта, разработанная для энтузиастов, заботящихся о пространстве, с элегантным двухслотовым дизайном, который легко интегрируется в сборки с меньшим форм-фактором.',
            price: 416088,
            rating: 5,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/p80/34419598.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p33/p80/34419598.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pca/34419603.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf4/pca/34419605.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/inno3d-geforce-rtx-5070-twin-x2-oc-12-gb-137349475/?c=750000000'
        },
        {
            id: 8,
            name: 'Видеокарта MSI RTX 5070 12G VENTUS 2X OC 12 Гб',
            description: 'Код товара:137472053 СерияGeForce RTX 50 Series ИнтерфейсPCI-E 5.0',
            price: 439000,
            rating: 4,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p9a/34374809.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pd4/p9a/34374809.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/msi-rtx-5070-12g-ventus-2x-oc-12-gb-137472053/?c=750000000'
        },
        {
            id: 9,
            name: 'Видеокарта GIGABYTE RTX 5080 Gaming OC 16 Гб',
            description: 'Система охлаждения WINDFORCE обеспечивает исключительную тепловую производительность благодаря сочетанию передовых технологий. Она оснащена серверным теплопроводящим гелем, инновационными вентиляторами Hawk с альтернативным вращением, композитными медными тепловыми трубками, большой испарительной камерой, активными вентиляторами 3D и охлаждением экрана.',
            price: 1043700,
            rating: 5,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p4d/pfc/23692615.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p4d/pfc/23692615.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p69/pfc/23692616.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p85/pfc/23692617.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/gigabyte-rtx-5080-gaming-oc-16-gb-134370556/?c=750000000'
        },
        {
            id: 10,
            name: 'Видеокарта ASUS GeForce RTX 4060 Ti Dual EVO OC DUAL-RTX4060TI-O8G-EVO 8 Гб',
            description: 'Видеокарта ASUS GeForce RTX 4060 Ti Dual EVO OC DUAL-RTX4060TI-O8G-EVO 8 Гб',
            price: 288500,
            rating: 1,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h7e/85702583975966.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hdd/h7e/85702583975966.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/asus-geforce-rtx-4060-ti-dual-evo-oc-dual-rtx4060ti-o8g-evo-8-gb-118287269/?c=750000000'
        },
    ])
}
