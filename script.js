let x,
  str = '',
  linksArr = [];


// performing action on button click event 
document.querySelector('#downloadImage').addEventListener('click', () => {
  let link = document.querySelector('#input');
  if (!link.value) return console.log('enter something');
  extractLink(link.value);
  run();
  link.value = '';
});


// funtion to take raw link and extract the required url to display
function extractLink(link) {
  const originalLink = link;
  const imageCount = originalLink.slice(-8, -4);
  x = imageCount;
  //   console.log('total images : ' + imageCount);
  for (let i = 1; i < x + 1; i++) {
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
