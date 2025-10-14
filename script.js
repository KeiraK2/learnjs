let num = 10;
if(num >= 10) {
    console.log('Suurem kui kümme!');
} else if (num === 10) {
    console.log('Võrdne kümnega!');
} else {
    console.log('Väiksem kui kümme!');
}

let day = new Date('2025-10-14').getDay();
console.log(day);
if(day === 1) {
    console.log('Esmaspäev');
} else if(day === 2) {
    console.log('Teisipäev');
} else if(day === 3) {
    console.log('Kolmapäev');
} else if(day === 4) {
    console.log('Neljapäev');
} else if(day === 5) {
    console.log('Pidupäev');
} else if(day === 6) {
    console.log('Laupäev');
} else if(day === 0) {
    console.log('Pühapäev');
} else {
    console.log('Imelikpäev');
}

switch (day) {
    case 1:
        console.log('Esmaspäev');
        break;
    case 2:
        console.log('Teisipäev');
        break;              
    case 3:
        console.log('Kolmapäev');
        break;   
    case 4:
        console.log('Neljapäev');
        break;
    case 5:
    case 6:
        console.log('Laupäev');
        break;
    case 0:
        console.log('Pühapäev');
        break;
    default:
        console.log('Imelikpäev');
}