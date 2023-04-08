let x,
  i,
  str = '',
  linksArr = [];

let totalImg=9;

// performing action on button click event
document.querySelector('#downloadImage').addEventListener('click', () => {
  let link = document.querySelector('#input');
  showFromRange();

  if (!link.value) return console.log('enter something');
  extractLink(link.value);
  run();
  link.value = '';
});

// Range selection function
function showFromRange() {
  let range = document.getElementById('selectRangeOfImage').value;
  console.log(range);

  switch (range) {
    case '1':
      i = 1;
      x = 10;
    //   totalImg=5;
      console.log(totalImg);
      break;

    case '2':
      i = 11;
      x = 20;
      break;

    default:
      i = 1;
      x = totalImg;
      break;
  }
}

// funtion to take raw link and extract the required url to display
function extractLink(link) {
  const originalLink = link;
  let imageCount = originalLink.slice(-8, -4);
  console.log(imageCount);

  //   x = imageCount;

  for (i; i <= x; i++) {
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
  }
}

// function to generate markup for the each element of the array
function run() {
  linksArr.forEach(e => {
    generateMarkup(e);
  });
}

// funtion to generate markup on webpage
const generateMarkup = function (image) {
  const area = document.querySelector('.area');
  const markup = `
    <div>
           <img class="img" src="${image}" alt="no image.!">
          </div>`;
  area.insertAdjacentHTML('beforeend', markup);
};
