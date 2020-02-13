$(document).ready(function () {
    /*
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    */

    $('#home a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
});

window.MoveToTop = (id, trIndex) => {

    $([document.documentElement, document.body]).animate({
        scrollTop: (44 * trIndex) + 40
    }, 200);

    return true;
};
/*
window.SetCookie = (c_name, c_value, ex_days) => {
    var d = new Date();
    d.setTime(d.getTime() + (ex_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = c_name + "=" + c_value + ";" + expires + ";path=/";
    return true;
};

window.GetCookie = (c_name) => {
    var name = c_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "{\"isLoggedIn\":false,\"ID\":-1,\"displayName\":\"\",\"companyName\":\"\",\"email\":\"\",\"imageFile\":\"\",\"hash\":\"\"}";
};

window.DelCookie = (c_name) => {
    var d = new Date();
    d.setTime(d.getTime() - 100);
    var expires = "expires=" + d.toUTCString();
    document.cookie = c_name + "=" + "" + ";" + expires + ";path=/";
    return true;
};
*/
window.RefreshPage = () => {
    location.reload();
    return true;
};


function validateSignIn() {

    var fields = document.SignIn;
    var ErrorCount = 0;

    var resMsg = validatePassword(fields.userPassword);
    alert("OK");
    if (resMsg!= "NoError") {
        document.getElementById("SignInErrorPassword").innerHTML = resMsg;
        reloadon(SignInErrorPassword);
        fields.userPassword.focus();
        ErrorCount++;
    } else {
        reloadoff(SignInErrorPassword);
    }

    if (validateEmail(fields.userEmail.value) == false) {
        reloadon(SignInErrorEmail);
        fields.userEmail.focus();
        ErrorCount++;
    } else {
        reloadoff(SignInErrorEmail);
    }
    
    if (validateName(fields.userName.value) == false) {
        reloadon(SignInErrorName);
        fields.userName.focus();
        ErrorCount++;
    } else {
        reloadoff(SignInErrorName);
    }

    if (ErrorCount == 0) {
        return true;
    }
    else {
        return false;
    }
}

function validatePassword(pass) {
    var error = "";
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var hasSymbols = /[!@#$%^&*()_+=\[{\]};:<>|./?,-]/g;

    if (pass.value == "" || pass.value == null) {
        error = "Password should not be empty.";
    } else if ((pass.value.length < 8)) {
        error = "Password should not be less than than 8 characters";
    } else if ((pass.value.length > 12)) {
        error = "Password should not be greater than than 12 characters";
    } else if (!pass.value.match(lowerCaseLetters)) {
        error = "Password should contain At least one lower case letter";
    } else if (!pass.value.match(upperCaseLetters)) {
        error = "Password should contain At least one upper case letter";
    } else if (!pass.value.match(numbers)) {
        error = "Password should contain At least one numeric value";
    } else if (!pass.value.match(hasSymbols)) {
        error = "Password should contain At least one special case characters";
    } else {
        error = "NoError";
    }

    return error;
}
function validateName(Name) {
    var error = "";

    if (pass.value == "" || pass.value == null) {
        error = "Name should not be empty.";
    } else if ((pass.value.length < 8)) {
        error = "Name should not be less than than 8 characters";
    } else {
        error = "NoError";
    }

    return error;
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function reloadon(c) {
    c.style.display = "";
}
function reloadoff(c) {
    c.style.display = "none";
}

