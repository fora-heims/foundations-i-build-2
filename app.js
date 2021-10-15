import { food } from './food.js';

const uList = document.getElementById('food-list');

function render(object) {
    const lItem = document.createElement('li');
    lItem.classList.add('food-item');

    const objectImg = document.createElement('img');
    objectImg.src = object.img;

    const objectName = document.createElement('span');
    objectName.classList.add('food-name');
    objectName.textContent = object.name;

    lItem.append(objectImg, objectName);
    return lItem;
}

for (let object of food) {
    let elements = render(object);
    uList.appendChild(elements);
}