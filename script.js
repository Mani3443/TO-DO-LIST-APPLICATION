const textbox = document.getElementById("textBox");
const listofitems = document.getElementById("listOfItems");
//THE BELOW FUNCTION ADD IS USED TO CHECK WHETHER THE INPUT FIELD CONTAINS A TASK OR NOT.
//IF NOT RETURN ALERT MESSAGE TO THE CLIENT
function add() {
    if (textbox.value == '') {
        alert('NO TASK HAS BEEN GIVEN!');
         //THESE ELSE CONDITION IS USED TO CREATE A NEW ELEMENT AND ADD VALUE ENTERED TO IT AND ADD TO THE "LISTOFITEMS" CONTAINER.
    } else {
        let li = document.createElement("li");
        li.innerHTML = textbox.value;
        listofitems.appendChild(li);
        let del = document.createElement("del");
        del.innerHTML = "🚮";
        li.appendChild(del);
    }
     //THE BELOW STATEMENT IS USED TO CLEAR THE INPUT FIELD ONCE THE TASK IS ADDED
    textbox.value = "";
    saveTask();
}
listofitems.addEventListener("click", function(m) {
    //these ifstatement is used for the marking  and unmarking of the task added in to the listof items
    if (m.target.tagName == "LI") {
        m.target.classList.toggle("checked");
        saveTask();
    } //these else if statement is used for the deletiing of the task 
     else if (m.target.tagName == 'DEL') {
        m.target.parentElement.remove();
        saveTask();
    }
}, false);
//the below function is used for saving the data given in the forms
function saveTask() {
     //these data can be accessed through the TaskStored file can be accessed through getitem data
    localStorage.setItem("Tasks", listofitems.innerHTML);
}
//these function is used for the dispplaying of the data by accessing the stored local file by the name TaskStored
function displayTask() {
    listofitems.innerHTML = localStorage.getItem("Tasks");
}
//displaying the tasks by  calling the function
displayTask();