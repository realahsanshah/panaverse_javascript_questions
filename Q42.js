let magicians = ['Ahsan','Ali','Kamran'];

const showMagicians =(arr)=>{
    arr.forEach(item=>{
        console.log(item);
    })
}

function makeGreat(arr){
    arr = arr.map(item=>`Great ${item}`)
    return arr
}

magicians = makeGreat(magicians)
showMagicians(magicians)