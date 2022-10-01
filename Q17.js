const guestList = ['Ali','Asad','Moiz'];

guestList.forEach(item=>{
    console.log(`Hi ${item}, I would like to invite you to dinner`);
})

console.log(`${guestList[0]} can't make it`);

guestList[0] = 'Ammar';

guestList.forEach(item=>{
    console.log(`Hi ${item}, I would like to invite you to dinner`);
})

guestList.forEach(item=>{
    console.log(`Hi ${item}, I have found a bigger table`);
})

guestList.unshift('Ahsan')

guestList.splice(2,'Faizan');

guestList.push('Qasim')

guestList.forEach(item=>{
    console.log(`Hi ${item}, I would like to invite you to dinner`);
})


guestList.forEach(item=>{
    console.log(`Hi ${item}, I can only invite two people for the dinner`);
})

while(guestList.length>2){
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you`)
}



guestList.forEach(item=>{
    console.log(`Hi ${item}, you are still invited in the dinner`);
})

while(guestList.length>0){
    const removedGuest = guestList.pop();
}

console.log('List at the end',guestList)
