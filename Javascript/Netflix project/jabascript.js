let a = ["Hii", "hello", "test", "data", `Hey`];

alert(typeof (a));

let b = [1, 2, 4, 5, 6, 7, 8];
document.write(typeof (b));


var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

alert(city[0]);
document.write(city[1]);


console.log(city.push("Kolkata"));
console.log(city);

document.write(city.push("Mumbai"));

//we use .push to add the element in the last position of given lists//

//while .pop is used to remove the last element from the given lists array//

var citi = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

console.log(citi.pop());
console.log(citi);

var cit = ['Delhi', 'Mumbai', 'Helsinki', 'London'];

console.log(cit.pop());
console.log(cit);

document.write(cit);




// .unshift allow us to add an element in the very beginning of given list array//

var cit = ['Delhi', 'Mumbai', 'Helsinki', 'London'];

console.log(cit.unshift("Hello"));

console.log(cit);

var emogy = [1, 2, 3, 4];

console.log(emogy.unshift(0));
console.log(emogy);

var cit = ['Delhi', 'Mumbai', 'Helsinki', 'London'];

console.log(cit.slice(2)); //start index from the given position
console.log(cit);

var citi = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

console.log(citi.slice(1, 4));
console.log(citi);//"Mumbai", "Helsinki", "London",,

console.log(citi.slice(2, 6)); //Helsinki", "London", "Amsterdam.

let cake = [1, 2, 4, 6, 7, 8, 9, 5, 7, 8];
if (cake - 6) {
    if (10 - 6) {
        console.log("number of cakes will be 4");
    }
    else {
        console.log(cake.slice(1, 5));
    }
}
console.log(cake);

var piki = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];




//.splice only consider the required elements remaining other elements are removed . for instant it removed the adjacent elements from both side

var piki = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Amsterdamu", "Amerdam"];

console.log(piki.splice(0, 2));//'"Delhi", "Mumbai"

console.log(piki.splice(2, 4)); //Amsterdam


console.log(piki.splice(2, 1));
console.log(piki.splice(3));
console.log(piki.splice(1,4));//['London']
console.log(piki.splice(0));//"Helsinki",

console.log(piki.slice(1, 4));

console.log(piki.splice(2,1));



var biki = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Amsterdamu", "Amerdam"];


console.log(biki.slice(2,3));//Helsinki

console.log(biki.splice(2,3));// (3) ['Helsinki', 'London', 'Amsterdam']

console.log(biki.slice(0, 4)); //"Delhi", "Mumbai", "Helsinki", "London" // slice count the number frm the required element to the one element before the last required element.

console.log(biki.splice(0,4));//  Delhi", "Mumbai", "Helsinki", "London", // splice takes the first index as per given value and then start from the same element as counting 1 to the required element but the last element is not included.



var niki = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Amsterdamu", "Amerdam"];

console.log(niki.slice(2,5)); /* (3) ['Helsinki', 'London', 'Amsterdam']*/

console.log(niki.splice(2,5)); /* "Helsinki", "London", "Amsterdam", "Amsterdamu", "Amerdam"];*/









