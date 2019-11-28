
function AMSave_click() {
    AddNewMember();
}

function btnClearDatabase_click()
{
    clearDatabase();
}

function init() {
    console.info("DOM is ready");
    $("#btnClearDatabase").on("click", btnClearDatabase_click);
    $("#AMSave").on("click", AMSave_click);
    $("#AMList").on("pageshow", AMList_show);
}

function AMList_show() {
    showAllMembers();
}

function initDB()
{
    try
    {
        DB.createDatabase();
        if (db)
        {
            DB.createTables();
        }
        else
        {
            console.error("Error: Cannot create tables: Database does not exist");
        }
    }
    catch (e)
    {
        console.error("Error: (Fatal) Error in initDB(). Cannot proceed");
    }
}

$(document).ready(function () {

    initDB();
    init();
});
