// https://calculator.swiftutors.com/price-to-book-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pricetoBookRatioRadio = document.getElementById('pricetoBookRatioRadio');
const currentSharePriceRadio = document.getElementById('currentSharePriceRadio');
const bookValuePerShareRadio = document.getElementById('bookValuePerShareRadio');

let pricetoBookRatio;
let currentSharePrice = v1;
let bookValuePerShare = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

pricetoBookRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Current Share Price';
  variable2.textContent = 'Book Value Per Share';
  currentSharePrice = v1;
  bookValuePerShare = v2;
  result.textContent = '';
});

currentSharePriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to Book Ratio';
  variable2.textContent = 'Book Value Per Share';
  pricetoBookRatio = v1;
  bookValuePerShare = v2;
  result.textContent = '';
});

bookValuePerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to Book Ratio';
  variable2.textContent = 'Current Share Price';
  pricetoBookRatio = v1;
  currentSharePrice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pricetoBookRatioRadio.checked)
    result.textContent = `Price to Book Ratio = ${computePricetoBookRatio().toFixed(2)}`;

  else if(currentSharePriceRadio.checked)
    result.textContent = `Current Share Price = ${computeCurrentSharePrice().toFixed(2)}`;

  else if(bookValuePerShareRadio.checked)
    result.textContent = `Book Value Per Share = ${computeBookValuePerShare().toFixed(2)}`;
})

// calculation

function computePricetoBookRatio() {
  return Number(currentSharePrice.value) / Number(bookValuePerShare.value);
}

function computeCurrentSharePrice() {
  return Number(pricetoBookRatio.value) *Number(bookValuePerShare.value);
}

function computeBookValuePerShare() {
  return Number(currentSharePrice.value) / Number(pricetoBookRatio.value);
}