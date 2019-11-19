const _ = require('lodash');
let reg1 = { idEmp: 123, nombre: "Francisco Juarez" };
let reg2 = { idEmp: 345, nombre: "Juan Perez" };

let regs = [
    { idEmp: 567, nombre: "Juan", apellido: "Martinez" },
    { idEmp: 890, nombre: "Juan", apellido: " Rodriguez" },
    { idEmp: 159, nombre: "Tere", apellido: " Martinez" },
    { idEmp: 444, nombre: "Juan", apellido: " Ramirez" }
]

let res = _.assign(reg1, reg2);


//console.log(res); dos objetos

//_.times(5, () => { console.log('beef') });

let res1 = _.find(regs, { nombre: "Juan", apellido: "Martinez" });

console.log(res1);