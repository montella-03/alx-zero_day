//document.getElementById("count").innerText=10;
let countEl = document.getElementById("count");
let saved = document.getElementById("saved");
let errrorPara = document.getElementById("error");
let count = 0;
saved.style='margin-left:55px;color:red;font-family:mv Boli'
function increament() {
    count += 1;
    countEl.innerText = count;
    
    
}
function decrement() {
    if (count > 0) {
          count -= 1;
    countEl.innerText = count;
    }
    else {
        errrorPara.style.color = "red";
        errrorPara.innerText = "Error";
    }
      
    
}
function saveData() {
    let countStr = count + "- ";
    saved.innerText += countStr;
    countEl.innerText = 0;
    count = 0;
    errrorPara.innerText = "";
    
   

    
}
 
let text = document.getElementById("word");
let people = "subway";
let person = "Tally";
text.innerText=people +" "+    person