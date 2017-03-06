/**
 * Created by Vadim1 on 16.02.2017.
 */

//Main function
window.onload = function StartFunction() {
    //styles for body
    document.body.style.marginLeft = "auto"; //set auto left margin for body
    document.body.style.marginRight = "auto"; //set auto right margin for body
    var body = document.getElementsByTagName("body")[0]; //declaring and assigning body object
    body.style.fontFamily = "'Segoe UI',Arial,sans-serif"; //fonts for body
    body.style.marginBottom = "-25px"; //setting bottom margin for body


    //header image
    var header = document.getElementById("header_image"); //declaring and assigning header div object
    header.setAttribute("class", "col-sm-12 col-xs-12 col-sm-12 col-lg-12");
    header.style.padding = "0";
    var img = new Image(); //creating new image and assigning it
    img.setAttribute("class", "img-responsive");
    img.src = 'images/head.jpg'; //assigning image attribute source
    header.appendChild(img);

    img.style.width = "100%";
    img.style.marginTop = "-9px";


    //main
    var main = document.getElementById("main");
    main.style.maxWidth = "960px"; //setting width for main div
    main.setAttribute("class", "col-sm-12 col-xs-12 col-sm-12 col-lg-12");
    main.style.padding = "0";
    main.style.marginLeft = "auto";
    main.style.marginRight = "auto";
    main.style.backgroundColor = "white"; //setting background color for main div


    //title
    var title = document.createElement("h2");
    main.appendChild(title);
    title.innerHTML = "Car table";
    title.style.textAlign = "center";
    title.style.fontWeight = "normal";


    //hr
    var hr = document.createElement("HR");
    main.appendChild(hr);
    hr.style.marginTop = "-5px";
    hr.style.marginBottom = "40px";
    hr.style.marginLeft = "auto";
    hr.style.marginRight = "auto";

    //table creation
    var tableDiv = document.createElement("div");
    main.appendChild(tableDiv);
    tableDiv.setAttribute("id", "tableDiv");
    tableDiv.style.float = "right"; //setting float of table div to right
    tableDiv.style.paddingLeft = "1%";
    tableDiv.style.paddingRight = "1%";
    tableDiv.style.width = "47%";
    if (window.innerWidth < 768) {
        tableDiv.style.width = "98%";
        tableDiv.style.float = "none";
    }

    //function for creating table
    CreateTable(tableDiv);


    // function for div with form
    ControlDiv(main);


    //footer
    Footer(body);


    main.style.height = String(document.getElementById("formDiv").offsetHeight + 19.92 + 80) + "px"; //setting height for main div as sum of height of div with id FormDiv and other values

    if (window.innerWidth < 768)
        main.style.height = String(formDiv.offsetHeight + tableDiv.offsetHeight + 100) + "px";

};

//function for creating the table
function CreateTable(divTable) {
    //table
    var table = document.createElement('table'); //creating table element
    divTable.appendChild(table);

    //caption
    var caption = document.createElement("caption");
    caption.innerHTML = "Car Models 2017";
    table.appendChild(caption);

    //tbody
    var body = document.createElement("tbody");
    table.appendChild(body);
    table.style.border = "2px solid #29421E";

    //thead
    var header = table.createTHead();

    //tfoot
    var footer = table.createTFoot();

    //inserting row and cells in thead
    var headRow = header.insertRow(0);
    var cell1 = headRow.insertCell(0);
    var cell2 = headRow.insertCell(1);
    var cell3 = headRow.insertCell(2);
    cell1.innerHTML = "<h4 style='margin-bottom:5px; margin-top:5px;'>Brand</h4>";
    cell2.innerHTML = "<h4 style='margin-bottom:5px; margin-top:5px;'>Model</h4>";
    cell3.innerHTML = "<h4 style='margin-bottom:5px; margin-top:5px;'>Price</h4>";

    //inserting row and cells in tbody
    var bodyRow1 = body.insertRow(0);
    var cel21 = bodyRow1.insertCell(0);
    var cel22 = bodyRow1.insertCell(1);
    var cel23 = bodyRow1.insertCell(2);
    cel21.innerHTML = "<h4 class='tbody' style='margin-bottom:5px; margin-top:5px;'>Honda</h4>";
    cel22.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px;'>Civic</h4>";
    cel23.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px;'>$17,460</h4>";

    var bodyRow2 = body.insertRow(1);
    var cel31 = bodyRow2.insertCell(0);
    var cel32 = bodyRow2.insertCell(1);
    var cel33 = bodyRow2.insertCell(2);
    cel31.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px;'>Ford</h4>";
    cel32.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px;'>Focus</h4>";
    cel33.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px;'>$25,540</h4>";

    //inserting row and cells in tfoot
    var footerRow = footer.insertRow(0);
    var cel01 = footerRow.insertCell(0);
    cel01.colSpan = 3; //joining tfoot row
    cel01.setAttribute("id", "footerMessage");
    cel01.innerHTML = "<h4 style='margin-bottom:4px; margin-top:3px;'>Car financing service is available</h4>";

    //array for all td elements
    var td = document.getElementsByTagName("td");

    //styles for tHead and tBody rows
    var i = 0;
    while (td[i] != null) {
        td[i].style.width = "15%";
        td[i].style.textAlign = "center";
        if (td[i].id != "footerMessage")
            td[i].style.borderBottom = "1px solid #29421E";
        i++;
    }

    //styles for tFooter rows
    cel01.style.width = "48%";
    cel01.style.textAlign = "center";

    var cellText = document.getElementsByTagName("h4");
    i = 0;
    while (td[i] != null) {
        cellText[i].style.fontWeight = "normal";
        i++;
    }
}

//function for creating the footer of page
function Footer(body) {
    var footer = document.createElement("div");
    footer.style.width = "100%"; //setting bg width for footer div
    footer.style.backgroundColor = "#0e1a0d"; //setting bg color for footer div
    body.appendChild(footer);
    var textFooter = document.createElement("h6");
    footer.appendChild(textFooter);
    textFooter.innerHTML = "&copy; Copyright Centennial College | COMP 125 <br>Harkusha Vadym | 300909484";
    //setting font styles for footer text
    textFooter.style.color = "white";
    textFooter.style.padding = "8px 3px 10px 12px";
    textFooter.style.lineHeight = 1.4;
    textFooter.style.fontWeight = "normal";
    textFooter.style.fontSize = "0.67em";
}

//function for div with the form
function ControlDiv(main) {
    //div for form with control buttons
    var controlDiv = document.createElement("div");
    main.appendChild(controlDiv);
    controlDiv.setAttribute("id", "formDiv");
    controlDiv.style.paddingLeft = "2%";
    controlDiv.style.paddingRight = "1%";
    controlDiv.style.width = "47%";
    if (window.innerWidth < 768) {
        controlDiv.style.width = "97%";
    }


    //title
    var controlTitle = document.createElement("h3");
    controlDiv.appendChild(controlTitle);
    controlTitle.style.marginBottom = "0px";
    controlTitle.innerHTML = "Control buttons";
    controlTitle.style.fontWeight = "normal";
    controlTitle.style.textAlign = "center";

    //form
    var form = document.createElement("form");
    controlDiv.appendChild(form);
    form.setAttribute("id", "addForm");
    form.style.height = "170px";
    form.setAttribute("action", "");
    form.setAttribute("method", "post");

    //add row text
    var addText = document.createElement("h4");
    form.appendChild(addText);
    addText.innerHTML = "Add row:";
    addText.style.width = "100%";
    addText.style.fontWeight = "normal";
    addText.style.textAlign = "left";
    addText.style.float = "left";


    //fields for adding row
    //brand
    var brandField = document.createElement("input");
    form.appendChild(brandField);
    brandField.placeholder = "Enter brand";
    brandField.type = "text";
    brandField.required = true;

    //model
    var modelField = document.createElement("input");
    form.appendChild(modelField);
    modelField.placeholder = "Enter model";
    modelField.type = "text";
    modelField.required = true;

    //price
    var priceField = document.createElement("input");
    form.appendChild(priceField);
    priceField.placeholder = "Enter price";
    priceField.required = true;
    priceField.type = "text";
    priceField.pattern = "[0-9]{7}";

    //array of fields for adding row
    var addFields = document.getElementsByTagName("input");

    //loop for setting styles to inputs
    i = 0;
    while (addFields[i] != null) {
        if (window.innerWidth == 768)
            addFields[i].style.width = "22.5%";
        else if (window.innerWidth < 768 && window.innerWidth > 425)
            addFields[i].style.width = "21%";
        else if (window.innerWidth <= 425)
            addFields[i].style.width = String((controlDiv.offsetWidth * 0.93) / 3 - 34) + "px";
        else
            addFields[i].style.width = "24.4%";


        if (i != 2) {
            addFields[i].style.marginRight = "2%";
        }
        addFields[i].style.float = "left";

        addFields[i].style.height = "1.3em";
        addFields[i].style.padding = "8px 15px";
        i++;
    }


    //add button
    var addButton = document.createElement("input");
    addButton.setAttribute("type", "button");
    form.appendChild(addButton);
    addButton.addEventListener("click", FieldsValidation); //adding event to button
    addButton.value = " Add ";
    addButton.style.padding = "15px 46%";
    addButton.style.marginTop = "20px";
    addButton.style.border = "2px solid #29421E";
    addButton.style.backgroundColor = "white";
    addButton.style.cursor = "pointer";



    //HR
    var hr = document.createElement("HR");
    controlDiv.appendChild(hr);
    hr.style.marginTop = "20px";


    //delete row text
    var deleteText = document.createElement("h4");
    controlDiv.appendChild(deleteText);
    deleteText.innerHTML = "Delete row:";
    deleteText.style.fontWeight = "normal";
    deleteText.style.textAlign = "left";

    //delete row text input
    var deleteField = document.createElement("input");
    controlDiv.appendChild(deleteField);
    deleteField.type = "number";
    deleteField.style.float = "left";
    deleteField.style.height = "1.3em";
    deleteField.style.padding = "8px 13px";

    //exception field
    var exceptionDiv = document.createElement("div");
    controlDiv.appendChild(exceptionDiv);
    exceptionDiv.style.float = "left";
    exceptionDiv.style.height = "37px";
    exceptionDiv.style.width = "230px";
    exceptionDiv.style.marginLeft = "15px";
    //exception message
    var exceptionMessage = document.createElement("h4");
    exceptionDiv.appendChild(exceptionMessage);
    exceptionMessage.setAttribute("id", "exceptionMessage");
    exceptionMessage.style.margin = "0px";
    exceptionMessage.style.fontWeight = "normal";
    exceptionMessage.style.textAlign = "left";


    //delete button
    var deleteButton = document.createElement("button");
    controlDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", DeleteRow);
    deleteButton.innerHTML = "<h4 style='font-weight:normal;font-size: 16px; margin:0px;'>Delete</h4>";
    deleteButton.style.padding = "15px 44.2%";
    deleteButton.style.marginTop = "20px";
    deleteButton.style.border = "2px solid #29421E";
    deleteButton.style.backgroundColor = "white";
    deleteButton.style.cursor = "pointer";

    if (window.innerWidth <= 768) {
        deleteField.style.width = "120px";
        exceptionDiv.style.width = controlDiv.offsetWidth - deleteField.offsetWidth - 30 + "px";
        addButton.style.marginLeft = "-1%";
        deleteButton.style.marginLeft = "-1%";

        addButton.style.width = document.getElementsByTagName("table")[0].offsetWidth + "px";
        deleteButton.style.width = addButton.offsetWidth + "px";


    }

}

//function for deleting the row
function DeleteRow() {
    var row = document.getElementsByTagName("input")[4]; //delete text input
    var numRow = parseInt(row.value);

    //try catch for validation | user cannot delete first and last row | user can delete only existing row
    try {
        if (numRow <= 0 || document.getElementsByTagName("tr")[numRow] == null)
            throw "You can't delete non-existent row";
        if (document.getElementsByTagName("tr")[numRow + 1] == null)
            throw "You can't delete this row";

        document.getElementsByTagName("table")[0].deleteRow(numRow);
        alert("Row number " + numRow + " has been deleted")
    } catch (error) {
        document.getElementById("exceptionMessage").innerHTML = error; //it displays message if validation is failed
    }

}

//function for adding the row
function AddRow(value1, value2, value3) {
    var addForm = document.getElementById("addForm");

    //variables for rows and tbody element
    var tbody = document.getElementsByTagName("tbody")[0];
    var rows = document.getElementsByClassName("tbody");

    //counting the number of rows
    var i = 0;
    while (rows[i] != null) {
        i++;
    }
    i = i / 3; //dividing because we have 3 cells in a row

    //adding new row and cells
    var bodyRow = tbody.insertRow(i);
    var cell1 = bodyRow.insertCell(0);
    var cell2 = bodyRow.insertCell(1);
    var cell3 = bodyRow.insertCell(2);
    cell1.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px; font-weight: normal;'>" + value1 + "</h4>";
    cell2.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px; font-weight: normal;'>" + value2 + "</h4>";
    cell3.innerHTML = "<h4 class='tbody'  style='margin-bottom:5px; margin-top:5px; font-weight: normal;'>$" + value3 + "</h4>";

    //styles for cells
    //brand
    cell1.style.width = "15%";
    cell1.style.textAlign = "center";
    cell1.style.borderBottom = "1px solid #29421E";

    //model
    cell2.style.width = "15%";
    cell2.style.textAlign = "center";
    cell2.style.borderBottom = "1px solid #29421E";

    //price
    cell3.style.width = "15%";
    cell3.style.textAlign = "center";
    cell3.style.borderBottom = "1px solid #29421E";

    //resets form
    document.getElementById("addForm").reset();

    //variables for body, table div and form div
    var tableDiv = document.getElementById("tableDiv");
    var main = document.getElementById("main");
    var formDiv = document.getElementById("formDiv");

    //makes body bigger if table height exceeds body height
    if (parseInt(tableDiv.offsetHeight) > formDiv.offsetHeight) {
        main.style.height = String(tableDiv.offsetHeight + 32 + 19.92 + 80) + "px";
    } else
        main.style.height = String(formDiv.offsetHeight + 32 + 19.92 + 80) + "px";

}

//validation for adding function
function FieldsValidation() {

    //variables for input values
    var value1 = document.getElementsByTagName("input")[0].value;
    var value2 = document.getElementsByTagName("input")[1].value;
    var value3 = document.getElementsByTagName("input")[2].value;

    //validation | if the inputs are not empty and price input is positive
    if (value1 == "" || value2 == "" || value3 == "") {
        alert("Enter the car info!");
    } else if (value3 <= 0) {
        alert("Price should be a positive number!");
    } else {
        AddRow(value1, value2, value3); //calls function for adding row if validation is not failed
    }
}