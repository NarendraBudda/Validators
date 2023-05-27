let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
function ValidatingFirstName(firstName) {
    if ((firstName!=="" && typeof(firstName)==='string')) {
        return 'First Name value is string type value';
    }
    else{
        return 'First Name value must be not undefined and First Name value must be  string type value';
    }
}

// Provide solution code here for Validating LastName
function ValidatingLastName(lastName) {
if (typeof(lastName)==='string') {
    return 'Last Name value is string type value';
}
    else{
        return 'Last Name value must be string type value';
    }
}


// Provide solution code here for Validating Age
function ValidatingAge(age) {
    if(age!=null && typeof isNaN(age) && age>=18 && age<=60){
        return `Age value is number type value and lies between 18 and 50`;
    }
    else{
        return `Age value must not be undefined, Age value must be number type and should be  between 18 and 60 `;
    }
    
}


// Provide solution code here for Validating isMarried
function ValidatingIsMarried(isMarried) {
    if(typeof isMarried=='boolean'){
        return `isMarried value is a boolean type value`;
    }
    else{
        return `isMarried value must be boolean type value `;
    }
}

// Provide solution code here for Validating City
function ValidatingCity(city) {
    if (typeof city==='string') {
    return 'city value is string type value';
}
    else{
        return 'city value must be string type value';
    }
    
}


// Provide solution code here for Validating State

function ValidatingState(state) {
    if (typeof state==='string') {
    return 'state value is string type value';
}
    else{
        return 'state value must be string type value';
    }
    
}
 
// Provide solution code here for Validating Postal Code
function ValidatingPostalCode(postalCode) {
    if ((postalCode!=="" && typeof postalCode==='string')) {
        return 'Postal code value is string type value';
    }
    else{
        return 'Postal code value must be not undefined and Postal code value must be  string type value';
    }
}



console.log(ValidatingFirstName(firstName));
console.log(ValidatingLastName(lastName));
console.log(ValidatingAge(age));
console.log(ValidatingIsMarried(isMarried));
console.log(ValidatingCity(city));
console.log(ValidatingState(state));
console.log(ValidatingPostalCode(postalCode));