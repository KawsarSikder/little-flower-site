function showNum() {
    let randomNumber = Math.floor(Math.random() * 101)
    document.getElementById("myPopup").innerHTML=randomNumber;
}
showNum()

  async function getRecNo() {
    const data=await getData();
    document.getElementById("recblogs").innerHTML=data.record[0];
    document.getElementById("recarts").innerHTML=data.record[1];
    document.getElementById("recminigames").innerHTML=data.record[2];
    document.getElementById("recSp").innerHTML=data.record[3];
  }
  async function getData(){
        const res=await fetch('content.json');
        const data=res.json();
        return data;
      }
