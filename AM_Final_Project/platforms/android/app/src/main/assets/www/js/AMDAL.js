var Member = {
    insert: function (options, callback)
    {

        function txFunction(tx)
        {
            var sql = "INSERT INTO member(firstName, lastName, email) VALUES(?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "UPDATE member SET firstName=?, lastName=?, email=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "DELETE FROM member WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "SELECT * FROM member WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    selectAll: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "SELECT * FROM member;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("SelectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
};