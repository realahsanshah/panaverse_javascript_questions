const usernames = [
    // 'ahsanshah',
    // 'admin',
    // 'arslan',
    // 'moiz',
    // 'ammar',
]

if(!usernames.length){
    console.log('We need to find some users!')
}

usernames.forEach(item=>{
    if(item=='admin'){
        console.log(`Hello ${item}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${item}, thank you for logging in again.`);
    }
})