let data1=1
let data2="1.25"
console.log(data1)
console.log(data2)
console.log(data1,typeof data1)
console.log(data2,typeof data2)

let data3 =data1 +data2
console.log(data3,typeof data3)

let data4 =data1 +parseFloat(data2)  /*parseInt()*/
console.log(data4,typeof data4)      /*toString()*/

//Array
let data =["one", 2, true]
console.log(data[0])
console.log(data[2],typeof data[2])

//Object
let user ={
    name:"soo",
    faculty:"fkekk",
    email:"soo@utem.edu.my",
    phone: {
        office:"123456789",
        mobile:"010943833"
    }
}
//console.log(user.faculty)
console.log(user.phone.mobile)
console.log(user.phone.home)