// https://fapello.com/content/a/l/alina-becker/6000/alina-becker_5146.jpg
// https://fapello.com/content/h/a/hana-bunny/4000/hana-bunny_3057.jpg
// https://fapello.com/content/b/r/brookie-little/1000/brookie-little_0749.jpg
const x = 20;
let str = '';
let linksArr = [];
//   'https://fapello.com/content/h/a/hana-bunny/4000/hana-bunny_3057.jpg';
// const btn = document.querySelector('#downloadImage');
// btn.addEventListener('click', ()=>{
//     console.log(link);
// });
document.querySelector('#downloadImage').addEventListener('click', () => {
  let link = document.querySelector('#input');
  if (!link.value) return console.log('enter something');
  extractLink(link.value);
  run();
  link.value = '';
});
function extractLink(link) {
  const originalLink = link;
  const imageCount = originalLink.slice(-8, -4);
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
/*
  function downloadImage(url, name, count) {
    fetch(url)
      .then(resp => {
        // console.log(resp);
        return resp.blob();
      })
      .then(blobobject => {
        const blob = window.URL.createObjectURL(blobobject);
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        anchor.href = blob;
        anchor.download = `${name}${count}.png`;
        document.body.appendChild(anchor);
        anchor.click();
        window.URL.revokeObjectURL(blob);
      });
  }*/
function run() {
  linksArr.forEach((e) => {
    generateMarkup(e);
  });
}
const generateMarkup = function (image) {
  const area = document.querySelector('.area');
  const markup = `
    <div>
           <img class="img" src="${image}" alt="no image.!">
          </div>`;
  area.insertAdjacentHTML('beforeend', markup);
};

