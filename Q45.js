const makeCar = (manufacturer,model,optionalArgs={})=>{
    return {
        manufacturer,model,
        ...optionalArgs,
    }
}

console.log(makeCar('Suzuki','Liana',{color:'Silver Grey',registered:'Lahore'}))
console.log(makeCar('Suzuki','Baleno',{color:'Silver Grey'}))
console.log(makeCar('Honda','Civic'))