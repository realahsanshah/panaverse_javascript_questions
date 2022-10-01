const guestList = ['Ali','Asad','Moiz'];

guestList.forEach(item=>{
    console.log(`Hi ${item}, I would like to invite you to dinner`);
})

console.log(`${guestList[0]} can't make it`);

guestList[0] = 'Ammar';

guestList.forEach(item=>{
    console.log(`Hi ${item}, I would like to invite you to dinner`);
})

console.log(`I have invited ${guestList.length} people to dinner`)