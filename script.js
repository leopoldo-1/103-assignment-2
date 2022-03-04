let productName = '';
let quantity = 0;
let price = 0;
let taxes = 0.16
let finalPrice = 0

productName = prompt("Enter the product name");
quantity = Number(prompt("Quantity"));
price = Number(prompt("Price"));

finalPrice = (quantity * price) + (quantity * price) * taxes

console.log(`Product name:${productName}, quantity:${quantity}, price:${price}, = ${finalPrice}`);

let template = `
                <hr>
                <b>Product:</b> ${productName}
                <br>
                <b>Quantity:</b> ${quantity}
                <br>
                <b>Price:</b> ${price}
                <br><br>
                <b>Sub total: </b>${price * quantity}
                <br>
                <b>Tax:</b> ${taxes * 100}%
                <br>
                <b>Final price:</b> ${finalPrice}`

document.write(template)