var db;

function errorHandler(tx, error)
{
    console.error("SQL error: " + tx + " (" + error.code + "): " + error.message);

}

var DB = {

    createDatabase: function ()
    {
        var shortName = "AM DB";
        var version = "2.7";
        var displayName = "DB for Gaming Rental app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreate()
        {
            console.info("Success: Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreate);
    },
    createTables: function ()
    {
        function txFunction(tx)
        {
            var sql = "CREATE TABLE IF NOT EXISTS member(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstName VARCHAR(20) NOT NULL," +
                "lastName VARCHAR(20)," +
                "email VARCHAR(20));";
            var options = [];

            function successCreate()
            {
                console.info("Table created successfully");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);
        }

        function successTransaction()
        {
            console.info("Create table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function ()
    {
        function txFunction(tx)
        {
            var sql = "DROP TABLE IF EXISTS member;";
            var options = [];

            function successDrop()
            {
                console.info("Table dropped successfully");
            }

            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransaction()
        {
            console.info("Drop table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};