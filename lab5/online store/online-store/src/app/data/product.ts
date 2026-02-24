import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product.model'

@Injectable({ providedIn: 'root' })
export class ProductService {
    categories: Category[] = [
        { id: 1, name: 'GPUs' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Headphones' },
        { id: 4, name: 'Tablets' }
    ];

    products: Product[] = [
        {
            id: 1,
            categoryId: 1,
            name: 'Видеокарта Palit RTX 5060 Ti INFINITY 3 16GB',
            description: 'Погрузитесь в мир высоких технологий с Palit RTX 5060 Ti INFINITY 3 16GB — видеокартой, которая обеспечит вам невероятную производительность и высокое качество графики для игр и профессиональных приложений.',
            price: 314990,
            rating: 3,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/p0b/37066117.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pf2/p0b/37066117.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0b/37066118.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pba/p0b/37066119.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-rtx-5060-ti-infinity-3-16gb-ne7506t019t1-gb2061s-16-gb-138216471/?c=750000000'
        },
        {
            id: 2,
            categoryId: 1,
            name: 'Видеокарта Palit GeForce RTX 5070 Infinity 3 (NE75070019K9-GB2050S) 12 Гб',
            description: 'Новая эра мощности малого форм-фактора: сборки серии Infinity 3 малого форм-фактора набирают популярность не без оснований. Они экономят место, избавляют от лишних деталей и обеспечивают большую портативность',
            price: 413000,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd3/pe8/58359334.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7f/pe8/58359337.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000'
        },
        {
            id: 3,
            categoryId: 1,
            name: 'Видеокарта Palit RTX 5060 Dual NE75060019P1-GB2063D 8 Гб',
            description: 'Palit GeForce RTX 5060 Dual предлагает классическую эффективность охлаждения в гладком современном черном дизайне. Два 95 - миллиметровых вентилятора обеспечивают конкурентоспособное охлаждение и тихую работу, а компактная 2 - слотовая конструкция подходит для сборок с малым форм - фактором.',
            price: 208000,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pd3/p61/45597346.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pd3/p61/45597346.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pef/p61/45597347.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p27/p62/45597349.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/palit-rtx-5060-dual-ne75060019p1-gb2063d-8-gb-140586515/?c=750000000'
        },
        {
            id: 4,
            categoryId: 1,
            name: 'Видеокарта Colorful GeForce RTX 2060 SUPER NB 8G-V 8 ГБ',
            description: 'Видеокарта GeForce RTX 2060 SUPER обеспечит высокую производительность вашей игровой или рабочей станции как в профессиональных приложениях, предназначенных для работы с графикой, так и во время игровых сессий с высокими настройками изображения',
            price: 149900,
            rating: 1,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h5a/68468278067230.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/he7/h5a/68468278067230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hba/h47/68468278591518.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h49/h74/68468279115806.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/colorful-geforce-rtx-2060-super-nb-8g-v-8-gb-108680611/?c=750000000'
        },
        {
            id: 5,
            categoryId: 1,
            name: 'Видеокарта ASUS RTX 5060 Ti Dual OC DUAL-RTX5060TI-O16G 16 Гб',
            description: 'ASUS Dual GeForce RTX 5060 Ti сочетает в себе мощные тепловые характеристики с широкой совместимостью. Передовые решения охлаждения от флагманских видеокарт — включая два вентилятора Axial-tech для оптимизации воздушного потока к радиатору.',
            price: 339000,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5c/pd4/43506800.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p5c/pd4/43506800.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p95/pd4/43506802.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb1/pd4/43506803.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/asus-rtx-5060-ti-dual-oc-dual-rtx5060ti-o16g-16-gb-140011715/?c=750000000'
        },
        {
            id: 6,
            categoryId: 2,
            name: 'Ноутбук PRYME OfficeBook 15.6"',
            description: 'Крутой ноутбук',
            price: 159990,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/75516635.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/75516635.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/pryme-officebook-15-6-8-gb-ssd-256-gb-win-11-officebook-n15-148883799/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 7,
            categoryId: 2,
            name: 'Ноутбук PRYME N5095 15.6"',
            description: 'Крутой ноутбук',
            price: 189990,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 8,
            categoryId: 2,
            name: 'Ноутбук Apple MacBook Air 13 2020 13.3"',
            description: 'Крутой ноутбук',
            price: 439983,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 9,
            categoryId: 2,
            name: 'Ноутбук Lenovo IdeaPad 3 15.6"',
            description: 'Крутой ноутбук',
            price: 170000,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 10,
            categoryId: 2,
            name: 'Ноутбук PWR Y58 16"',
            description: 'Крутой ноутбук',
            price: 335000,
            rating: 3,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p13/p8f/75630013.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p13/p8f/75630013.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/pwr-y58-16-32-gb-ssd-1000-gb-win-11-pro-i76732gtx1060-145570950/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 11,
            categoryId: 3,
            name: 'Наушники Apple EarPods Lightning белый',
            description: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей',
            price: 9700,
            rating: 2,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-lightning-belyi-4801876/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 12,
            categoryId: 3,
            name: 'Наушники Air pro 2 белый',
            description: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей',
            price: 2400,
            rating: 2,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 13,
            categoryId: 3,
            name: 'Наушники GERLAX GH-34 черный',
            description: 'крутые наушники',
            price: 2700,
            rating: 2,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 14,
            categoryId: 3,
            name: 'Наушники HYDRA Home Minor бежевый',
            description: 'крутые наушники',
            price: 4990,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 15,
            categoryId: 3,
            name: 'Наушники Apple AirPods 4 белый',
            description: 'крутые наушники',
            price: 60488,
            rating: 4,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 16,
            categoryId: 4,
            name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
            description: 'крутой планшет',
            price: 204900,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 17,
            categoryId: 4,
            name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб синий',
            description: 'крутой планшет',
            price: 201900,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 18,
            categoryId: 4,
            name: 'планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
            description: 'крутой планшет',
            price: 204900,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 19,
            categoryId: 4,
            name: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб серый',
            description: 'крутой планшет',
            price: 106700,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
        {
            id: 20,
            categoryId: 4,
            name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб зеленый',
            description: 'крутой планшет',
            price: 129990,
            rating: 5,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-zelenyi-140640475/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_home_smart_house_desktop&gbraid=0AAAAAC7-v7h7yxD81I2CGUNi8PMQWwNj8&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3DMGjCI_kCeceWAieC6BV_Y1VheEBOXuFp7FdhQjZE5ppm9Cv0eV2waAoGjEALw_wcB'
        },
    ];

    getCategories() { return this.categories; }

    getProductsByCategory(categoryId: number) {
        return this.products.filter(p => p.categoryId === categoryId);
    }
}