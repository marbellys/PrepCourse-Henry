function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda, Es Brasil');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha es Argentina');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');
  viajar('Uruguay');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);