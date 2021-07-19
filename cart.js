
var products = document.getElementById("data");

function addProduct(el) {
  var div = document.createElement("div");

  var p = document.createElement("p");
  p.innerHTML = el.name;

  var image = document.createElement("img");
  image.src = el.url;

  var price_p = document.createElement("p");
  price_p.innerHTML = el.price;
  div.append(image, p, price_p);
  products.append(div);
}
function showVisited() {
  let data = JSON.parse(localStorage.getItem("cart"));
    data.forEach(function (el) {
    addProduct(el);
  });
}
showVisited();


