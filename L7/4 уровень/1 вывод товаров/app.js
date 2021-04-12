"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let div_prod = document.querySelector('.products');
let btn_el = document.querySelectorAll('button');
btn_el.forEach(function(elem){
    elem.addEventListener('click', clickHandler)
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    //вам нужно очищать содержимое .products
    
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    if(div_prod.innerHTML != ''){
        div_prod.innerHTML = '';
    };
    showCategory(event.target.dataset.type);
}

/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */
function showCategory(category) {
    let j = products[category].length;
    for(let i = 0; i < j; i++){
        let pr_id = products[category][i].id;
        let pr_name = products[category][i].name;
        let pr_price = products[category][i].price;
        let pr_imageUrl = products[category][i].imageUrl;
        getProductMarkup(pr_id, pr_name, pr_price, pr_imageUrl);
    };
};
/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара по аналогии из комментария
 * в верху этого файла.
 */
function getProductMarkup(pr_id, pr_name, pr_price, pr_imageUrl) {
    div_prod.insertAdjacentHTML('beforeend', `<div> ${pr_id}</div> <div>${pr_name}</div> <img src="${pr_imageUrl}" alt=""> <div>${pr_price}</div> <a href="https://example.com/producs/${pr_id}">Подробнее</a>`);
    // <div>${здесь_название_товара}</div>
    // <img src="${здесь путь до картинки}" alt="">
    // <div>${здесь_цена}</div>
    // <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>

};
