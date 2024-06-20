
//this incomeExpense function has been used in another function with return value.
function incomeExpense(inputdetails) {
    let getId = document.getElementById(inputdetails);
    let convertingValue = parseFloat(getId.value);
    return convertingValue;
}

//code with the arrow function 

// Arrow function for incomeExpense
// const incomeExpense = inputdetails => {
//     let getId = document.getElementById(inputdetails);
//     let convertingValue = parseFloat(getId.value);
//     return convertingValue;
// };

//this appending function has been used in another function without return value.
function appending(getid, expOrBlnc) {
    let parent = document.getElementById(getid);
    let newP = document.createElement('p');
    newP.innerText = expOrBlnc;
    parent.appendChild(newP);
}

// Arrow function for appending
// const appending = (getid, expOrBlnc) => {
//     let parent = document.getElementById(getid);
//     let newP = document.createElement('p');
//     newP.innerText = expOrBlnc;
//     parent.appendChild(newP);
// };

document.getElementById("calcBtn").addEventListener('click', function () {

    let income = incomeExpense("incomeInput"); //we can't set this incomeExpense() function perameter outside of the click function as it would run automatically and would give us NAN value.
    let foodCosting = incomeExpense("food");
    let rentCosting = incomeExpense("rent");
    let clothesCosting = incomeExpense("clothes");

    let totalExpense = foodCosting + rentCosting + clothesCosting; //calculating total cost
    let balanace = income - totalExpense;  //after expense remaining balance

    appending("totalExpenses", totalExpense);
    appending("balance", balanace);
})






