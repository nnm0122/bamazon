//Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
//var prompt = require('promt');
var Table = require('cli-table');

var connection = mysql.createConnection({
	host:"locathost",
	port:5000,
	user:"root",
	password: "psalms91",
	database:"bamazonDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected on: " + connection.threadId);
	forSale();
	
});

var table = new Table({
	head: ['itemID', 'productName', 'deptName', 'price', 'stockQty']
	, colWidths: [10, 10, 10, 10, 10]
});

		console.log(table.toString());

var product_choice;
var product_name;
var product_price;
var purchase_amt;
var stock_remaining;

function productSearch() {
	inquirer
		.prompt({
			name: "itemID",
			type: "input",
			message: "Please enter the Item ID which you would like to purchase"
		})
		.then(function(answer) {
			var query = "SELECT itemID, productName, price, stockQty FROM products WHERE ?";
			connection.query(query, { itemID: answer.item.ID }, function(err, res) {
				for(var i = 0; i < res.length; i++) {
					console.log(res[i].itemID + " " + res[i].productName + " $" + res[i].price);
					console.log(res[i].stockQty + " left in stock");
					var remove_from_stock = res[i].stockQty;
					product_price = res[i].price;
					product_name = res[i].product_name;
					// console.log("product_price: " + product_price);
				}
				var answer1 = answer;
				product_choice = answer;
				// console.log("product_choice: " + product_choice.id);
				checkInventory(remove_from_stock);
				// console.log("quantity: " + res[i].stock_quantity);
			});
		});

}

function forSale() {
	var query = "SELECT itemID, productName, price FROM products;";
	connection.query(query, function(err, res) {
		for(var i = 0; i < res.length; i++) {
			console.log(res[i].id + " | " + res[i].productName + " | " + res[i].price);
		}
		productSearch();
	});
}

function checkInventory(remove_from_stock) {
	inquirer
		.prompt({
			name: "quantity",
			type: "input",
			message: "How many units would you like to purchase?"
		})
		.then(function(answer) {
			var buy_quantity = answer.quantity;
			purchase_amt = buy_quantity;
			
			console.log("You will be purchasing: " + buy_quantity + " " + product_name + " for $" + product_price + " each.");
			var stock_left = remove_from_stock - buy_quantity;
			// console.log("stock_left: " + stock_left);
			stock_remaining = stock_left;
			if(stock_left < 0 ) {
				console.log("Insufficient quantity!")
				connection.end();
			} else {
				checkOut();
			}

		});
}

function checkOut() {
	console.log("Checking Out");
	
	var total_price = purchase_amt * product_price;
	console.log("You're total price is $" + total_price);
	var query = "UPDATE products SET stock_quantity = " + stock_remaining + " WHERE id = " + product_choice.id + ";";
	connection.query(query,function(err, res){
		console.log("Updated Database")
	});
	connection.end();
}




