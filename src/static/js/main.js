'use strict'



$('.top__inner').slick({
  infinite: true,
  dots: true,
});

$('.goods__cards').slick({
  slidesToShow: 4,
    // variableWidth: true,
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
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// $('.goods__cards').slick({
//   infinite: true,
//   prevArrow: $('.good-before'),
//   nextArrow: $('.good-after'),
//   slidesToShow: 4,
//   adaptiveHeight: true,
//   variableWidth: true,
//   responsive: [
//     {
//       breakpoint: 1310,
//       settings: {
//         slidesToShow: 3,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//       }
//     }
//   ]
// });


// {
//   breakpoint: 600,
//   settings: {
//     slidesToShow: 2,
//     slidesToScroll: 2
//   }
// },
// {
//   breakpoint: 480,
//   settings: {
//     slidesToShow: 1,
//     slidesToScroll: 1
//   }
// }
const goods = document.querySelector('.goods');
const cartCount = document.querySelector('.cartCount');

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

const changeCart = () => {
  if (localStorage.goods === undefined) {
    localStorage.setItem('goods', 0);
  }
  cartCount.textContent = localStorage.getItem('goods');
};

changeCart();


// addCartCount = () => {
  // let goodsCount = 0;
//   est
// }


// const buyGood = document.querySelector('.goods');

// document.addEventListener('click', changeStatus);
//   // buyGood.style = "background: linear-gradient(249.3deg, #282696 0%, #09ABE4 100%); box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25)";
//   // buyGood.textContent = "В КОРЗИНЕ"
// // );

// const changeStatus = (event) => {
//   const target = event.target;
//   console.log(target);
//   const addInCart = target.closest('.more__buy');
//   console.log(addInCart);
// }
