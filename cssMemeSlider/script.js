console.log('Yay')

const images = document.querySelectorAll('#carousel img');
const dots =document.querySelector('#dots');
const desc = document.querySelector('#desc');

let speed = 3000;
let index = 0;
let intervalId;

images.forEach((image, i) => {
    const span = document.createElement('span');
    span.className = 'dot';
    if (i === 0) span.classList.add('active');
    span.addEventListener('click', () => {
        index = i;
        // startInterval();
        updateContent();
    });
    dots.appendChild(span);
})

// для автоматического пролистывания
// startInterval();
// function startInterval() {
//     if (intervalId) clearInterval(intervalId);
//     intervalId = setInterval(() => {
//         index++;
//         if (index === images.length) index = 0;


//         updateContent();
//     }, speed);

// }

updateContent();
function updateContent() {
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    desc.textContent = images[index].dataset.desc;
}