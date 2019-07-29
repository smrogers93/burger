var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result)
        })
    },
    insertOne: function(tableInput, tableColOne, tableColTwo, valOfColOne, valOfColTwo) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableInput, tableColOne, tableColTwo, valOfColOne, valOfColTwo], function(err, result) {
            if (err) throw err;
            console.log(result)
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE "  + table;

        queryString += " SET ";
        queryString += 
    }

}