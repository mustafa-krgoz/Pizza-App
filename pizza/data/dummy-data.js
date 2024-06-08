import Category from '../models/category';
import Pizza from '../models/pizza';

export const CATEGORIES = [
  new Category('c1', 'Kampanyalar', 'pink'),
  new Category('c2', 'Pizzalar', 'yellow'),
  new Category('c3', 'Yan Ürünler', 'lightgreen'),
  new Category('c4', 'İçecekler', 'lightblue'),
];

export const Pizzalar = [
  new Pizza(
    'm1',
    ['c2'],
    'Akdeniz Pizza',
    '100 TL',
    'Fiyatı:',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2023/10/akdeniz-pizzasi-onecikan.jpg',
    [
      'Pizza Sosu',
      'Mozzarella Peyniri',
      'Beyaz Peynir',
      'Zeytin',
      'Domates',
      'Kekik',
    ]
  ),

  new Pizza(
    'm2',
    ['c2'],
    'Margarita Pizza',
    '90 TL',
    'Fiyatı:',
    'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',
    ['Pizza Sosu', 'Mozzarella Peyniri']
  ),

  new Pizza(
    'm3',
    ['c2'],
    'Karışık Pizza',
    '110 TL',
    'Fiyatı:',
    'https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/desserts-&-bakery/karışık-pizza/main-header.jpg',
    [
      'Pizza Sosu',
      'Mozzarella Peyniri',
      'Salam',
      'Sucuk',
      'Sosis',
      'Yeşil Biber',
      'Mantar',
      'Mısır',
    ]
  ),

  new Pizza(
    'm4',
    ['c2'],
    'Pepperoni Pizza',
    '120 TL',
    'Fiyatı:',
    'https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA',
    [
      'Pizza Sosu',
      'Mozzarella Peyniri',
      'Pepperoni',
    ]
  ),

  new Pizza(
    'm5',
    ['c2'],
    'Mexicano Pizza',
    '130 TL',
    'Fiyatı:',
    'https://www.odaypizza.com.tr/images/urunler/meksika_35c3a.png',
    [
      'Pizza Sosu',
      'Mozarella Peyniri',
      'Kırmızı Köz Biber',
      'Acı Meksika Biberi',
      'Soğan',
      'Mantar',
      'Tavuk Parçaları',
      'Yöresel Baharatlar',
    ]
  ),

  new Pizza(
    'm6',
    ['c2'],
    'Italiano Pizza',
    '110 TL',
    'Fiyatı:',
    'https://www.pizzaworks.com.tr/wp-content/uploads/2022/07/italyan-2-min.png',
    [
      'Pizza Sosu',
      'Kırmızı Koz Biber',
      'Mozarella Peyniri',
      'Siyah Zeytin',
      'Mantar',
      'Sucuk',
      'Kekik',
    ]
  ),

  new Pizza(
    'k1',
    ['c1'],
    'Çiftli Pizza Kampanyası',
    '180 TL',
    'Fiyatı:',
    'https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/cifte-lezzet-2li-orta_638291706066872624.jpg',
    [
      'Akdeniz Pizza',
      'Margarita Pizza',
    ]
  ),

  new Pizza(
    'k2',
    ['c1'],
    'Karışık Pizza Kampanyası',
    '200 TL',
    'Fiyatı:',
    'https://www.pasaportpizza.com/RESIM/kamp-2li-buyuk.jpg',
    [
      'Karışık Pizza',
      'Mexicano Pizza',
    ]
  ),

  new Pizza(
    'y1',
    ['c3'],
    'Patates Kızartması',
    '30 TL',
    'Fiyatı:',
    'https://sanpagida.com.tr/wp-content/uploads/2021/09/patates-nasil-kizartilir-930x620.png',
    [
      'Patates',
      'Tuz',
      'Ayçiçek Yağı',
    ]
  ),

  new Pizza(
    'y2',
    ['c3'],
    'Mozarella Stick',
    '40 TL',
    'Fiyatı:',
    'https://www.allrecipes.com/thmb/BeV2hKihyqT4sQBI6h2fYp2KzuU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23596-fried-mozzarella-cheese-sticks-DDMFS-4x3-842a0eaebf6b435a8d3a8b04325e13eb.jpg',
    [
      'Mozarella Peyniri',
      'Un',
      'Yumurta',
      'Ekmek Kırıntısı',
    ]
  ),

  new Pizza(
    'y3',
    ['c3'],
    'Soğan Halkaları',
    '35 TL',
    'Fiyatı:',
    'https://gezginbirchef.com/wp-content/uploads/2019/08/citir-sogan-tarifi.jpg',
    [
      'Soğan',
      'Un',
      'Süt',
      'Tuz',
      'Karabiber',
      'Kızartma Yağı',
    ]
  ),

  new Pizza(
    'y4',
    ['c3'],
    'Tavuk Kanatları',
    '50 TL',
    'Fiyatı:',
    'https://image.hurimg.com/i/hurriyet/75/0x0/63035be94e3fe1071002eb29.jpg',
    [
      'Tavuk Kanatları',
      'Un',
      'Tuz',
      'Karabiber',
      'Kızartma Yağı',
    ]
  ),

  new Pizza(
    'y5',
    ['c3'],
    'Garlic Bread',
    '25 TL',
    'Fiyatı:',
    'https://theloopywhisk.com/wp-content/uploads/2023/12/Gluten-Free-Garlic-Bread_1200px-featured-2.jpg',
    [
      'Ekmek Dilimleri',
      'Tereyağı',
      'Sarımsak',
      'Maydanoz',
      'Tuz',
    ]
  ),

  new Pizza(
    'y6',
    ['c3'],
    'Chicken Nuggets',
    '45 TL',
    'Fiyatı:',
    'https://www.skinnytaste.com/wp-content/uploads/2023/09/Chicken-Nuggets-10.jpg',
    [
      'Tavuk Göğsü',
      'Un',
      'Tuz',
      'Karabiber',
      'Yumurta',
      'Ekmek Kırıntısı',
      'Kızartma Yağı',
    ]
  ),

  new Pizza(
    'i1',
    ['c4'],
    'Kola',
    '25 TL',
    'Fiyatı:',
    'https://image.milimaj.com/i/milliyet/75/869x477/5fd9e08e5542871764130439.jpg',
    []
  ),

  new Pizza(
    'i3',
    ['c4'],
    'Fanta',
    '25 TL',
    'Fiyatı:',
    'https://sebeder.org/images/icerik/Fanta_www.sebeder.org_2593.jpg',
    []
  ),

  new Pizza(
    'i2',
    ['c4'],
    'Ayran',
    '20 TL',
    'Fiyatı:',
    'https://trybany.s3.eu-central-1.amazonaws.com/uploads/products/4638/resized/ayran-sutaş-HD.jpg',
    []
  ),

  new Pizza(
    'i5',
    ['c4'],
    'Soda',
    '15 TL',
    'Fiyatı:',
    'https://www.dunyagoz.com///uploads/haberler/sodaiesi_k.jpg',
    []
  ),

  new Pizza(
    'i6',
    ['c4'],
    'Şalgam',
    '20 TL',
    'Fiyatı:',
    'https://www.tazeyore.com/uploads/blog/b/mucizevi-Icecek-salgam-suyu.jpg',
    []
  ),
];



