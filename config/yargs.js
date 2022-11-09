const opts = { 
    base:{
    demand:true,
    alias: "b"
},
limite:{
    alias:"l",
    default:10
}}

const argv = require("yargs")
     .command("listar","Imprime en Consola La Tabla de Multiplicar",opts)
     .command("crear","Crea un archivo con la tabla y el limite especificado",opts)
     .help()
     .argv;

     module.exports = {
        argv
     }
