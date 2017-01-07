var mysql = require('mysql');

var connection = null;

function connect(){

     connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '052219169',
        database : 'olims'
    });

    connection.connect();

}
function createTablOne(){

}


function createTableTwo(){

}


module.exports = (function() {
    connect();
    return {
        createTablOne: createTablOne,
        createTableTwo: createTableTwo

    }
})();


//
//
//
// connection.query('CREATE TABLE Valunteer (' +
//     'username VARCHAR(50),' +
//     'password VARCHAR(50),' +
//     'address VARCHAR(50),' +
//     'fullname VARCHAR(50),' +
//     'phone_number VARCHAR(50),' +
//     'email VARCHAR(50),' +
//     'arrival_date DATE, ' +
//     'arrival_country VARCHAR(50),' +
//     'PRIMARY KEY(username))', function(err, result){
//     // Case there is an error during the creation
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log("Table Valunteer Created");
//     }
// });