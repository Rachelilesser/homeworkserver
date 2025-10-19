import { Customer } from "./models/Customer";
import { Restaurant } from "./services/RestuarantManager"
import { Table } from "./models/Table";
import { Order } from "./models/Order";



const restaurant: Restaurant = new Restaurant()
console.log("=== Opening the restaurant ===");

restaurant.addCustomer(1234, "Sara");
restaurant.addCustomer(123, "Tami");
restaurant.addCustomer(4567, "Chani");
restaurant.addCustomer(123432, "Tovi");

const currentCustomer: Customer | undefined = restaurant.findCustomer(1234);
if (currentCustomer != undefined)
    console.log(currentCustomer.name);
else
    console.log("No customer");

restaurant.addTable(2)
restaurant.addTable(5)
restaurant.addOrder(123, 5)
restaurant.addOrder(4567, 4)
restaurant.addOrder(123432, 2)
console.log("Starting check for table 101");
const oo = restaurant.findorderbytable(101);

if (oo != undefined) {
  console.log("A new order has been created for the customer!");
  oo.addItem("pizza", 20);
    oo.addItem("fish", 30)
    console.log("Items in order:", oo.items);
    console.log("Subtotal:", oo.calculateTotal());
}
const bb = restaurant.findorderbycustomerditails(123)
if (bb != undefined) {
    bb.addItem("chips", 8)
    bb.addItem("chicken", 50)
    let sum = bb.closeOrder()
    let total: number = 0
    bb.items.forEach(c => total += c.price);
        if (sum != total)
        console.log("טעות בחשבון")

}
restaurant.addOrder(1233333,5)