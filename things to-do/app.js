
/*
const more = document.querySelector("#more");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const btnDelete = document.querySelector("#btnDelete");//bunu bitir delete ve if  null ise deger girin yazdir

btn.addEventListener('click', (e) => {
    let li = document.createElement("li");
    li.textContent = more.value;

    list.append(li);
})


*/

const more = document.querySelector("#more");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const btnDelete = document.querySelector("#btnDelete");
//let deleteOneItem = document.querySelectorAll(".fa-times");

//butona dinleyici atiyoruz

btn.addEventListener("click", addItems);
btnDelete.addEventListener("click", deleteItems);

//eger input null ise uyari versin


function addItems () {
if(more.value == ""){
  alert("please add something");
}else{
  let li = document.createElement("li");
  li.innerText = more.value;
  list.append(li);
  more.value = ""
li.addEventListener("click", (e) => {
  li.style.textDecoration = "line-through"
  li.style.textDecorationColor = "red"
  
});
li.addEventListener("dblclick", (e) => {
  list.removeChild(li);
})
}
}



function deleteItems() {
  let select = confirm("All will be deleting");
  if(select == true){
    let deletes = document.querySelectorAll("li");
    for(let i = 0; i < deletes.length; i++){
      deletes[i].remove();
    }
  }
}


