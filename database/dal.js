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
    connection.query('CREATE TABLE Valunteer (' +
        'username VARCHAR(50),' +
        'password VARCHAR(50),' +
        'address VARCHAR(50),' +
        'fullname VARCHAR(50),' +
        'phone_number VARCHAR(50),' +
        'email VARCHAR(50),' +
        'arrival_date DATE, ' +
        'arrival_country VARCHAR(50),' +
        'PRIMARY KEY(username))', function(err, result){
        // Case there is an error during the creation
        if(err) {
            console.log(err);
        }
        else{
            console.log("Table Valunteer Created");
        }
    });
}


function createTableTwo(){
    connection.query('CREATE TABLE new immigrant ('+
        `user name VARCHAR(50) NOT NULL',
        `password` VARCHAR(50) NULL DEFAULT NULL,
        `address` VARCHAR(50) NULL DEFAULT NULL,
        `birhday` DATE NULL DEFAULT NULL,
        `fullname` VARCHAR(50) NULL DEFAULT NULL,
        `phone_number` VARCHAR(50) NULL DEFAULT NULL,
        `email` VARCHAR(50) NULL DEFAULT NULL,
        `arrival_date` DATE NULL DEFAULT NULL,
        `arrival_country` VARCHAR(50) NULL DEFAULT NULL,
        `langouage` VARCHAR(50) NULL DEFAULT NULL,
        PRIMARY KEY (`user name`)
)
    COLLATE='utf8_general_ci'
    ENGINE=InnoDB
    ;
, function(err, result){
        // Case there is an error during the creation
        if(err) {
            console.log(err);
        }
        else{
            console.log("Table Valunteer Created");
        }
}


module.exports = (function() {
    connect();

    return {

    }
})();


