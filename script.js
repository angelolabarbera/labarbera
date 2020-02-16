// VARIABLESSSS
var all = document.getElementById('navAll');
var coats = document.getElementById('navCoats');
var dresses = document.getElementById('navDresses');
var shirts = document.getElementById('navShirts');
var tops = document.getElementById('navTops');
var skirts = document.getElementById('navSkirts');
var trousers = document.getElementById('navTrousers');
var shoes = document.getElementById('navShoes');
var accessories = document.getElementById('navAccessories');

// EVENT LISTENERSSSSS
all.addEventListener('click', showAll);
coats.addEventListener('click', showCoats);
dresses.addEventListener('click', showDresses);
shirts.addEventListener('click', showShirts);
tops.addEventListener('click', showTops);
skirts.addEventListener('click', showSkirts);
trousers.addEventListener('click', showTrousers);
shoes.addEventListener('click', showShoes);
accessories.addEventListener('click', showAccessories);

// FUNCTIONS

function showAll() {
  all.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";
  document.getElementsByClassName('coats')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(0px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(0px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(0px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(0px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(0px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(0px)";
}

function showCoats() {
  coats.style.fontWeight = "900";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";
  document.getElementsByClassName('coats')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showDresses() {
  dresses.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(0px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showShirts() {
  shirts.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showTops() {
  tops.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(0px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showSkirts() {
  skirts.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  // document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(0px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showTrousers() {
  trousers.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  shoes.style.fontWeight = "400";
  accessories.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(0px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  //document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showShoes() {
  shoes.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  accessories.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(0px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
}

function showAccessories() {
  accessories.style.fontWeight = "900";
  coats.style.fontWeight = "400";
  all.style.fontWeight = "400";
  dresses.style.fontWeight = "400";
  shirts.style.fontWeight = "400";
  tops.style.fontWeight = "400";
  skirts.style.fontWeight = "400";
  trousers.style.fontWeight = "400";
  shoes.style.fontWeight = "400";

  document.getElementsByClassName('coats')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[9].style.filter = "blur(4px)";
  document.getElementsByClassName('coats')[10].style.filter = "blur(4px)";
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('trousers')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[4].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[5].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[6].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[7].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[8].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[9].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(0px)";
}