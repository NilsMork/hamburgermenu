const menu = document.querySelector('.menu');
console.log(menu);
const menuToggle = document.querySelector('.menuToggle');
console.log(menuToggle);

menuToggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (window.getComputedStyle(menu).display === 'none') {
    menu.style.display = 'block';
  } else  {
    menu.style.display = 'none';
  }
});

const toppings = document.querySelectorAll('.wrapper div');
console.log(toppings);
for (let i = 0; i < toppings.length; i++);

const btn = document.querySelectorAll('.menu ul li');
console.log(btn);
for (let i = 0; i < btn.length; i++) {
  btn[0].addEventListener('click', function() {
    toppings[1].style.display = 'none'; btn[1].innerHTML = 'Bread';
    toppings[2].style.display = 'none'; btn[2].innerHTML = 'Burger';
    toppings[3].style.display = 'none'; btn[3].innerHTML = 'Tomato';
    toppings[4].style.display = 'none'; btn[4].innerHTML = 'Lettuce';
    toppings[5].style.display = 'none'; btn[5].innerHTML = 'Cheese';
    toppings[6].style.display = 'none'; btn[6].innerHTML = 'Salsa';
  });
  btn[1].addEventListener('click', function() {
    if (window.getComputedStyle(toppings[1]).display === 'none') {
      toppings[1].style.display = 'block';
      btn[1].innerHTML = 'No Bread';
    } else  {
      toppings[1].style.display = 'none';
      btn[1].innerHTML = 'Bread';
    } 
  });
  btn[2].addEventListener('click', function() {
    if (window.getComputedStyle(toppings[2]).display === 'none') {
      toppings[2].style.display = 'block';
      btn[2].innerHTML = 'No Burger';
    } else  {
      toppings[2].style.display = 'none';
      btn[2].innerHTML = 'Burger';
    }
  });
  btn[3].addEventListener('click', function() {
    if (window.getComputedStyle(toppings[3]).display === 'none') {
      toppings[3].style.display = 'block';
      btn[3].innerHTML = 'No Tomato';
    } else  {
      toppings[3].style.display = 'none';
      btn[3].innerHTML = 'Tomato';
    }
  });
  btn[4].addEventListener('click', function() {
    if (window.getComputedStyle(toppings[4]).display === 'none') {
      toppings[4].style.display = 'block';
      btn[4].innerHTML = 'No Lettuce';
    } else  {
      toppings[4].style.display = 'none';
      btn[4].innerHTML = 'Lettuce';
    }
  });
btn[5].addEventListener('click', function() {
  if (window.getComputedStyle(toppings[5]).display === 'none') {
    toppings[5].style.display = 'block';
    btn[5].innerHTML = 'No Cheese';
  } else  {
    toppings[5].style.display = 'none';
    btn[5].innerHTML = 'Cheese';
  }
});
btn[6].addEventListener('click', function() {
  if (window.getComputedStyle(toppings[6]).display === 'none') {
    toppings[6].style.display = 'block';
    btn[6].innerHTML = 'No Salsa';
  } else  {
    toppings[6].style.display = 'none';
    btn[6].innerHTML = 'Salsa';
  }
});
}

