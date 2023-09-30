let safir = {
    name: `Safir`,
    surname: `Ochilov`,
    age: 15,
    passport: {
series_num: 111000888,
series_alph: `I-SM`,
born:2008
    },
    ration: {
        height: 185,
        width: 100,
    }
}

let china = {
    name: `Chan`,
    surname: `Kunsan`,
    age: 69,
    passport: {
series_num: 777777777,
series_alph: `M-KP`,
born: 1954
    },
    ration: {
        height: 179,
        width: 70,
    }
}

console.log(china,safir);
console.log(
    Object.keys(china,safir)
);
console.log(
    Object.values(china,safir)
);

let str = china.filter(item => typeof (item) === `string`)
console.log(str);
let numb = china.filter(num => typeof (num) === `number`)
console.log(numb);
