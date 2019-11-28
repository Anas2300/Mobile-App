function AMFormValidator() {

    var form = $("#AMRegisterForm");
    form.validate({
        rules: {
            AMFirstName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            AMLastName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            AMEmail: {
                required: true,
                emailCheck: true
            },
            AMPlatform: {
                required: true
            },

        },
        messages: {
            AMFirstName: {
                required: "You must enter a first name",
                minlength: "Length must be 2-20 characters long",
                maxlength: "Length must be 2-20 characters long"

            },
            AMLastName: {
                required: "You must enter a last name",
                minlength: "Length must be 2-20 characters long",
                maxlength: "Length must be 2-20 characters long"

            },
            AMEmail: {
                required: "Please enter an email address",
                emailCheck: "Please enter a valid email address"
            },
            AMPlatform: {
                required: "Please select a platform"
            },
        }
    });

    return form.valid();
}

jQuery.validator.addMethod("emailCheck",
    function (value, element) {
        var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return this.optional(element) || regex.test(value);
    },
    "validator for email check");
