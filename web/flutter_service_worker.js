'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "20040b416d95ba8f17e312da23fe38f6",
"assets/AssetManifest.bin.json": "d94b9edd21d22164ab1555d4fc466b19",
"assets/AssetManifest.json": "0ca584d3658e6e7286aa425b67b95b87",
"assets/assets/audio/%25C5%2581%25C4%2585cz%2520oporniki%2520szeregowo%2520i%2520r%25C3%25B3wnolegle%2520w%2520prawie%2520Kirchhoffa.mp3": "397b06f2fef2833a99a970f93ea673bb",
"assets/assets/audio/01%2520-%2520Fizyka%2520w%2520szkole%2520od%2520podstaw,%2520Fizyka%2520kurs%2520matura.mp3": "98e8852645354442d28d9f672f1933ee",
"assets/assets/audio/02%2520-%2520Przyrz%25C4%2585dy%2520pomiarowe,%2520zakres,%2520rozdzielczo%25C5%259B%25C4%2587%2520Fizyka%2520kurs%2520matura.mp3": "ab09be346536e7c41a6135022149d781",
"assets/assets/audio/03%2520-%2520Mi%25C4%2599dzynarodowy%2520uk%25C5%2582ad%2520jednostek%2520SI,%2520Fizyka%2520kurs%2520matura.mp3": "176acc6202719cf6cffb5d4ed8f34abc",
"assets/assets/audio/04%2520-%2520Przedrostki%2520jednostek,%2520notacja%2520wyk%25C5%2582adnicza,%2520Fizyka%2520kurs%2520matura.mp3": "b86d6bb6fd13ca365001ce4d6b3b038a",
"assets/assets/audio/05%2520-%2520Wykresy%2520funkcji%2520w%2520fizyce,%2520Fizyka%2520kurs%2520matura.mp3": "0a1e89f1ddf792e7658dd2c9ad4c85cc",
"assets/assets/audio/06%2520-%2520Funkcja%2520liniowa%2520i%2520prosta%2520najlepszego%2520dopasowania,%2520Fizyka%2520kurs%2520matura.mp3": "f50630bedb0acfb1b26ca7f35da1228a",
"assets/assets/audio/07%2520-%2520Wielko%25C5%259Bci%2520wektorowe%2520i%2520dzia%25C5%2582ania%2520na%2520wektorach,%2520Fizyka%2520kurs%2520matura.mp3": "6162d30b6daf39f75665698695143f88",
"assets/assets/audio/08%2520-%2520Funkcje%2520trygonometryczne%2520zastosowanie%2520w%2520fizyce,%2520Fizyka%2520kurs%2520matura.mp3": "9c2f2afc00d15b05da918f7cb178984e",
"assets/assets/audio/09%2520-%2520Wektory%2520si%25C5%2582%2520i%2520funkcje%2520trygonometryczne,%2520Fizyka%2520kurs%2520matura.mp3": "558a20010a9b9d6dc65b4eb388d3edbb",
"assets/assets/audio/10%2520-%2520Przemieszczenie,%2520droga,%2520po%25C5%2582o%25C5%25BCenie,%2520Fizyka%2520kurs%2520matura.mp3": "dc8d1a24295cd1b22f14af077d4b7b7c",
"assets/assets/audio/11%2520-%2520Pr%25C4%2599dko%25C5%259B%25C4%2587,%2520szybko%25C5%259B%25C4%2587%2520i%2520ich%2520%25C5%259Brednia,%2520Fizyka%2520kurs%2520matura.mp3": "7b08c6b5fb1272440b83119ef10d36d0",
"assets/assets/audio/12%2520-%2520Przyspieszenie,%2520zmiana%2520pr%25C4%2599dko%25C5%259Bci,%2520Fizyka%2520kurs%2520matura.mp3": "643b5ae771a17430770555b49d5c801b",
"assets/assets/audio/13%2520-%2520Ruch%2520jednostajny%2520prostoliniowy,%2520Fizyka%2520kurs%2520matura.mp3": "4bcd470636042733b1278f6683f49d86",
"assets/assets/audio/14%2520-%2520Ruch%2520jednostajny%2520prostoliniowy%2520zmienny,%2520Fizyka%2520kurs%2520matura.mp3": "5c14e0ca7812366110dc044fd57ef49f",
"assets/assets/audio/15%2520-%2520Ruch%2520jednostajnie%2520przyspieszony%2520prostoliniowy,%2520Fizyka%2520kurs%2520matura.mp3": "303a766177a563daa89157b5d49eed13",
"assets/assets/audio/16%2520-%2520Ruch%2520op%25C3%25B3%25C5%25BAniony%2520prostoliniowy,%2520Fizyka%2520kurs%2520matura.mp3": "7e44116c2191716f5a61b09ef0b113d8",
"assets/assets/audio/17%2520-%2520Pr%25C4%2599dko%25C5%259B%25C4%2587%2520wzgl%25C4%2599dna%2520w%2520ruchu%2520prostoliniowym,%2520Fizyka%2520kurs%2520matura.mp3": "9fc7ba58350a91f75609403f355e7d9c",
"assets/assets/audio/18%2520-%2520R%25C3%25B3wnania%2520ruchu%2520w%2520fizyce,%2520miejsce%2520spotkania,%2520Fizyka%2520kurs%2520matura.mp3": "8b400da06e338fc354615ba2cf675855",
"assets/assets/audio/19%2520-%2520Spadek%2520swobodny,%2520Fizyka%2520kurs%2520matura.mp3": "a02e5decac0a9a9fae1b3cafb1d784a0",
"assets/assets/audio/20%2520-%2520Rzut%2520poziomy,%2520Fizyka%2520kurs%2520matura.mp3": "dbcf6b2d84522e3060a2d2c78638adb4",
"assets/assets/audio/21%2520-%2520Ruch%2520po%2520okr%25C4%2599gu,%2520Fizyka%2520kurs%2520matura.mp3": "251e12f4799c98132726af285a03188a",
"assets/assets/audio/22%2520-%2520Oddzia%25C5%2582ywania%2520w%2520przyrodzie,%2520Fizyka%2520kurs%2520matura.mp3": "d7cef4d1738e4f8cc54d986756d2ee2a",
"assets/assets/audio/23%2520-%2520Pierwsza%2520zasada%2520dynamiki,%2520Fizyka%2520kurs%2520matura.mp3": "23ec9e5610ab63e74e512aebad77ff50",
"assets/assets/audio/24%2520-%2520Druga%2520zasada%2520dynamiki%2520Newtona,%2520fizyka%2520matura.mp3": "5dd19a42abe9d3428b8d45a3c06895f9",
"assets/assets/audio/25%2520-%2520Trzecia%2520zasada%2520dynamiki%2520Newtona,%2520Fizyka%2520kurs%2520matura.mp3": "c019fac09d7b53fb60039e8566956252",
"assets/assets/audio/26%2520-%2520R%25C3%25B3wnia%2520pochy%25C5%2582a%2520na%2520Galileusza.mp3": "e71ee72f41524817de91086444a5f0f5",
"assets/assets/audio/27%2520-%2520Si%25C5%2582a%2520tarcia,%2520tarcie%2520statyczne%2520i%2520kinetyczne,%2520opory%2520ruchu.mp3": "0f15ee423bfb347e8303da354afe9f68",
"assets/assets/audio/28%2520-%2520Warto%25C5%259B%25C4%2587%2520wsp%25C3%25B3%25C5%2582czynnika%2520tarcia%2520statycznego,%2520%25EF%25BC%2582Sze%25C5%259B%25C4%2587%2520%25C5%2582atwych%2520kawa%25C5%2582k%25C3%25B3w%25EF%25BC%2582.mp3": "aea450ee1969271dafcead2633f5a8d1",
"assets/assets/audio/29%2520-%2520Si%25C5%2582a%2520do%25C5%259Brodkowa,%2520ruch%2520po%2520okr%25C4%2599gu.mp3": "4558c2f3a79d6a27f87fcf2d6290c70e",
"assets/assets/audio/30%2520-%2520Si%25C5%2582a%2520bezw%25C5%2582adno%25C5%259Bci.mp3": "c736141110b690a287b1dc3fe9d12b5b",
"assets/assets/audio/31%2520-%2520Praca%2520i%2520zmiana%2520energii%2520mechanicznej%2520w%2520fizyce,%2520d%25C5%25BCul.mp3": "098cdc4dbfb4cf615f94dbf8f43eb529",
"assets/assets/audio/32%2520-%2520Moc,%2520praca,%2520energia%2520i%2520sprawno%25C5%259B%25C4%2587.mp3": "2ef840947db458d0a6e116999902ca75",
"assets/assets/audio/33%2520-%2520Energia%2520potencjalna%2520i%2520jej%2520zmiana%2520w%2520prac%25C4%2599.mp3": "5fff35e6967bd9b78876c51394731bdf",
"assets/assets/audio/34%2520-%2520Energia%2520kinetyczna%2520i%2520jej%2520zmiana%2520w%2520prac%25C4%2599.mp3": "af1056b2c8c5262c0a2f18b36e3dacde",
"assets/assets/audio/35%2520-%2520Zasada%2520zachowania%2520energii%2520mechanicznej%2520i%2520ca%25C5%2582kowitej.mp3": "330d8a07b04910048c9811c118b2a129",
"assets/assets/audio/36%2520-%2520P%25C4%2599d%2520i%2520zmiana%2520p%25C4%2599du%2520-%2520o%2520co%2520chodzi%25EF%25BC%259F.mp3": "d00746248cc0c3cce7a3258d7a7739db",
"assets/assets/audio/37%2520-%2520Zasada%2520zachowania%2520p%25C4%2599du.mp3": "d4877f38c366f77a87ee4a0ede28a7d7",
"assets/assets/audio/38%2520-%2520Centralne%2520zderzenia%2520spr%25C4%2599%25C5%25BCyste%2520i%2520niespr%25C4%2599%25C5%25BCyste%2520-%2520fizyka.mp3": "9dee9213ad92f2448f98dc98cf11f75c",
"assets/assets/audio/39%2520-%2520Niecentralne%2520zderzenia%2520spr%25C4%2599%25C5%25BCyste%2520oraz%2520niespr%25C4%2599%25C5%25BCyste.mp3": "71a880ec05b21959902851802d82daf3",
"assets/assets/audio/40%2520-%2520Obliczanie%2520%25C5%259Brodka%2520masy%2520-%2520model%2520bry%25C5%2582y%2520sztywnej.mp3": "09cf5254eac10a833219736c30f47bb7",
"assets/assets/audio/41%2520-%2520Moment%2520si%25C5%2582y%2520-%2520bry%25C5%2582a%2520sztywna.mp3": "1f5d935b02d74e8abac1f5cbbf09c857",
"assets/assets/audio/42%2520-%2520Moment%2520bezw%25C5%2582adno%25C5%259Bci%2520-%2520fizyka.mp3": "3d79af994452e8ad2f2b95c535926ddf",
"assets/assets/audio/43%2520-%2520Twierdzenie%2520Steinera%2520-%2520moment%2520bezw%25C5%2582adno%25C5%259Bci.mp3": "b1d04666360a6c257bb9716fd4f39a11",
"assets/assets/audio/Ci%25C4%2599%25C5%25BCar,%2520stan%2520niewa%25C5%25BCko%25C5%259Bci,%2520przeci%25C4%2585%25C5%25BCenia%2520i%2520niedoci%25C4%2585%25C5%25BCenia,%2520anomalia%2520grawitacyjna.mp3": "5895fd97ba824664b37a4bcaf84f2190",
"assets/assets/audio/Ci%25C4%2599%25C5%25BCarek%2520na%2520spr%25C4%2599%25C5%25BCynie%2520-%2520okres%2520drga%25C5%2584%2520w%2520Cyberpunk%25202077%2520nie%2520wspierany%2520przez%2520CDPR.mp3": "59db4715e98d0f05f5d4f2bd35002c78",
"assets/assets/audio/Ciep%25C5%2582o%2520w%25C5%2582a%25C5%259Bciwe,%2520ciep%25C5%2582o%2520przemiany%2520fazowej.mp3": "e4f3313ab84104a102e227c422c36795",
"assets/assets/audio/Drgania%2520wymuszone,%2520t%25C5%2582umione,%2520rezonans.mp3": "856ba87b9c5b49b005eeec1d468a3bed",
"assets/assets/audio/Drugie%2520prawo%2520Keplera%2520i%2520zachowanie%2520p%25C4%2599du.mp3": "3485cd39168de6368ec1a72cfddfeb9e",
"assets/assets/audio/Drugie%2520prawo%2520Kirchhoffa.mp3": "5ce448fe6922338ab0fa53bb0d341b6b",
"assets/assets/audio/Elektrostatyka%2520-%2520zachowanie%2520%25C5%2582adunku.mp3": "ed3d1eac4e46cf263a67c374ec437b67",
"assets/assets/audio/Energia%2520kinetyczna%2520ruchu%2520obrotowego%2520i%2520zachowanie%2520energii.mp3": "655cba1699e85e37d7016c6e90b47854",
"assets/assets/audio/Energia%2520mechaniczna%2520w%2520ruchu%2520harmonicznym.mp3": "62021097ca79351b74d4ccb6ecf53a09",
"assets/assets/audio/Gaz%2520doskona%25C5%2582y,%2520Skala%2520Kelwina,%2520Rozszerzalno%25C5%259B%25C4%2587.mp3": "e3d84abe69fcf05fb03570aa452bdda2",
"assets/assets/audio/Indukcja%2520magnetyczna%2520z%2520obliczaniami,%2520projekt%2520fizyka.mp3": "8b1d15303bc7e6c1ef5789406fd7239e",
"assets/assets/audio/Izolatory,%2520przewodniki,%2520p%25C3%25B3%25C5%2582przewodniki%2520w%2520obwodach%2520elektrycznych.mp3": "122f1e9e41610abf7858600f4138adf5",
"assets/assets/audio/Jak%2520dzia%25C5%2582a%2520silnik%2520elektryczny%25EF%25BC%259F.mp3": "4bc46de6bf50c4379f151d8691c64d9c",
"assets/assets/audio/Kondensatory,%2520pojemno%25C5%259B%25C4%2587,%2520jak%2520dzia%25C5%2582a.mp3": "f260080d52dbfefa923f4ae4946e9aa6",
"assets/assets/audio/Moment%2520p%25C4%2599du%2520i%2520zasada%2520zachowania%2520momentu%2520p%25C4%2599du.mp3": "cb72d05a5a067830914f858a6d190cde",
"assets/assets/audio/Nat%25C4%2599%25C5%25BCenie%2520pola%2520elektrycznego%2520elektrostatycznego.mp3": "5ed2a58c277a41c8c8213d59072a9546",
"assets/assets/audio/Nat%25C4%2599%25C5%25BCenie,%2520napi%25C4%2599cie,%2520op%25C3%25B3r,%2520praca%2520i%2520moc%2520pr%25C4%2585du%2520elektrycznego.mp3": "651bc9c2417a9e63df85e6c3c32cece6",
"assets/assets/audio/Pierwsza%2520i%2520druga%2520pr%25C4%2599dko%25C5%259B%25C4%2587%2520kosmiczna.mp3": "b4fe2dfb9b9896a9c0d08159c128e334",
"assets/assets/audio/Pierwsza%2520zasada%2520termodynamiki%2520i%2520druga%2520zasada%2520termodynamiki.mp3": "b54700d0ae896109ec0f1c0a77758dab",
"assets/assets/audio/Podstawowe%2520przemiany%2520gazowe.mp3": "c6f82e487a86ae82e1bd073899b4e193",
"assets/assets/audio/Pole%2520i%2520nat%25C4%2599%25C5%25BCenie%2520pola%2520grawitacyjnego%2520-%2520grawitacja.mp3": "4a75995cec6729b964967b7e0fb1afc6",
"assets/assets/audio/Pole%2520magnetyczne%2520i%2520linie%2520pola.mp3": "cdc123c3fea6bfd1f890356ca4daf6f3",
"assets/assets/audio/Potencja%25C5%2582%2520pola%2520grawitacyjnego.mp3": "bf13ec7cc8ccb71316be88a933fc255d",
"assets/assets/audio/Potencja%25C5%2582,%2520praca,%2520energia%2520potencjalna%2520pola%2520elektrycznego.mp3": "5da32e3d4879e1a4efb5542c1201d055",
"assets/assets/audio/Prawo%2520Coulomba.mp3": "860e49cdb0c60fe259533e54ef214fb9",
"assets/assets/audio/Prawo%2520powszechnego%2520ci%25C4%2585%25C5%25BCenia%2520-%2520grawitacja.mp3": "45795c28af52bc8711bea7b11f23ab12",
"assets/assets/audio/Przemiana%2520izobaryczna.mp3": "95e58805797a97626539d1121277ce2e",
"assets/assets/audio/Przemiana%2520izochoryczna.mp3": "8a60f737573dcf6c3177005ff488b6c5",
"assets/assets/audio/Przemiana%2520izotermiczna.mp3": "70df889406c119144b06ab8d3cbb65c3",
"assets/assets/audio/Przenoszenie%2520ciep%25C5%2582a%2520i%2520bilans%2520cieplny.mp3": "157e37d10668f9b55bc4ab3343cb42fd",
"assets/assets/audio/R%25C3%25B3wnanie%2520Clapeyrona%2520i%2520prawo%2520Daltona.mp3": "59029448f91cfb77395250e730f627cc",
"assets/assets/audio/R%25C3%25B3wnowaga%2520termodynamiczna%2520i%2520diagramy%2520fazowe.mp3": "114ad393460e00fb61e792ef573ba718",
"assets/assets/audio/Regu%25C5%2582y%2520lewej%2520i%2520prawej%2520d%25C5%2582oni%2520dla%2520pola%2520magnetycznego,%2520si%25C5%2582a%2520Lorentza.mp3": "0f100e594585f8fc52c83f1a979f9c67",
"assets/assets/audio/Ruch%2520harmoniczny%2520-%2520podstawy%2520teoria%2520i%2520zadania.mp3": "82e813feb935dd8dd9c89ec6c0a40245",
"assets/assets/audio/Ruch%2520orbitalny%2520rakiety%2520i%2520satelity%2520-%2520jak%2520pozby%25C4%2587%2520si%25C4%2599%2520niesporczaka%25EF%25BC%259F.mp3": "4b75f2d11768a7afbef02887275a65a0",
"assets/assets/audio/Si%25C5%2582a%2520grawitacji%2520jako%2520si%25C5%2582a%2520do%25C5%259Brodkowa.mp3": "ef9478c5d4b37be53589a29085998998",
"assets/assets/audio/Silniki%2520cieplne.mp3": "47ca74109bdb925d219fdbfa120c1fdc",
"assets/assets/audio/Statyka%2520bry%25C5%2582y%2520sztywnej,%2520%25C5%259Brodek%2520masy%2520i%2520moment%2520si%25C5%2582y.mp3": "81f09d7f1ae0cde188da4b17dd0b3c91",
"assets/assets/audio/Trzecie%2520prawo%2520Keplera.mp3": "8b1f259ae4f53bc6fdf76c86470889dc",
"assets/assets/audio/Trzy%2520prawa%2520Keplera.mp3": "91766bbfdc5510dd2958cd0d2b6b98e7",
"assets/assets/audio/Wahad%25C5%2582o%2520matematyczne%2520-%2520teoria%2520i%2520hipnoza.mp3": "5b9eb6e321d193d10211f097b5a2a8c8",
"assets/assets/audio/Wsp%25C3%25B3%25C5%2582czynnik%2520spr%25C4%2599%25C5%25BCysto%25C5%259Bci%2520spr%25C4%2599%25C5%25BCyny%2520i%2520si%25C5%2582a%2520spr%25C4%2599%25C5%25BCysto%25C5%259Bci.mp3": "81710168e788fd474162f1f7801ef1a7",
"assets/assets/audio/Wszystko%2520o%2520sile%2520elektromotorycznej%2520i%2520oporze%2520wewn%25C4%2599trznym.mp3": "91c00d45b423999e62ddc136e0c973ed",
"assets/assets/audio/Zasada%2520zachowania%2520energii%2520i%2520momentu%2520p%25C4%2599du%2520w%2520ruchu%2520orbitalnym.mp3": "8852987650036deca719ee5e645a59f6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a6e164bff67a51ef23b15cd2db4731f5",
"assets/NOTICES": "23f62271e5b0cb64bd9885c5a6db3d37",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "47fa407d27ba2b704ef545e5b1a96da4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0b7b6efff4c5ccd487da936c9247f57",
"/": "c0b7b6efff4c5ccd487da936c9247f57",
"main.dart.js": "4869274a3266ed6f66b5461dc14ee718",
"manifest.json": "3c66945f303e28d431c362c66850a1e8",
"version.json": "0bd3f61990af0bf1238b99adde7a9f75"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
