// const prompt = require("prompt-sync")();

async function pokedex() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax");
  // console.log(respuesta);

   const datos = await respuesta.json();
   //console.log(datos.name, datos.id , datos.height, datos.weight, datos.types, datos.stats, datos.abilities);

   for(i=0; i<datos.types.length; i++){
    console.log(datos.types[i].type.name);
   }

   for(j=0; j<datos.stats.length; j++){
    console.log(datos.stats[j].stat.name);
    console.log(datos.stats[j].base_stat);
   }

   for(i=0; i<datos.abilities.length; i++){
    console.log(datos.abilities[i].ability.name);
   }
   
}

pokedex();