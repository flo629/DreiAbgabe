DROP TABLE IF EXISTS customers;


CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerId TEXT,
    FirstName TEXT,
    LastName TEXT,
    Company TEXT,
    City TEXT,
    Country TEXT,
    Phone1 TEXT,
    Phone2 TEXT,
    Email TEXT,
    SubscriptionDate TEXT,
    Website TEXT,
    Sales2021 INTEGER,
    Sales2022 INTEGER
);

--SELECT * FROM customers;




