"use strict"


const selectTagCategories = document.getElementById("categoriesSelect");

window.onload = function(){
    
    for(let activity of categories){
        let theOption = document.createElement("option");
        theOption.textContent = activity
        theOption.value = activity
        selectTagCategories.appendChild(theOption)
    }

    // activate function when user selects option in categories
    const categoriesSelect = document.getElementById("categoriesSelect")
    categoriesSelect.onchange = findActivityObjectsFromCategory;

    // activate function when user selects option in activities
    const activitiesSelect = document.getElementById("activitiesSelect")
    activitiesSelect.onchange = displayActivityInfo;

    const checkoutBtn = document.getElementById("checkoutBtn");
    checkoutBtn.onclick = function(event){
        event.preventDefault();
        checkoutUser();
    }
}



// find the all the activities once user chose category
function findActivityObjectsFromCategory(){
    // gets the user's selected category
    const selectedOption = selectTagCategories.options[selectTagCategories.selectedIndex];
    //  value of the option tag
    const selectedOptionValue = selectedOption.value;
    const infoMessage = document.getElementById("infoMessage");

    // activate function if selected option tag isnt Select one
    if(selectedOptionValue != "Select one"){
        displayActivitiesDropdown(selectedOptionValue)
    } else{
        const textInfo = "Your activities info will be displayed here."
        infoMessage.textContent = textInfo;
        const displayActivitiesDropdown = document.getElementById("displayActivities")
        displayActivitiesDropdown.style.display = "none";
    }
    return false
}


const selectTagActivities = document.getElementById("activitiesSelect");


// display second dropdown with list of activities 
function displayActivitiesDropdown(selectedOptionValue){
    const displayActivitiesDropdown = document.getElementById("displayActivities")
    displayActivitiesDropdown.style.display = "block";
    selectTagActivities.innerHTML = "";
    addOptionTag("Select One")

    for(let activityObject of activities){
        if(activityObject.category == selectedOptionValue){
            addOptionTag(activityObject.name)
        }
    }
}

// creates option tag then appends it to activities select tag
function addOptionTag(info){
    let theOption = document.createElement("option");
    theOption.textContent = info
    theOption.value = info
    selectTagActivities.appendChild(theOption)
}

// display Activity container once user selects an activity
function displayActivityInfo(){
    // gets the user's selected category
    const selectedOptionValue = selectTagActivities.options[selectTagActivities.selectedIndex].value;

    const infoMessage = document.getElementById("infoMessage");
    infoMessage.style.display = "none";

    for(let activityObject of activities){
        if(activityObject.name == selectedOptionValue){
            insertInfoToContainer(activityObject)
            break
        }
    
    }

}

// insert all activity info to the html and display payment if cost is more than 0
function insertInfoToContainer(activityObject){
    const activityContainer = document.getElementById("activityContainer");
    activityContainer.style.display = "block";
    const activityName = document.getElementById("activityName");
    activityName.textContent = activityObject.name
    const activityId = document.getElementById("activityId");
    activityId.textContent = activityObject.id
    const activityDescription = document.getElementById("activityDescription");
    activityDescription.textContent = activityObject.description    
    const activityLocation = document.getElementById("activityLocation");
    activityLocation.textContent = activityObject.location
    const activityPrice = document.getElementById("activityPrice");
    activityPrice.textContent =  activityObject.price

    if(activityObject.price > 0){
        const displayPayment = document.getElementById("displayPayment");
        displayPayment.style.display = "block";
    }


}


// display confirmation message
function checkoutUser(){
    const ticketQuantity = Number(document.getElementById("ticketQuantity").value)
    const email = document.getElementById("email").value
    const activityName = document.getElementById("activityName").textContent
    const displayCheckout = document.getElementById("displayCheckout")
    const activityPrice = document.getElementById("activityPrice").textContent

    const checkoutPrice = ticketQuantity * Number(activityPrice)

    displayCheckout.textContent = `Your credit card has been charged $${checkoutPrice} for ${ticketQuantity} to ${activityName}. A confirmation email has been sent to ${email}."`


}





// // create a table with the array of objects from activities
// function displayTable(activityObjects) {
//     const table = document.getElementById("activityTable");

//     table.innerHTML = "";


//     // Create the table header
//     const tableHeader = document.createElement("thead")
//     const headerRow = document.createElement("tr");
//     const headerCells = [ "Name", "Description", "Location", "Price"];
    
//     // loop through headerCells and create a th tag
//     for (let singleHeaderCell of headerCells) {
//     const headerText = singleHeaderCell;
//     const headerCell = document.createElement("th");
//     headerCell.textContent = headerText;
//     headerRow.appendChild(headerCell);
//     }

//     tableHeader.appendChild(headerRow)


//     // Create the table body
//     const tableBody = document.createElement("tbody");
    

//     // loop through all the specific categories Objects from activities array
//     for (let activityObject of activityObjects) {
//     const row = document.createElement("tr")
//     const cellContent = [ activityObject.name, activityObject.description, activityObject.location, activityObject.price.toFixed(2)];
    
    
//     for (let cellText of cellContent) {
//         const cell = document.createElement("td")
//         cell.textContent = cellText;

//         row.appendChild(cell)
//     }

//     // add button if cost of event is higher than 0$
//     if(activityObject.price > 0.00){
//         const button = document.createElement("button");
//         button.textContent = "select"; // Button text
//         button.classList.add("btn", "btn-primary");
    
//         // Add an event handler to the button
//         button.addEventListener("click", function() {
//             alert("Button Clicked!");
//         });
//         row.appendChild(button)
//     }

//     tableBody.appendChild(row);
//     }
//     table.appendChild(tableHeader)
//     table.appendChild(tableBody)
// }

// // function display