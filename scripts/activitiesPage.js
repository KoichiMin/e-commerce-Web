"use strict"


const selectTag = document.getElementById("activitiesSelect");

// let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];
window.onload = function(){
    // console.log(categories)
    for(let activity of categories){
        // console.log(activity)
        let theOption = document.createElement("option");
        theOption.textContent = activity
        theOption.value = activity
        selectTag.appendChild(theOption)
    }

    // activate function when user clicks show info button
    const selectForm = document.getElementById("selectForm")
    selectForm.addEventListener("submit", function(event){
        event.preventDefault();
        findActivityObjectsFromCategory();
    } )
}


const arrayOfActivityObjects = [];
function findActivityObjectsFromCategory(){
    const selectedOption = selectTag.options[selectTag.selectedIndex];
    const selectedOptionText = selectedOption.text;
    const selectedOptionValue = selectedOption.value;
    const teamInfo = document.getElementById("activityInfo");

    if(selectedOptionValue != "Select one"){

        const textInfo = "";
        teamInfo.textContent = textInfo;

        for(let activityObject of activities){
            if(activityObject.category == selectedOptionValue){
                arrayOfActivityObjects.push(activityObject);
                console.log(activityObject);
            }
        }

        displayTable(arrayOfActivityObjects);

    } else{
        const textInfo = "Your activities info will be displayed here."
        teamInfo.textContent = textInfo;
    }
    return false
}


// create a table with the array of objects from activities
function displayTable(activityObjects) {
    const table = document.getElementById("activityTable");

    table.innerHTML = "";


    // Create the table header
    const tableHeader = document.createElement("thead")
    const headerRow = document.createElement("tr");
    const headerCells = [ "Name", "Description", "Location", "Price"];
    
    // loop through headerCells and create a th tag
    for (let singleHeaderCell of headerCells) {
    const headerText = singleHeaderCell;
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
    }

    tableHeader.appendChild(headerRow)


    // Create the table body
    const tableBody = document.createElement("tbody");
    

    // loop through all the specific categories Objects from activities array
    for (let activityObject of activityObjects) {
    const row = document.createElement("tr")
    const cellContent = [ activityObject.name, activityObject.description, activityObject.location, activityObject.price.toFixed(2)];
    
    
    for (let cellText of cellContent) {
        const cell = document.createElement("td")
        cell.textContent = cellText;

        row.appendChild(cell)
    }

    // add button if cost of event is higher than 0$
    if(activityObject.price > 0.00){
        const button = document.createElement("button");
        button.textContent = "select"; // Button text
        button.classList.add("btn", "btn-primary");
    
        // Add an event handler to the button
        button.addEventListener("click", function() {
            alert("Button Clicked!");
        });
        row.appendChild(button)
    }

    tableBody.appendChild(row);
    }
    table.appendChild(tableHeader)
    table.appendChild(tableBody)
}

// function display