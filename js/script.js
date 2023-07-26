
// свайпер+++

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.title-7__btn-right',
    prevEl: '.title-7__btn-left',
  },

  breakpoints: {

    1920: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 4
    },

    320: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }

  },

});



// табы+++

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active'); });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active'); });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// аккордеон

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});



new Accordion('.accordion-list-1', {
  elementClass: 'accordion-1',
  triggerClass: 'accordion__control-11',
  panelClass: 'accordion__content-11',
  activeClass: 'accordion-1--active',
});


// бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.title-1__burger');
let menuLinks = menu.querySelectorAll('.nav__links-1');
let closeburger = menu.querySelectorAll('.nav__burger-close')


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('title-1__burger--active');

    document.body.classList.toggle('stop-scroll');
  })


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('title-1__burger--active');

    document.body.classList.remove('stop-scroll');

  });
})

closeburger.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('title-1__burger--active');

    document.body.classList.remove('stop-scroll');

  });
})




// поиск

document.addEventListener('DOMContentLoaded', function (e) {

  document.getElementById('open-search-form').addEventListener('click', function (e) {
    document.getElementById('form__search').classList.add('form__visible')
  })

  // document.getElementById('search-form-close').addEventListener('click', function(e) {

  //   document.getElementById('form__search').classList.remove('form__visible')
  // })

  //  прервать действие по умолчанию чтобы не перегружалась при нажатии
  document.getElementById('form__search').addEventListener('submit', function (e) {
    e.preventDefault()
  })


})








// ввод

document.addEventListener('DOMContentLoaded', function (e) {

  document.getElementById('open-btn-modal').addEventListener('click', function (e) {
    document.getElementById('header__modal-form').classList.add('header-modal__visible')
  })

  document.getElementById('open-btn-modal').addEventListener('click', function (e) {
    document.getElementById('container__modal-form').classList.add('container__modal-form__visible')
  })


  document.getElementById('search-form-close').addEventListener('click', function (e) {
    document.getElementById('header__modal-form').classList.remove('header-modal__visible')
  })

  document.getElementById('search-form-close').addEventListener('click', function (e) {
    document.getElementById('container__modal-form').classList.remove('container__modal-form__visible')
  })

  //  прервать действие по умолчанию чтобы не перегружалась при нажатии
  document.getElementById('header__modal-form').addEventListener('submit', function (e) {
    e.preventDefault()
  })

})


// ввод-320

document.addEventListener('DOMContentLoaded', function (e) {

  document.getElementById('open-btn-modal-320').addEventListener('click', function (e) {
    document.getElementById('header__modal-form').classList.add('header-modal__visible')
  })

  document.getElementById('search-form-close').addEventListener('click', function (e) {

    document.getElementById('header__modal-form').classList.remove('header-modal__visible')
  })

  //  прервать действие по умолчанию чтобы не перегружалась при нажатии
  document.getElementById('header__modal-form').addEventListener('submit', function (e) {
    e.preventDefault()
  })

})



// validation+++

const form = document.querySelector('.form-7');
const validation = new JustValidate('.form-7', {
  errorFieldCssClass: 'is-invalid',
  successFieldCssClass: 'is-border',
});

validation
  .addField('.form-7__text', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя'
    }
  ])
  .addField('.form-7__email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы не корректно ввели email',
    }
  ])
  .addField('.form-7__input', [
    {
      rule: 'minLength',
      value: 1,
    },
    {
      rule: 'maxLength',
      value: 100,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели текст'
    }
  ])
  .addField('.title-7__input-7', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели текст'
    }
  ])




// validation ВВОд


const form1 = document.querySelector('.form-1');
const validation1 = new JustValidate('.form-1');

validation1
  .addField('.form-1__input__text', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели логин'
    }
  ])
  .addField('.form-1__input__password', [
    {
      rule: 'minLength',
      value: 4,
    },
    {
      rule: 'maxLength',
      value: 16,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели пароль'
    }
  ])







// выпадающий список

const BtnMore = document.querySelector('.title-2__btn-2');
const ArticleItems = document.querySelectorAll('.title-2__block-3');

BtnMore.addEventListener('click', () => {
  ArticleItems.forEach(el => { el.classList.add('title-2__block-3--visible') });
  BtnMore.closest('.article-center').classList.add('article-center--hidden');
})


// window.addEventListener('scroll', (e) => {
//   window.scrollTo(0,0);
// });

