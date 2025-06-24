const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", () => 
    {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// Slider banner //

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// no error

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevents form from submitting and triggering server error
    });
  }
});

// cart adding

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('food-names')[0].innerText
  console.log(title)
  addItemToCart(title)
}

function addItemToCart(title) {
  const cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')

  cartRow.innerHTML = `
    <span class="cart-item-title">${title}</span>
    <input type="number" value="1" min="1" class="quantity-box">
    <button class="remove-button">REMOVE</button>
  `

  document.querySelector('.Cart-section').appendChild(cartRow)

  const removeButton = cartRow.querySelector('.remove-button')
  removeButton.addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
  const buttonClicked = event.target
  buttonClicked.parentElement.remove()
}

var addToCartButtons = document.getElementsByClassName('add-to-cart-button')
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i]
  button.addEventListener("click", addToCartClicked)
}



