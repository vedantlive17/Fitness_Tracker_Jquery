var shoppingCart = {};

var products = {
    "google home": {
        price: 84.99,
    },
    watch: {
        price: 150,
    },
    airpods: {
        price: 120,
    },
    shoes: {
        price: 90,
    },
};

function addToCart(product, quantity) {
    if (product in shoppingCart) {
        shoppingCart[product] += quantity;
    } else {
        shoppingCart[product] = quantity;
    }

    saveCart();

    updateCartDisplay();
}

function removeFromCart(product, quantity) {
    if (product in shoppingCart) {
        shoppingCart[product] -= quantity;

        if (shoppingCart[product] <= 0) {
            delete shoppingCart[product];
        }
    }

    saveCart();

    updateCartDisplay();
}

function getTotal() {
    var total = 0;

    for (var product in shoppingCart) {
        total += products[product].price * shoppingCart[product];
    }

    return total;
}

function saveCart() {
    var cartString = JSON.stringify(shoppingCart);

    localStorage.setItem("cart", cartString);
}

function updateCartDisplay() {
    var cartElement = document.getElementById("cart");

    cartElement.innerHTML = "";

    for (var product in shoppingCart) {
        cartElement.innerHTML += "<h1>" + product + "</h1>" + "<hr>";
        cartElement.innerHTML += '<div class="sub-total">';
        cartElement.innerHTML += "x";
        cartElement.innerHTML += shoppingCart[product];
        cartElement.innerHTML +=
            " &nbsp &nbsp &nbsp  &nbsp &nbsp " +
            " Subtotal: $" +
            (shoppingCart[product] * products[product].price).toFixed(2);

        cartElement.innerHTML +=
            ' <button class="slide" onclick="removeFromCart(\'' +
            product +
            "', " +
            shoppingCart[product] +
            ')">X</button>';
        cartElement.innerHTML += "</div>";

        var totalElement = document.getElementById("total");

        totalElement.innerHTML = "Total: $" + getTotal().toFixed(2);
    }
}

function loadCart() {
    var cartString = localStorage.getItem("cart");

    if (cartString) {
        shoppingCart = JSON.parse(cartString);
    }
    updateCartDisplay();
    getTotal();
}

loadCart();