const checkbox = document.querySelector('.main-header__checkbox');
const cssClassPrice = '.price';

const cards = [{ class: '.card-basic__price', monthly: '19.99', yearly: '199.99' },
{ class: '.card-professional__price', monthly: '24.99', yearly: '249.99' },
{ class: '.card-master__price', monthly: '39.99', yearly: '399.99' }];

function hideMonthlyPrice() {
    cards.map(card => card.monthly.style.display = "none");
};

checkbox.addEventListener('click', (e) => {
    const isMonthly = e.target.checked;
    cards.map(card => changePrice(card, isMonthly))
});

function changePrice(card, isMonthly = true) {
    const htmlCard = document.querySelector(card.class);
    const htmlCardClass = htmlCard.querySelector(cssClassPrice);

    if (isMonthly) {
        htmlCardClass.innerText = card.yearly;
    } else {
        htmlCardClass.innerText = card.monthly;
    };
};