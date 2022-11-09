
// const argv = require("yargs")
//                              .command("listar","Imprime en Consola La Tabla de Multiplicar",{
//                                 base:{
//                                     demand:true,
//                                     alias: "b"
//                                 },
//                                 limite:{
//                                     alias:"l",
//                                     default:10
//                                 }
//                              })
//                              .command("crear","Crea un archivo con la tabla y el limite especificado",{
//                                 base:{
//                                     demand:true,
//                                     alias: "b"
//                                 },
//                                 limite:{
//                                     alias:"l",
//                                     default:10
//                                 }
//                              })
//                              .help()
//                              .argv;
// const multiplicar = require("./multiplicar/multiplicar");
// forma 2 de usar las funciones dentro de una tabla
const argv = require("./config/yargs").argv; // se usa el .argv para acceder al objeto y poder usarlo sin usar argv.argv
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const colors = require("colors");


// se toman las variables de linea de comandos

// let argv2 = process.argv;

// console.log(argv2);

// console.log(argv.b);



let base = argv.b;

let limite = argv.l;



  console.log(argv);

let comando = argv._[0];

switch(comando){
    case "listar": 
    listarTabla(argv.b, argv.l)
    .catch(err=> console.log(`Hubo un Error: ${err}`));
    break;
    case "crear":
        crearArchivo(base,argv.l)
        .then(archivo=> console.log( `Archivo creado: ` + ` ${archivo}`.green))
        .catch(err=> console.log(`Hubo un Error: ${err}`));
        break;
    default: console.log("No se reconocio el comando");
}

/*

let parametro = argv[2];
let base = parametro.split("=")[1];

crearArchivo(base)
.then(archivo=> console.log( `Archivo creado ${archivo}`))
.catch(err=> console.log(`Hubo un Error: ${err}`));

*/