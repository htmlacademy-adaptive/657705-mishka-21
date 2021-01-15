let pageHeader = document.querySelector('.page-header');
let pageNav = document.querySelector('.main-nav');

let bestProductButton = document.querySelector('.best-product__button--modal');
let bestProductModal = document.querySelector('.modal');

let cartLinkButton = document.querySelectorAll('.product__cart-link--modal');
let modal = document.querySelector('.modal');

pageHeader.classList.remove('page-header--no-js');

pageNav.addEventListener('click', function () {
  if (pageNav.classList.contains('main-nav--closed')) {
    pageNav.classList.remove('main-nav--closed');
    pageNav.classList.add('main-nav--opened');
  } else {
    pageNav.classList.add('main-nav--closed');
    pageNav.classList.remove('main-nav--opened');
  }
});

if (bestProductButton) {
  bestProductButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    bestProductModal.classList.add('modal--show');
  });
}

cartLinkButton.forEach(function (elem, i) {
  elem.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
  });
});
