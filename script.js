let totalImageToDisplay = 10;
let str = '';
let linksArr = [];
let i;
let startImageFrom = 1;
const area = document.querySelector('.area');
let link = document.querySelector('#input');

document.querySelector('#downloadImage').addEventListener('click', () => {
  //   link.value = '';
  showImages();
});

function showImages() {
  if (!link.value) return console.log('enter something');
  extractLink(link.value);
  run();
}
function extractLink(link) {
  const originalLink = link;
  const imageCount = originalLink.slice(-8, -4);
  //   totalImageToDisplay = imageCount;
  //   console.log('total images : ' + imageCount);
  for (i = startImageFrom; i <= totalImageToDisplay; i++) {
    if (i < 10) {
      str = `000${i}`;
    } else if (i < 100) {
      str = `00${i}`;
    } else if (i < 1000) {
      str = `0${i}`;
    } else {
      str = `${i}`;
    }
    let a = 1000;
    if (i > 1000) a += 1000;
    if (i > 2000) a += 1000;
    if (i > 3000) a += 1000;
    if (i > 4000) a += 1000;
    if (i > 5000) a += 1000;
    if (i > 6000) a += 1000;
    const linkWithNewCount = originalLink.replace(`${imageCount}`, `${str}`);
    const tempArr = linkWithNewCount.split('/');
    tempArr[7] = `${a}`;
    const newLink = tempArr.join('/');
    linksArr.push(newLink);
    console.log(i);
  }
}
function run() {
  linksArr.forEach(e => {
    generateMarkup(e);
  });
}

const generateMarkup = function (image) {
  const markup = `
    <div>
           <img class="img" src="${image}" alt="no image.!">
          </div>`;
  area.insertAdjacentHTML('beforeend', markup);
};

document.querySelector('.pageNext').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelectorAll('.img').forEach(e => e.remove());
  //   document.querySelectorAll('.img').forEach(e => area.removeChild(e));

  startImageFrom = totalImageToDisplay + 1;
  totalImageToDisplay += 10;
  console.log(startImageFrom, totalImageToDisplay);
    showImages();
});
