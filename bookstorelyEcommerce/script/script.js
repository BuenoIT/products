/*  Program id: assignment1G
 *   Program purpose: To create a dinamic ecommerce website using javascript, html and css. Assignment 1.
 *
 *   Program revision:
 *      Guilherme Bueno, 2022-05-28: Created
 *      Guilherme Bueno, 2022-05-29: Program Updates (Function to display cart and create receipt)
 *      Guilherme Bueno, 2022-05-30: Bug fixes (Function issues)
 */

//Global variables
let cart = [];
let productIndex = 0;
let quantity = 0;
let userName = '';
let productsOnCart = 0;
let totalPlusTaxCalculation = 0;
let subtotal = 0;

//This algorithm maps the book list and pastes the model into the web page for each product created in books.js

booksJson.map((item, index) => {
  let bookItem = document
    .querySelector('.book-product-model .book-itens')
    .cloneNode(true);
  bookItem.setAttribute('index-key', index);

  bookItem.querySelector('.book-item--name').innerHTML = item.name;
  bookItem.querySelector('.book-item--description').innerHTML =
    item.description;
  bookItem.querySelector('.book-item--img img').src = item.img;
  bookItem.querySelector('.book-item--price').innerHTML = `$${item.price}`;
  bookItem.querySelector('.book-item--add').innerHTML = `+`;

  bookItem.querySelector('.add-btn').addEventListener('click', (e) => {
    e.preventDefault();
    productIndex = e.target.closest('.book-itens').getAttribute('index-key');
    quantity = prompt(`How many ${item.name} books would you like?`);
    if (quantity === 'null' || quantity === null) {
      return;
    } else {
      while (isNaN(quantity) || quantity <= 0) {
        quantity = prompt(
          `Only numbers should be entered. How many ${item.name} books would you like?`
        );
        if (quantity === 'null' || quantity === null) {
          quantity = parseInt(0);
          break;
        } else {
          quantity = parseInt(quantity);
        }
      }
    }
    quantity = parseInt(quantity);

    function searchCartId(id, cart) {
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          return true;
        }
      }
    }
    if (quantity == 0) {
      return;
    } else {
      if (searchCartId(booksJson[productIndex].id, cart)) {
        let total = quantity * item.price;
        let totalPlusTax = total * 1.13;

        id = booksJson[productIndex].id;

        for (var i = 0; i < cart.length; i++) {
          cart[i].quantityPurchased = quantity;
          cart[i].total = total;
          cart[i].totalPlusTax = totalPlusTax;
        }

        alert(
          'Your cart has been updated with the adjusted quantity of books.'
        );
      } else {
        let total = quantity * item.price;
        let totalPlusTax = total * 1.13;
        cart.push({
          id: booksJson[productIndex].id,
          name: booksJson[productIndex].name,
          img: booksJson[productIndex].img,
          price: booksJson[productIndex].price,
          quantityPurchased: quantity,
          total: total,
          totalPlusTax: totalPlusTax,
        });
        alert('You have added the books to your cart.');
      }

      if (cart.length == 0) {
        document.querySelector('.cart-itens').innerHTML = `<p>0</p>`;
      } else {
        productsOnCart = cart.reduce(function (acc, obj) {
          return acc + obj.quantityPurchased;
        }, 0);
        document.querySelector(
          '.cart-itens'
        ).innerHTML = `<p>${productsOnCart}</p>`;
      }
    }
  });
  document.querySelector('.book-list').append(bookItem);
});

//Within user choices during shopping, this function displays information about the cart in a new area

function displayCart() {
  document.querySelector(
    '.cart-greetings'
  ).innerHTML = `<p> Here is your cart </p>`;

  if (cart.length == 0) {
    document.querySelector(
      '.cart-review'
    ).innerHTML = `<p> Your cart is empty :( </p>`;
    document.querySelector('.cart-link-back').innerHTML =
      '<a href="#header-anchor">Go back</a>';
  } else {
    var tableCart = "<table border='1|1'>"; //To create a table by interact through cart array.
    tableCart += '<tr>';
    tableCart += '<th>' + 'Book Name' + '</th>';
    tableCart += '<th>' + 'Quantity' + '</th>';
    tableCart += '<th>' + 'Price' + '</th>';
    tableCart += '<th>' + 'Total' + '</th>';
    tableCart += '</th>';
    for (var i = 0; i < cart.length; i++) {
      tableCart += '<tr>';
      tableCart += '<td>' + cart[i].name + '</td>';
      tableCart += '<td>' + cart[i].quantityPurchased + '</td>';
      tableCart += '<td>' + '$' + cart[i].price.toFixed(2) + '</td>';
      tableCart += '<td>' + '$' + cart[i].total.toFixed(2) + '</td>';
      tableCart += '</tr>';
    }
    tableCart += '</table>';

    totalPlusTaxCalculation = cart.reduce(function (acc, obj) {
      //To calculate total plus tax
      return acc + obj.totalPlusTax;
    }, 0);

    document.querySelector('.cart-review').innerHTML = tableCart;
    document.querySelector(
      '.cart-total-summary'
    ).innerHTML = `In total, plus tax, you pay: $${totalPlusTaxCalculation.toFixed(
      2
    )}`;
    document.querySelector('.cart-btn-payment').innerHTML =
      '<button type="button" class="btn-payment">Proceed to payment</button>';
    document.querySelector('.cart-link-back').innerHTML =
      '<a href="#header-anchor">Go back</a>';
  }
}

//After user click on "Proceed to payment" button, the system will ask user name and generate a receipt.

function printReceipt() {
  userName = prompt('Please enter your name: ');
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  document.querySelector('.receipt-container-title').innerHTML =
    '<p id="receipt-anchor">Receipt</p>';
  document.querySelector('.receipt-container-address').innerHTML =
    '<p> 46 Cluthe Cres, Kitchener, Ontario, Canada </p>';
  document.querySelector('.receipt-container-phone').innerHTML =
    '<p> 226-505-4978 </p>';
  document.querySelector('.receipt-container-cashier').innerHTML =
    '<p> Cashier: Guilherme Bueno </p>';
  document.querySelector(
    '.receipt-container-date'
  ).innerHTML = `<p> Date: ${today} </p>`;
  document.querySelector(
    '.receipt-container-customer-name'
  ).innerHTML = `<p> Customer Name: ${userName} </p>`;

  var tableReceipt = "<table border='1|1'>";
  tableReceipt += '<tr>';
  tableReceipt += '<th>' + 'Quantity' + '</th>';
  tableReceipt += '<th>' + 'Book Name' + '</th>';
  tableReceipt += '<th>' + 'Total' + '</th>';
  tableReceipt += '</th>';
  for (var i = 0; i < cart.length; i++) {
    tableReceipt += '<tr>';
    tableReceipt += '<td>' + cart[i].quantityPurchased + '</td>';
    tableReceipt += '<td>' + cart[i].name + '</td>';
    tableReceipt += '<td>' + '$' + cart[i].total.toFixed(2) + '</td>';
    tableReceipt += '</tr>';
  }
  tableReceipt += '</table>';

  totalPlusTaxCalculation = cart.reduce(function (acc, obj) {
    return acc + obj.totalPlusTax;
  }, 0);
  subtotal = cart.reduce(function (acc, obj) {
    return acc + obj.total;
  }, 0);

  document.querySelector('.table-receipt').innerHTML = tableReceipt;
  document.querySelector(
    '.receipt-container-subtotal'
  ).innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
  document.querySelector('.receipt-container-tax').innerHTML =
    'Tax 13%: ' + '$' + (totalPlusTaxCalculation - subtotal).toFixed(2);
  document.querySelector(
    '.receipt-container-total'
  ).innerHTML = `Total: $${totalPlusTaxCalculation.toFixed(2)}`;
  document.querySelector('.receipt-go-back').innerHTML =
    '<a href="#header-anchor">Go back</a>';
}
