/* 1. Cifrado César

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva
el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro
de desplazamiento de 33 espacios hacia la derecha.

Por ejemplo:

Texto original:   A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Texto codificado: H I J K L M N O P Q R S T U V W X Y Z A B C D E F G

Formula 1:
(posicion de la letra + valor fijo(33)) % 26(Cantidad de letras del alfabeto) //Hacerlo hasta que termine la palabra ingresada
Formula 2:
(n de la letra (ASCII)-65 + valor fijo(33))% 26 (residuo de 26) + 26 (para obtener cod. ASCII)

* TIPS:
- String.charCodeAt(indice); -> método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
Ejemplo: "ABC".charCodeAt(0) // returns 65

- String.fromCharCode(indice); -> estatico método devuelve una cadena creada mediante
el uso de una secuencia de valores Unicode especificada.
Ejemplo: String.fromCharCode(65,66,67) // return 'ABC';

Consideraciones Específicas

1.  - Tu programa debe ser capaz de cifrar. :)
  - Descifrar tanto letras mayúsculas como minúsculas. :)

  - La fórmula para descifrar es: (x - n) % 26

2. Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher :)
3. El usuario no debe poder ingresar:
  - Un campo vacío    :)
  - Que contenga números

  ###########################################################################################*/
function menu(msg) {
  do {
    msg = prompt('Indique el número de lo que desea hacer: 1)Cifrar - 2)Decifrar');

    /* VALIDAR QUE SEA LETRA
    var abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if() */
    if (msg !== '') {
      if (msg === '1') {
        cipher();
      } else if (msg === '2') {
        decipher();
      } else {
        alert('Ingrese una opción válida');
      }
    }
  } while (msg === '' || (msg !== '1' && msg !== '2'));
}

menu();

function cipher(msg) {
  do {
    msg = prompt('Escribe tu mensaje a cifrar:');
  } while (msg === null || msg.length <= 0 || /^\s+$/.test(msg) || !isNaN(msg)); // Revisa que el dato ingresado esté vacío y no sea número;
  /* (/^\s+$/.test(msg)) obliga a que el valor introducido por el usuario no sólo esté
  formado por espacios en blanco. */
  var arrayCipher = '';
  // var strCipher = [];

  for (var i = 0; i < msg.length; i++) {
    strAscii = msg.charCodeAt(i); // Le saco el cod. ASCII a la letra del msg inicial

    // Fórmula
    strAscii = ((strAscii - 65 + 33) % 26) + 65; // Obtengo el cod. ASCII de la letra cifrada y lo ingreso al arrayCipher

    arrayCipher += String.fromCharCode(strAscii);
  }

  // for (var i = 0; i < arrayCipher.length; i++) {
  //   strCipher.push(String.fromCharCode(arrayCipher[i]));
  //   var caesarCiphed = strCipher.join('');
  // }
  return alert(arrayCipher);
}

/*
- String.charCodeAt(indice); -> método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
Ejemplo: "ABC".charCodeAt(0) // returns 65

- String.fromCharCode(indice); -> estatico método devuelve una cadena creada mediante
el uso de una secuencia de valores Unicode especificada.
Ejemplo: String.fromCharCode(65,66,67) // return 'ABC'; */

function decipher(msg) {
  do {
    msg = prompt('Escribe tu mensaje a descifrar:');
  } while (msg === null || msg.length <= 0 || /^\s+$/.test(msg) || !isNaN(msg));
  // La fórmula para descifrar es: (x - n) % 26
  var arrayDecipher = [];
  var strDecipher = [];

  for (var i = 0; i < msg.length; i++) {
    strAscii = msg.charCodeAt(i); // Le saco el cod. ASCII a la letra del msg inicial

    // Fórmula descifrar || NO FUNCIONA FORMULA!
    arrayDecipher.push((strAscii - 33) % 26); // Ingreso al arrayDecipher el cod. ASCII de la letra pasad por la fórmula y lo ingreso al arrayDecipher
  }

  for (var i = 0; i < arrayDecipher.length; i++) {
    strDecipher.push(String.fromCharCode(arrayDecipher[i]));
    caesarDeciphed = strDecipher.join('');
  }
  return alert(caesarDeciphed);
}

// #############################################################################
