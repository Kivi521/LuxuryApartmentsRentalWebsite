/** Instantiate date */

var date = new Date();

/** set firs day and last day which allowed choose for customer */

var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);//1-Nov-2021

var lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 31);//31-Jan-2022


while (firstDay <= lastDay) {
    var opt = document.createElement("option");/** this is an optional element: <option></option> */

    var text = document.createTextNode(firstDay);/** 1-Nov-2021 */

    opt.appendChild(text); /** <option>1-Nov-2021</option> */ 

    document.getElementById("myDropdown").appendChild(opt);/** <select><option>1-Nov-2021</option></select> */

    firstDay.setDate(firstDay.getDate() + 1)/** set first day */
}

/** Class representing date and price.
 * @constructor
 */

class DatePrice {
    constructor(d) { /** d - string date */

        this.d = new Date(d);/**  this.d - date object */

        this.p = this.getPrice();/**  $270 or &250 */
        

    }
   /** getPrice method is for distinguishing different price for different dates */

    getPrice() {
        let renewalDate = new Date(2021, 11, 18);
        console.log(this.d);
        console.log(renewalDate)
        console.log(this.d <= renewalDate);
        if (this.d <= renewalDate) { /**  1-Nov-2o21 --- 18-Dec-2021 fee is: $270 per night */

            return 270;
        }
        else { /**  18-Dec-2021 --- 31-Jan-2022 fee is $250 per night */

            return 250;
        }
        
    }
}
/** Array selectedDates to store selected dates */

let selectedDates = new Array();

/** @founction addDate
 * is for adding selected by the customer to selectedDates array */

function addDate() {

/** get the date selected from myDropdown selecet element */

    let selectedD = document.getElementById("myDropdown").value;
/** add the selected date as a DatePrice obj to the array */

    selectedDates.push(new DatePrice(selectedD));

    selectedDates.sort(compare);


}

/**
 * Function to sort the date by order
 * Function compare
 * @param {string} a - date a;
 * @param {string} b - date b
 * @returns comparison
 */

function compare(a, b) {
    const dateA = a.d;
    const dateB = b.d;

    let comparison = 0;
    if (dateA > dateB) {
        comparison = 1;
    } else if (dateA < dateB) {
        comparison = -1;
    }
    return comparison;
}


/** @ function displayDates,
 * for achieveing this function: when press display button, the montor will show total price */

function displayDates() {
    let total = 0;
    document.getElementById("myDropdown2").innerHTML = "";
    for (var i = 0; i < selectedDates.length; i++) {
        var opt = document.createElement("option");
        var text = document.createTextNode(selectedDates[i].d);
        opt.appendChild(text);
        document.getElementById("myDropdown2").appendChild(opt);
        total += selectedDates[i].p;
    }
    document.getElementById("demo").innerHTML = total;
    //console.log(selectedDates);
}


/**
 * @Function binarySearch
 * to do the binary search of selected dates and delete the date
 * Function binarySearch
 * @param {string} date - The date to be deleted
 * @param {list} list - the list of selected dates
 * @return position
 */

function binarySearch(dateStr, list) {
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle;
    let selectedDate = new Date(dateStr);
    console.log(typeof (dateStr));
    console.log(selectedDate.getTime());
    console.log(list[0].d.getTime());
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        console.log(middle);
        console.log(list[middle]);
        console.log(list[middle].d.getTime() === selectedDate.getTime());
        if (list[middle].d.getTime() === selectedDate.getTime()) { 
            found = true;
            position = middle;
        }
        else if (list[middle].d.getTime() > selectedDate.getTime()) {
            last = middle - 1;
        }
        else {
            first = middle + 1;
        }
    }
    return position;
}


/**@function removeDate
 * for achieveing this function by binarySearch function: when press remove button, the selected date will be removed
 * */

function removeDate() {

    //get the position/index of selected item in myDropdown2

    //let index = document.getElementById("myDropdown2").selectedIndex;

    //update the total price

    let select  = document.getElementById("myDropdown2");
    
    var dateValue = select.options[select.selectedIndex].value;
    
    let posFound = binarySearch(dateValue, selectedDates);
    
    console.log(posFound);
    let currTotal = document.getElementById("demo").innerHTML;
    currTotal -= selectedDates[posFound].p;
    document.getElementById("demo").innerHTML = currTotal;

/** remove the date from array */

    selectedDates.splice(posFound, 1);

/** remove the date from myDropdown2 */

    select.remove(posFound);

}