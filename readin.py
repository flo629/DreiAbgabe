
import csv
import sqlite3

# Connect to SQLite database
connection = sqlite3.connect('Kund.db')
cursor = connection.cursor()

# Open the CSV file
with open('customers_sales_2021_2022.csv', newline='') as file:
    contents = csv.reader(file, delimiter=';')
    included_cols = [1,2, 3, 4, 5,6,7,8,9,10,11,12,13]

    next(contents)  # Skip the header row
    
    # Define the SQL insert statement
    insert_records = "INSERT INTO customers ( CustomerId, FirstName, LastName, Company, City, Country, Phone1, Phone2, Email, SubscriptionDate, Website, Sales2021, Sales2022) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    
    # Iterate over each row in the CSV and insert into the database
    for row in contents:
        content = list(row[i] for i in included_cols)
        cursor.execute(insert_records, content)

# Commit changes and close connection
connection.commit()
connection.close()
