function password_check() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (password1.length < 8) { // Both passwords need to be 8 or more characters.
        alert("The length of Password1 is less than 8 characters/letters.")
    } else if (password2.length < 8){ // Both passwords need to be 8 or more characters.
        alert("The length of Password2 is less than 8 characters/letters.")
    } else if (password1 != password2) { // Both passwords need to be 8 or more characters and match.
        alert("The passwords do not match. Try again.")
    } else { // Case where it satisfies conditions.
        alert("The passwords match and are at least 8 characters.")
    }


}
