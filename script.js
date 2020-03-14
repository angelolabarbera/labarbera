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
  
  document.getElementsByClassName('trousers')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('trousers')[5].style.filter = "blur(0px)";

  document.getElementsByClassName('shoes')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[5].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[6].style.filter = "blur(0px)";
  document.getElementsByClassName('shoes')[7].style.filter = "blur(0px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(0px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(0px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(0px)";
  
  
  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";

  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(0px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(0px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(0px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(0px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(0px)";

  document.getElementsByClassName('accessories')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(4px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";

  document.getElementsByClassName('clothes')[0].style.display = "block";
  document.getElementsByClassName('clothes')[1].style.display = "block";
  document.getElementsByClassName('clothes')[2].style.display = "block";
  document.getElementsByClassName('clothes')[3].style.display = "block";
  document.getElementsByClassName('clothes')[4].style.display = "block";
  document.getElementsByClassName('clothes')[5].style.display = "block";
  document.getElementsByClassName('clothes')[6].style.display = "block";
  document.getElementsByClassName('clothes')[7].style.display = "block";
  document.getElementsByClassName('clothes')[8].style.display = "block";
  document.getElementsByClassName('clothes')[9].style.display = "block";
  document.getElementsByClassName('clothes')[10].style.display = "block";
  document.getElementsByClassName('clothes')[11].style.display = "block";
  document.getElementsByClassName('clothes')[12].style.display = "block";
  document.getElementsByClassName('clothes')[13].style.display = "block";
  document.getElementsByClassName('clothes')[14].style.display = "block";
  document.getElementsByClassName('clothes')[15].style.display = "block";
  document.getElementsByClassName('clothes')[16].style.display = "block";
  document.getElementsByClassName('clothes')[17].style.display = "block";
  document.getElementsByClassName('clothes')[18].style.display = "block";
  document.getElementsByClassName('clothes')[19].style.display = "block";
  document.getElementsByClassName('clothes')[20].style.display = "block";
  document.getElementsByClassName('clothes')[21].style.display = "block";
  document.getElementsByClassName('clothes')[22].style.display = "block";
  document.getElementsByClassName('clothes')[23].style.display = "block";
  document.getElementsByClassName('clothes')[24].style.display = "block";
  document.getElementsByClassName('clothes')[25].style.display = "block";
  document.getElementsByClassName('clothes')[26].style.display = "block";
  document.getElementsByClassName('clothes')[27].style.display = "block";
  document.getElementsByClassName('clothes')[28].style.display = "block";
  document.getElementsByClassName('clothes')[29].style.display = "block";
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
  document.getElementsByClassName('shoes')[7].style.filter = "blur(4px)";

  document.getElementsByClassName('tops')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[2].style.filter = "blur(4px)";
  document.getElementsByClassName('tops')[3].style.filter = "blur(4px)";
  
  document.getElementsByClassName('dresses')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[1].style.filter = "blur(4px)";
  document.getElementsByClassName('dresses')[2].style.filter = "blur(4px)";
  
  document.getElementsByClassName('shirts')[0].style.filter = "blur(4px)";
  document.getElementsByClassName('shirts')[1].style.filter = "blur(4px)";
  
  document.getElementsByClassName('skirts')[0].style.filter = "blur(4px)";
  
  document.getElementsByClassName('accessories')[0].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[1].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[2].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[3].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[4].style.filter = "blur(0px)";
  document.getElementsByClassName('accessories')[5].style.filter = "blur(0px)";

  document.getElementsByClassName('clothes')[0].style.display = "none";
  document.getElementsByClassName('clothes')[1].style.display = "none";
  document.getElementsByClassName('clothes')[2].style.display = "none";
  document.getElementsByClassName('clothes')[3].style.display = "none";
  document.getElementsByClassName('clothes')[4].style.display = "none";
  document.getElementsByClassName('clothes')[5].style.display = "none";
  document.getElementsByClassName('clothes')[6].style.display = "none";
  document.getElementsByClassName('clothes')[7].style.display = "none";
  document.getElementsByClassName('clothes')[8].style.display = "none";
  document.getElementsByClassName('clothes')[9].style.display = "none";
  document.getElementsByClassName('clothes')[10].style.display = "none";
  document.getElementsByClassName('clothes')[11].style.display = "none";
  document.getElementsByClassName('clothes')[12].style.display = "none";
  document.getElementsByClassName('clothes')[13].style.display = "none";
  document.getElementsByClassName('clothes')[14].style.display = "none";
  document.getElementsByClassName('clothes')[15].style.display = "none";
  document.getElementsByClassName('clothes')[16].style.display = "none";
  document.getElementsByClassName('clothes')[17].style.display = "none";
  document.getElementsByClassName('clothes')[18].style.display = "none";
  document.getElementsByClassName('clothes')[19].style.display = "none";
  document.getElementsByClassName('clothes')[20].style.display = "none";
  document.getElementsByClassName('clothes')[21].style.display = "none";
  document.getElementsByClassName('clothes')[22].style.display = "none";
  document.getElementsByClassName('clothes')[23].style.display = "none";
  document.getElementsByClassName('clothes')[24].style.display = "none";
  document.getElementsByClassName('clothes')[25].style.display = "none";
  document.getElementsByClassName('clothes')[26].style.display = "none";
  document.getElementsByClassName('clothes')[27].style.display = "none";
  document.getElementsByClassName('clothes')[28].style.display = "none";
  document.getElementsByClassName('clothes')[29].style.display = "none";
}