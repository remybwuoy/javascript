
function MyLog() {

    let userEmail = document.getElementById("email_id").value;
    let userPass = document.getElementById("pass_id").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}