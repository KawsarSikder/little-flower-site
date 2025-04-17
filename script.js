function showNum() {
    let randomNumber = Math.floor(Math.random() * 101)
    document.getElementById("myPopup").innerHTML=randomNumber;
}
showNum()