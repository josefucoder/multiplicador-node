const fs = require("fs");
const colors = require("colors");

let data = "";

const listarTabla = async (base,limite)=>{

    if( !Number(base)) {
        throw new Error(`El valor de Base: ${base} , no es un numero`.red);
    };

    for(let i = 0; i<limite; i++){
      if(i == 0) console.log(`Tabla del ${base}` .green);
      console.log(`${base} * ${i+1} = ${base * (i+1)}`.green);
    }

}

 // en los parametros se pueden colocar valores por defecto, que se pueden sobreescribir
const crearArchivo = async (base,limite = 10)=>{

    if( !Number(base)) {
        throw new Error(`El valor de Base: ${base} , no es un numero`.red);
    };

    for(let i = 0; i < limite; i++){

        if(i == 0) data = `Table del ${base}\n`;
    
        data += `${base} * ${i+1} = ${base * (i+1)}\n`;
    }
    
    fs.writeFile(`./tablas/tabla-del-${base}-al-${limite}.txt`,data,(err)=>{
        if (err) throw err;
    });

    return `tabla-del-${base}-al-${limite}.txt`;
}
module.exports = { crearArchivo, listarTabla };


