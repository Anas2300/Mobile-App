function clearDatabase()
{
    var result = confirm("Do you really want to clear all members?");
    if (result)
    {
        try
        {
            DB.dropTables();
            alert("Members cleared!");
        }
        catch (e)
        {
            alert(e);
        }
    }
}


function AddNewMember()
{
    if (AMFormValidator())
    {
        console.info("Validation is successful");

        var first = $("#AMFirstName").val();
        var last = $("#AMLastName").val();
        var email = $("#AMEmail").val();

        var opt = [first, last, email];

        function callback()
        {
            console.info("Record inserted successfully");
        }

        Member.insert(opt, callback);
    }
    else
    {
        console.error("Validation failed");
    }

}

function showAllMembers()
{
    var options = [];

    function callback(tx, results)
    {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++)
        {

            var row = results.rows[i];

            htmlCode += "<li>" +

                "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h1>First Name: " + row['firstName'] + "</h1>" +
                "<h2>Last Name: " + row['lastName'] + "</h2>" +
                "<h3>Email: " + row['email'] + "</h3>" +
                "</a>" +
                "</li>";
        }

        var lv = $("#AMListView");
        lv = lv.html(htmlCode);

        lv.listview("refresh");

        function clickHandler()
        {
            localStorage.setItem("id", $(this).attr("data-row-id") );

              $(location).prop('href', '#pageWIP');
        }

        $("#AMList a").on("click", clickHandler);
    }

    Member.selectAll(options, callback);


}

