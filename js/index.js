// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalEl = product.querySelector('.subtotal span');

  const priceAmount = price.innerHTML;
  const quantityAmount = quantity.value;

  const subtotalAmount = parseFloat(priceAmount) * parseInt(quantityAmount);

  subtotalEl.innerHTML = subtotalAmount;

  return subtotalAmount;
}

function calculateAll() {
  const totalArr = [];
  const products = document.querySelectorAll('.product');
  const totalAmountEl = document.querySelector('#total-value span');

  for (let el of products) {
    totalArr.push(updateSubtotal(el));
  }

  const totalAmount = totalArr.reduce((acc, val) => {
    return acc + val;
  }, 0);

  totalAmountEl.innerHTML = totalAmount;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target.parentElement.parentElement.parentElement;
  const childToRemove = event.target.parentElement.parentElement;
  const amountToRemove = childToRemove.querySelector('.subtotal span')
    .innerHTML;
  let totalAmountEl = document.querySelector('#total-value span');

  console.log(totalAmountEl);

  target.removeChild(childToRemove);

  totalAmountEl.innerHTML =
    parseFloat(totalAmountEl.innerHTML) - parseFloat(amountToRemove);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtns = document.querySelectorAll('.action .btn');

  for (let el of removeBtns) {
    el.addEventListener('click', removeProduct);
  }

  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
