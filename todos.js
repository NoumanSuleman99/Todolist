const inputBox = document.getElementById("input-box");
// const for getting element from id in input text

const listContainer = document.getElementById("list-container");
// const for getting element from id in list container

function addTask(){
    if (inputBox.value === ''){
        alert("Kuch likh to ley bhai!!!");
    }
    // if inputBox value is empty this statement will show an alert pop up in the browser //

    else{
        let li = document.createElement("li");
        // it is creating an html element with the tag name li document.creatElement("li") and storing in the variable name li //

        li.innerHTML = inputBox.value;
        //whatever we add in the input box that will be add in the li.innerhtml, innerhtml means text in the inputbox //

        listContainer.appendChild(li);
        //means it will display the li element under tha list container //

        let span = document.createElement("span");
        // it is creating an html element span document.creatElement("span") and storing in the variable name span //

        span.innerHTML = "\u00d7";
        //it is assigning the value to the span variable //

        li.appendChild(span);
        //it will show the variable span with the li //
    }

    inputBox.value = "";
    // clears the input field after the text has been added *it has to be outside of the if else condition so that when
    // functions completley it will clear the input field //

    storeData();
    // save the data whenever a list item is being add //

}

// event listener on click perform on the li or span // 
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // if the click is on the li element it will toggle checked and unchecked //
        storeData();
        // save the data whenever the item is being checked or unchecked //
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // else if the the click is on the span tag it will remove the parent element that is li element so task will be deleted //
        storeData();
        // save the data whenever an item will be removed using the span tag //
    }   
}, false);


function storeData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // localStorage.setItem will save data of the container which you provided //
}

function resumeData(){
    listContainer.innerHTML = localStorage.getItem("data");
    // it will show all the content listed under the listcontainer in the browser with the name of "data" //
}

resumeData();