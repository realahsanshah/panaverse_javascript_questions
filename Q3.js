const name = 'Ahsan Shah';

console.log(name.toLowerCase());
console.log(name.toUpperCase());
const titleCase = name.split().map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(' ');
console.log(titleCase)


