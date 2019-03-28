var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    var currentInventory = [];
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // console.table(results);
        currentInventory = results;
        for (var i = 0; i < results.length; i++) {
            console.log("Item ID:" + results[i].item_id + " | Product Name: " + results[i].product_name + " |  Price: " + results[i].price)

        }
    })
    inquirer.prompt([
        {
            name: "userID",
            type: "input",

            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            },

            message: "Enter the Product ID# of the product you want, please."
        },
        {
            name: "userQuantity",
            type: "input",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            },
            message: "How many units would you like?"
        }
    ]).then(function (answer) {
        console.log(answer);
        var userID = parseInt(answer.userID);
        var validID = false;
        var validQuantity = false;
        var updatedInventory = 0;
        var userQuantity = parseInt(answer.userQuantity);
        for (var i = 0; i < currentInventory.length; i++) {
            if (currentInventory[i].item_id === userID) {
                validID = true;


            }
            // checking if the value entered is valid
            if (currentInventory[i].stock_quantity <= userQuantity) {
                validQuantity = true;
                updatedInventory = currentInventory[i].stock_quantity - userQuantity

            }
        }
        if (validID && validQuantity) {
            console.log("validID" + "validQuantity")
            
            

        } else{
            console.log("invalidID" + "invalidQuantity")
        }
    })
}

// create function to update inventory
// then create function to display the updated total

