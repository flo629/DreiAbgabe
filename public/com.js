
$("#show").click(function(){
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/",
        success: function (response) {
            console.log(response)
            
            $(".table_row").remove();
            var count = 0;
            response.forEach(element => {
                //console.log(element)
                
                    //var listItem = $('<div>' + " " + element.City + "   " +element.Company+ element.Country + element.CustomerId+ element.Email+ element.FirstName+element.LastName + element.Phone1 + element.Phone2 + element.Sales2021+element.Sales2022+ element.SubscriptionDate + element.Website+"</div>");
                    //$("#create").append(listItem);
                if(count < 20){
                    var tableRow = $('<tr class="table_row">' +
                    '<td>' + element.City + '</td>' +
                    '<td>' + element.Company + '</td>' +
                    '<td>' + element.Country + '</td>' +
                    '<td>' + element.CustomerId + '</td>' +
                    '<td>' + element.Email + '</td>' +
                    '<td>' + element.FirstName + '</td>' +
                    '<td>' + element.LastName + '</td>' +
                    '<td>' + element.Phone1 + '</td>' +
                    '<td>' + element.Phone2 + '</td>' +
                    '<td>' + element.Sales2021 + '</td>' +
                    '<td>' + element.Sales2022 + '</td>' +
                    '<td>' + element.SubscriptionDate + '</td>' +
                    '<td>' + element.Website + '</td>' +
                '</tr>');
                $("#create").append(tableRow);
                count++;
            };

                
                
            
                  
                    
                
            });
            //$("#create").slideDown(1000);

        },
        error: function (error) {
            console.log(error)
        }
        
    });
});




$("#sort").click(function(){
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/order_by_name",
        success: function (response) {
            console.log(response)
            
    
        
            $(".table_row").remove();
            var count = 0;
            response.forEach(element => {
                //console.log(element)
                
                    //var listItem = $('<div>' + " " + element.City + "   " +element.Company+ element.Country + element.CustomerId+ element.Email+ element.FirstName+element.LastName + element.Phone1 + element.Phone2 + element.Sales2021+element.Sales2022+ element.SubscriptionDate + element.Website+"</div>");
                    //$("#create").append(listItem);
                if(count < 20){
                    var tableRow = $('<tr class="table_row">' +
                    '<td>' + element.City + '</td>' +
                    '<td>' + element.Company + '</td>' +
                    '<td>' + element.Country + '</td>' +
                    '<td>' + element.CustomerId + '</td>' +
                    '<td>' + element.Email + '</td>' +
                    '<td>' + element.FirstName + '</td>' +
                    '<td>' + element.LastName + '</td>' +
                    '<td>' + element.Phone1 + '</td>' +
                    '<td>' + element.Phone2 + '</td>' +
                    '<td>' + element.Sales2021 + '</td>' +
                    '<td>' + element.Sales2022 + '</td>' +
                    '<td>' + element.SubscriptionDate + '</td>' +
                    '<td>' + element.Website + '</td>' +
                '</tr>');
                
                $("#create").append(tableRow);
                count++;
            };

                
                
            
                  
                    
                
            });
            //$("#create").slideDown(1000);

        },
        error: function (error) {
            console.log(error)
        }
        
    });
});


$("#filter").click(function(){
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/filter_by_sales",
        success: function (response) {
            console.log(response)
            
    
        
            $(".table_row").remove();
            var count = 0;
            response.forEach(element => {
                //console.log(element)
                
                    //var listItem = $('<div>' + " " + element.City + "   " +element.Company+ element.Country + element.CustomerId+ element.Email+ element.FirstName+element.LastName + element.Phone1 + element.Phone2 + element.Sales2021+element.Sales2022+ element.SubscriptionDate + element.Website+"</div>");
                    //$("#create").append(listItem);
                if(count < 20){
                    var tableRow = $('<tr class="table_row">' +
                    '<td>' + element.City + '</td>' +
                    '<td>' + element.Company + '</td>' +
                    '<td>' + element.Country + '</td>' +
                    '<td>' + element.CustomerId + '</td>' +
                    '<td>' + element.Email + '</td>' +
                    '<td>' + element.FirstName + '</td>' +
                    '<td>' + element.LastName + '</td>' +
                    '<td>' + element.Phone1 + '</td>' +
                    '<td>' + element.Phone2 + '</td>' +
                    '<td>' + element.Sales2021 + '</td>' +
                    '<td>' + element.Sales2022 + '</td>' +
                    '<td>' + element.SubscriptionDate + '</td>' +
                    '<td>' + element.Website + '</td>' +
                '</tr>');
                $("#create").append(tableRow);
                count++;
            };

                
                
            
                  
                    
                
            });
            //$("#create").slideDown(1000);

        },
        error: function (error) {
            console.log(error)
        }
        
    });
});