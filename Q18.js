const locations = ['Turkey','Australia','Dubai','London','Paris'];

console.log('Original Array',locations)

console.log('Sorted Array',Array.from(locations).sort())
console.log('Original Array',locations)
console.log('Reverse Sorted Array',Array.from(locations).sort((a,b)=>a>b?-1:1))
console.log('Original Array',locations)
console.log('Reversed Array',locations.reverse())
console.log('Original Array',locations.reverse())
console.log('Sorted Original Array',locations.sort())
console.log('Sorted Reverse Array',locations.reverse())