console.log('Yay')

const images = document.querySelectorAll('#img-cont img');
const dots =document.querySelector('#dots');
const desc = document.querySelector('#desc');

let speed = 1500;
let index = 0;
let intervalId;

images.forEach((image, i) => {
    const span = document.createElement('span');
    span.className = 'dot';
    if (i === 0) span.classList.add('active');
    span.addEventListener('click', () => {
        index = i;
        // startInterval();
        setTimeout(() => {updateContent()}, speed);
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
    desc.classList.remove('active');

    // вызов "forces reflow" перед добавлением класса обратно
    // чтобы анимация могла повторяться
    void desc.offsetWidth;

    //добавитьб класс 'active', чтобы снова запустить анимацию
    desc.classList.add('active');
}