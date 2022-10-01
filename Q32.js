const usernames = [
    'ahsanshah',
    'admin',
    'arslan',
    'moiz',
    'ammar',
]

const newUsers = [
    'haider',
    'fatima',
    'arslan',
    'MOIZ',
    'asad',
]


newUsers.forEach(item=>{
    if(!usernames.map(item=>item.toLowerCase()).includes(item.toLowerCase())){
        console.log(`username ${item} is available`);
    }else{
        console.log(`username ${item} is not available`);
    }
})