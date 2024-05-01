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
    'bütçeye uygun',
    'normal kalorili',
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
    'uygun',
    'normal kalorili',
    'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',
    ['Pizza Sosu', 'Mozzarella Peyniri']
  ),

  new Pizza(
    'm3',
    ['c2'],
    'Karışık Pizza',
    'bütçeye uygun',
    'kalorili',
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
    'pahalı',
    'kalorili',
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
    'pahalı',
    'kalorili',
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
    'normal fiyat',
    'kalorili',
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
    'ekonomik',
    'düşük kalorili',
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
    'tasarruflu',
    'orta kalorili',
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
    'uygun fiyat',
    'yüksek kalorili',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/patates-kizartmasi-yemekcom.jpg',
    []
  ),

  new Pizza(
    'y2',
    ['c3'],
    'Mozarella Stick',
    'ekonomik',
    'orta kalorili',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnI_6nxp2cn5bPfsLElQzICLTX8Pz9nwuAgZzD-MX6iQ&s',
    []
  ),

  new Pizza(
    'i1',
    ['c4'],
    'Kola',
    'pahalı',
    'yüksek kalorili',
    'https://image.milimaj.com/i/milliyet/75/869x477/5fd9e08e5542871764130439.jpg',
    []
  ),

  new Pizza(
    'i3',
    ['c4'],
    'Fanta',
    'pahalı',
    'yüksek kalorili',
    'https://sebeder.org/images/icerik/Fanta_www.sebeder.org_2593.jpg',
    []
  ),

  new Pizza(
    'i2',
    ['c4'],
    'Ayran',
    'normal fiyat',
    'orta kalorili',
    'https://idsb.tmgrup.com.tr/2014/05/22/HaberDetay/1400727028588.jpg',
    []
  ),
];


