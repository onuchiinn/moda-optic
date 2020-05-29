"use strict"

$('.top__inner').slick({
  infinite: true,
  dots: true,
});

$('.goods__cards').slick({
  slidesToShow: 4,
  prevArrow: $('.good-before'),
  nextArrow: $('.good-after'),
  responsive: [
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 615,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


const goods = document.querySelector('.goods');
const cartCount = document.querySelector('.cartCount');
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

const changeCart = () => {
  if (localStorage.goods === undefined) {
    localStorage.setItem('goods', 0);
  }
  cartCount.textContent = "(" + localStorage.getItem('goods') + ")";
};

goods.addEventListener('click', function (event) {
  const addInCart = event.target.closest('.more__buy');
  addInCart.textContent = "✔ В КОРЗИНЕ";
  addInCart.style = `
  background: linear-gradient(249.3deg, #282696 0%, #09ABE4 100%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
  color: #ffffff
  `;
  let goodsCount = localStorage.getItem('goods');
  goodsCount++;
  localStorage.setItem('goods', goodsCount);
  changeCart();
});

menuBtn.addEventListener('click', () => menuList.classList.toggle('hidden'));

changeCart();