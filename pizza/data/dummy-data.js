import Category from '../models/category';
import Pizza from '../models/pizza';

export const CATEGORIES = [
  new Category('c1', 'Kampanyalar', 'pink'),
  new Category('c2', 'Pizzalar', 'orange'),
  new Category('c3', 'Yan Ürünler', 'yellow'),
  new Category('c4', 'İçecekler', 'blue'),
];

export const Pizzalar = [
  new Pizza(
    'm1',
    ['c1', 'c2'],
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
    ['c3'],
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
    ['c4'],
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
    ['c2', 'c5'],
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
    ['c6'],
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
];
