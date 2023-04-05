let myForm=document.querySelector("#addForm");
let submitBtn=document.querySelector("#submit");
let inputValue=document.querySelector("#item");
let ulItem=document.querySelector("#items");

//ulItem.addEventListener('click',removeItem)
myForm.addEventListener('submit',submitFrom);
function submitFrom(e)
{
    e.preventDefault();
   // console.log('babu');
   let li=document.createElement("li");
   let liText=document.createTextNode(inputValue.value);
   li.className="list-group-item";
   li.appendChild(liText);
   let deleteBtn=document.createElement("button");
   let deleteBtnText=document.createTextNode("X");
   deleteBtn.appendChild(deleteBtnText);
   deleteBtn.className="btn btn-danger btn-sm float-right delete";
   li.appendChild(deleteBtn);
   deleteBtn.onclick=()=>{
    confirm('are you sure')
    ulItem.removeChild(li);
   }
let editBtn=document.createElement("button");
let editBtnText=document.createTextNode("Edit");
editBtn.appendChild(editBtnText);
li.appendChild(editBtn);
editBtn.className="btn btn-success btn-sm float-right edit";
   ulItem.appendChild(li);
   
  // console.log(li)
}
// function removeItem(e){
//    // console.log("ggg")
//    if(e.target.classList.contains("delete"))
//    {
//     //console.log("a")
//     if(confirm('are you sure'))
//     {
//         let liParent=e.target.parentElement;
//         ulItem.removeChild(liParent)
//     }
//    }
// }