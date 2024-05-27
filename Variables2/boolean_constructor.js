const boolFunction = Boolean();
if (boolFunction == false) console.log("1. Boolean function is false");


const  boolInstance = new Boolean();
if (boolInstance.valueOf() == false) console.log("2. Boolean instance is false");

if (boolInstance) console.log("3. Boolean instance is true");

console.log("4. ", boolFunction);
console.log("5. ", boolInstance);
console.log("6. ", typeof boolFunction, typeof boolInstance);
console.log("7. ", boolFunction.valueOf(), boolInstance.valueOf());


function registerUser(user) {
    if (!Boolean(user.fullname) || !Boolean(user.email)){
        console.error("Name or email cannot be empty1");
    } else {
        if (Boolean(user.interests)) console.log(" Si tiene interests");
    }
}

registerUser({
    fullname: "Marco",
    interests: ["cooking", "singing"],
    email: "marco@sanchez.com",
    birthday: null,
    subscribe: true, 
    photo: undefined
})


!!'1'
!![1]
!!1
!!{}
!![]

!!''
!!0
!!null
!!undefined 
!!NaN



// Loose equality
// converting one or both value to a common type
1 == '1'

// strict equality
//without converting the type of either value
1 === '1'

'1' == 1   // '1' is converted to a number 
1 == ['1'] // ['1'] is converted to its primitive value 
1 == [1]   // [1] is converted to its primitive value 
1 == 1

[1] == [1] // false 
{} == {}  // false 
0 == '0' 
0 == ''
'' == '0'


// pagina 13
