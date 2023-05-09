var angkaAcak1 = Math.floor(Math.random() * 6 + 1);
var angkaAcak2 = Math.floor(Math.random() * 6 + 1);
var gambarAcak1 = "/images/dice" + angkaAcak1 + ".png";
var gambarAcak2 = "/images/dice" + angkaAcak2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", gambarAcak1);
document.querySelectorAll("img")[1].setAttribute("src", gambarAcak2);

if (angkaAcak1 > angkaAcak2) {
    document.querySelector("h1").innerHTML = "## Player1 Menang!";
} else if (angkaAcak2 > angkaAcak1) {
    document.querySelector("h1").innerHTML = "Player2 Menang! ##";
} else {
    document.querySelector("h1").innerHTML = "## Draw! ##";
}