document.getElementById('enterBtn').addEventListener('click', function() {
   
    let vip = document.getElementById('VIP').checked;
    let age = Number(document.getElementById('Age').value);

if (vip) {
alert("Welcome to my best VIP customer:)");

} else {
    if (age >= 18) {
alert("Access granted");
    }
else {

    alert("Access denied");

        }
    }
});
