//ex 1

let newArr = [1,2,3,4,5];
console.log("the numbers are"+" : ");
console.log(newArr);
//ex 2 and 3

let intro = {
    name : "farshad",
    surname : "bishomar",
    emailAddress : "farshadbishomar@gmail.com",
    age : 20,
    drivingLicense : false,
}
let mySelf = intro; 
console.log(`my intros are : `);
console.log(mySelf);

//ex 4

delete intro.age;
console.log(`the new one :`);
console.log(intro);

//ex5

intro2 ={
    name : "faranak",
    surname : "bishomar",
    emailAddress : "faranbish@gmail.com",
    age : 20,
    drivingLicense : false,
}
console.log(`lets see if they are the same or not`);
console.log(intro===intro2);

//ex6

let totalShoppingCart = 51;
let shoppingTax = 10;
if(totalShoppingCart>50){
    console.log(`your total is :${totalShoppingCart}`)
}else{
    console.log(`your total is : ${totalShoppingCart + shoppingTax}`)
}

//ex7

let TotalShoppingCart = 65;
let ShoppingTax = 10;
let discount = 0.8;
let total = TotalShoppingCart * discount;
if(total>50){
    console.log(`your total is :${total}`)
}else if(total<50){
    console.log(`your total is : ${total + ShoppingTax}`)
}

//ex8

let car1 = {
    brand : "dodge",
    model : "challenger",
    licensePlate: 999999,
}
let car2 = {...car1};
let car3 = {...car1};
let car4 = {...car1};
let car5 = {...car1};
car2.licensePlate = 7777777;
car3.licensePlate = 6666666;
car4.licensePlate = 5555555;
car5.licensePlate = 4444444;

//ex 9

let carsForRent = [
    car1,car2,car3,car4,car5
]

//ex10

carsForRent.splice(0,1);
carsForRent.splice(carsForRent.length-1,1)
console.log(carsForRent);


//ex12

carsForSale =[];
carsForSale.splice(0,0,"Benz");
carsForSale.splice(1,0,"BMW");
carsForSale.splice(2,0,"Ford");

totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);

//ex13

for(let i=0 ; i<carsForSale.length ; i++){
    console.log(carsForSale[i])
};