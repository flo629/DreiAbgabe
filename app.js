const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors")


const app = express();

let db = new sqlite3.Database(path.join(__dirname, 'Kund.db'), (err) =>{
    if(err){
        console.error('Error connection to database', err.message);
    }else{
        console.log('connected to the sqlite databse');
    }
})


//pp.use(express.static(path.join(__dirname, '/public')));
app.use(cors());


app.get("/" , (req , res) => { 
    console.log("got it")
    //res.send("hello from server");
    db.serialize(function () {
        db.all('SELECT id, CustomerId, FirstName,LastName,Company,City,Country,Phone1,Phone2,Email,SubscriptionDate,Website,Sales2021,Sales2022 FROM Customers', function (
          err,
          row
        ) {
          res.send(row);
        });
      });
})

app.get("/order_by_name" , (req , res) => { 
    console.log("got it")
    //res.send("hello from server");
    db.serialize(function () {
        db.all('SELECT id, CustomerId, FirstName,LastName,Company,City,Country,Phone1,Phone2,Email,SubscriptionDate,Website,Sales2021,Sales2022 FROM Customers ORDER BY FirstName', function (
          err,
          row
        ) {
          res.send(row);
        });
      });
})

app.get("/filter_by_sales" , (req , res) => { 
    console.log("got it")
    //res.send("hello from server");
    db.serialize(function () {
        db.all('SELECT id, CustomerId, FirstName,LastName,Company,City,Country,Phone1,Phone2,Email,SubscriptionDate,Website,Sales2021,Sales2022 FROM Customers WHERE Sales2021 < 100', function (
          err,
          row
        ) {
          res.send(row);
        });
      });
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
})