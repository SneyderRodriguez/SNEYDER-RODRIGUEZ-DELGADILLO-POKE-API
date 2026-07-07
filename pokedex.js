const prompt = require("prompt-sync")();
  async function pedirNombre(){
    for (let i=0;i<3;i++){
      let nombre=prompt("Escribe Nombre: ").toLowerCase();
      await buscarPokemon(nombre);
    }
  }
 
    pedirNombre();

   async function buscarPokemon(nombre) {
     const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+nombre);
     if (!respuesta.ok) {
       console.log("Error:",respuesta.status);
       return null;
     }
     const datos = await respuesta.json();
     mostrarFicha(datos);
     return datos;
   }

//Por qué es util que buscarPokemon() y mostrarFicha() sean funciones separadas,
// en vez de un dolo bloque de código que haga todo junto?

//Porque si hay algun cambio que afecte la funcions buscar codigo o si hay que reemplazar un valor dentro de la funcion
// unicamente se haria en ese bloque de funcion sin necesidad de modificar las demas

  function mostrarFicha(datos) {

    if(datos == null){
      console.log("No hay nada que mostrar");
      return;
    }
    
    console.log("Nombre:",datos.name.toUpperCase());
    console.log("ID:",datos.id);

    let tipos = "";
    for(let i = 0; i < datos.types.length; i++){
      tipos = tipos + datos.types[i].type.name;
      if(i < datos.types.length - 1){
        tipos = tipos + "/";
      }
    }
    console.log("Tipos: " + tipos);

    let altura = datos.height * 10;
    let peso = datos.weight / 10;

    console.log("Altura: " + altura + " cm");
    console.log("Peso: " + peso + " Kg");

    for(let i = 0; i <datos.stats.length; i++){
      console.log(datos.stats[i].stat.name + ":" + datos.stats[i].base_stat);
    }

    for(let i = 0; i<datos.abilities.length; i++)
      if(datos.abilities[i].is_hidden){
        console.log(datos.abilities[i].ability.name + " oculta");
      }else{
        console.log(datos.abilities[i].ability.name);
      }
  }

  function obtenerStat(datos, nombreStat){
    for(let i = 0; i <datos.stats.length; i++){
      if(datos.stats[i].stat.name === nombreStat){
        return datos.stats[i].base_stat;
      }
    } return null;
  }