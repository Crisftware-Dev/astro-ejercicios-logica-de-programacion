import dedent from "dedent";

export interface Ejercicio {
  id: number;
  slug: string;
  titulo: string;
  nivel: number;
  dificultad: string;
  descripcion: string;
  ejemplo: string;
  codigo: string;
  tasaExito: number;
}

export const ejercicios: Ejercicio[] = [
  {
    id: 1,
    slug: "el-famoso-fizz-buzz",
    titulo: 'EL FAMOSO "FIZZ BUZZ"',
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Implementa el clásico ejercicio Fizz Buzz: imprime números del 1 al 100, reemplazando múltiplos de 3 por 'Fizz', múltiplos de 5 por 'Buzz' y múltiplos de ambos por 'FizzBuzz'.
    `,
    ejemplo: "3 % 3 = 0 ? fizz",
    codigo: `
      function fizzbuzz() {
        for (let i = 1; i <= 100; i++) {
          if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + ' fizzbuzz');
          } else if (i % 3 == 0) {
            console.log(i + ' fizz');
          } else if (i % 5 == 0) {
            console.log(i + ' buzz');
          } else {
            console.log(i);
          }
        }
      }
    `,
    tasaExito: 98,
  },
  {
    id: 2,
    slug: "es-un-anagrama",
    titulo: "¿ES UN ANAGRAMA?",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Determina si dos palabras son anagramas entre sí, es decir, si contienen exactamente las mismas letras con la misma frecuencia, ignorando mayúsculas y espacios.
    `,
    ejemplo: "anagrama(Cara - arca) // true",
    codigo: `
      function anagrama(word1, word2) {
        if (word1.toLowerCase() === word2.toLowerCase()) return false;
        let word1Array = word1.split('');
        let word2Array = word2.split('');
        word1Array.sort();
        word2Array.sort();
        return word1Array.join('') === word2Array.join('') ? true : false;
      }
    `,
    tasaExito: 92,
  },
  {
    id: 3,
    slug: "la-sucesi-n-de-fibonacci",
    titulo: "LA SUCESIÓN DE FIBONACCI",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Genera la secuencia de Fibonacci hasta un número dado o imprime los primeros n términos de esta sucesión matemática.
    `,
    ejemplo: "fibonacci(5) // 0, 1, 1, 2, 3",
    codigo: `
      function fibonacci() {
        let fib = 0;
        let fib2 = 1;
        for (let i = 0; i < 50; i++) {
          let fibNew = fib + fib2;
          fib = fib2;
          fib2 = fibNew;
          console.log(fib);
        }
      }
    `,
    tasaExito: 85,
  },
  {
    id: 4,
    slug: "es-un-n-mero-primo",
    titulo: "¿ES UN NÚMERO PRIMO?",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Comprueba si un número entero es primo, es decir, si solo es divisible por 1 y por sí mismo.
    `,
    ejemplo: "esPrimo(17) // true",
    codigo: `
      function primo() {
        const primos = [];

        for (let num = 2; num <= 100; num++) {
          let esPrimo = true;
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
              esPrimo = false;
              break;
            }
          }
          if (esPrimo) primos.push(num);
        }
      }
    `,
    tasaExito: 94,
  },
  {
    id: 5,
    slug: "rea-de-un-pol-gono",
    titulo: "ÁREA DE UN POLÍGONO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Calcula el área de un polígono regular dado el número de lados y la longitud de un lado.
    `,
    ejemplo: "areaPoligono(6, 5) // 129.9",
    codigo: `
      function area(pol, tipo) {
        let area = 0;
        if (tipo === 'Triangulo') {
          area = (pol.base * pol.altura) / 2;
          console.log('El área del Triángulo es: ' + area);
        } else if (tipo === 'Cuadrado') {
          area = Math.pow(pol.lado, 2);
          console.log('El área del Cuadrado es: ' + area);
        } else if (tipo === 'Rectángulo') {
          area = pol.lado * pol.altura;
          console.log('El área del Rectángulo es: ' + area);
        }
      }
    `,
    tasaExito: 90,
  },
  {
    id: 6,
    slug: "aspect-ratio-de-una-imagen",
    titulo: "ASPECT RATIO DE UNA IMAGEN",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Calcula el aspect ratio de una imagen a partir de sus dimensiones en píxeles y maneja diferentes formatos.
    `,
    ejemplo: "aspectRatio(1920, 1080) // 16:9",
    codigo: `
      async function aspectRatio(url) {
        const img = new Image();
        img.src = url;

        await img.decode();

        img.onload = () => {
          const width = img.width;
          const height = img.height;
          const ratio = width / height;
          console.log(ratio);
        };
      }
    `,
    tasaExito: 87,
  },
  {
    id: 7,
    slug: "invirtiendo-cadenas",
    titulo: "INVERTIENDO CADENAS",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Invierte el orden de los caracteres en una cadena de texto.
    `,
    ejemplo: "invertir('Hola') // 'aloH'",
    codigo: `
      function invertir(texto) {
        let textoInvertido = '';
        for (let i = texto.length - 1; i >= 0; i--) {
          textoInvertido += texto[i];
        }
        return textoInvertido;
      }
    `,
    tasaExito: 95,
  },
  {
    id: 8,
    slug: "contando-palabras",
    titulo: "CONTANDO PALABRAS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea un programa que cuente el numero de palabras y cuantas veces se repite cada palabra, y que muestre el recuento final de todas ellas. Una palabra es la misma en mayúsculas y minúsculas.
    `,
    ejemplo: "contarPalabras('Hola mundo') // 2",
    codigo: `
      function contarRepeticiones(texto) {
        let palabras = texto.toLowerCase().split(' ');
        let palabrasRepetidas = {};
        for (let i = 0; palabras.length > i; i++) {
          let palabra = palabras[i];
          if (palabrasRepetidas[palabra]) {
            palabrasRepetidas[palabra]++;
          } else {
            palabrasRepetidas[palabra] = 1;
          }
        }
        console.log(palabrasRepetidas);
      }
    `,
    tasaExito: 93,
  },
  {
    id: 9,
    slug: "decimal-a-binario",
    titulo: "DECIMAL A BINARIO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Convierte un número decimal a su representación binaria.
    `,
    ejemplo: "decimalABinario(10) // '1010'",
    codigo: `
      function binario(decimal) {
        let binario = '';
        while (decimal > 0) {
          let resto = decimal % 2;
          binario = resto + binario;
          decimal = Math.floor(decimal / 2);
        }
        return binario;
      }
    `,
    tasaExito: 89,
  },
  {
    id: 10,
    slug: "c-digo-morse",
    titulo: "CÓDIGO MORSE",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Convierte texto a código Morse y viceversa, utilizando una tabla de mapeo.
    `,
    ejemplo: "textoAMorse('SOS') // '... --- ...'",
    codigo: `
      function codigoMorse(texto) {
        const morse = {
          a: '.-',
          b: '-...',
          c: '-.-.',
          d: '-..',
          e: '.',
          f: '..-.',
          g: '--.',
          h: '....',
          i: '..',
          j: '.---',
          k: '-.-',
          l: '.-..',
          m: '--',
          n: '-.',
          o: '---',
          p: '.--.',
          q: '--.-',
          r: '.-.',
          s: '...',
          t: '-',
          u: '..-',
          v: '...-',
          w: '.--',
          x: '-..-',
          y: '-.--',
          z: '--..',
          0: '-----',
          1: '.----',
          2: '..---',
          3: '...--',
          4: '....-',
          5: '.....',
          6: '-....',
          7: '--...',
          8: '---..',
          9: '----.'
        };

        return texto
          .toLowerCase()
          .split('')
          .map((letra) => morse[letra])
          .join(' ');
      }

      function codigoMorseInverso(code) {
        const dic = {
          '.-': 'a',
          '-...': 'b',
          '-.-.': 'c',
          '-..': 'd',
          '.': 'e',
          '..-.': 'f',
          '--.': 'g',
          '....': 'h',
          '..': 'i',
          '.---': 'j',
          '-.-': 'k',
          '.-..': 'l',
          '--': 'm',
          '-.': 'n',
          '---': 'o',
          '.--.': 'p',
          '--.-': 'q',
          '.-.': 'r',
          '...': 's',
          '-': 't',
          '..-': 'u',
          '...-': 'v',
          '.--': 'w',
          '-..-': 'x',
          '-.--': 'y',
          '--..': 'z',
          '-----': '0',
          '.----': '1',
          '..---': '2',
          '...--': '3',
          '....-': '4',
          '.....': '5',
          '-....': '6',
          '--...': '7',
          '---..': '8',
          '----.': '9'
        };

        return code
          .split('   ')
          .map((palabra) =>
            palabra
              .split(' ')
              .map((code) => dic[code])
              .join('')
          )
          .join(' ');
      }
    `,
    tasaExito: 91,
  },
  {
    id: 11,
    slug: "expresiones-equilibradas",
    titulo: "EXPRESIONES EQUILIBRADAS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Verifica si los paréntesis, llaves y corchetes en una expresión están correctamente balanceados.
    `,
    ejemplo: "equilibrado('()[]{}') // true",
    codigo: `
      function comprobarBalanceo(expresion) {
        let llaves = [];
        const pares = { '(': ')', '[': ']', '{': '}' };

        for (let char of expresion) {
          if (char in pares) {
            llaves.push(char);
          } else if (char === ')' || char === ']' || char === '}') {
            if (llaves.length === 0) return false;

            let ultimoLlave = llaves.pop();

            if (pares[ultimoLlave] !== char) return false;
          }
        }
        return llaves.length === 0;
      }
    `,
    tasaExito: 88,
  },
  {
    id: 12,
    slug: "eliminando-caracteres",
    titulo: "ELIMINANDO CARACTERES",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Elimina todas las ocurrencias de un carácter específico de una cadena.
    `,
    ejemplo: "eliminar('banana', 'a') // 'bnn'",
    codigo: `
      function diferencia(str1, str2) {
        let out1 = '';
        let out2 = '';
        for (let char of str1) {
          if (!str2.includes(char)) out1 += char;
        }
        for (let char of str2) {
          if (!str1.includes(char)) out2 += char;
        }
        console.log(out1);
        console.log(out2);
      }
    `,
    tasaExito: 92,
  },
  {
    id: 13,
    slug: "es-un-pal-indromo",
    titulo: "¿ES UN PALÍNDROMO?",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Determina si una palabra o frase es un palíndromo, leyendo igual de izquierda a derecha que de derecha a izquierda.
    `,
    ejemplo: "esPalindromo('radar') // true",
    codigo: `
      function palindromo(texto) {
        let textoLimpio = texto.toLowerCase().replace(/\s+/g, '');
        let textoReversido = textoLimpio.split('').reverse().join('');
        return textoLimpio === textoReversido ? true : false;
      }
    `,
    tasaExito: 96,
  },
  {
    id: 14,
    slug: "factorial-recursivo",
    titulo: "FACTORIAL RECURSIVO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Calcula el factorial de un número utilizando recursión.
    `,
    ejemplo: "factorial(5) // 120",
    codigo: `
      function factorial(numero) {
        if (numero === 0) return 1;
        return numero * factorial(numero - 1);
      }
    `,
    tasaExito: 90,
  },
  {
    id: 15,
    slug: "es-un-n-mero-de-armstrong",
    titulo: "¿ES UN NÚMERO DE ARMSTRONG?",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Comprueba si un número es narcisista o de Armstrong, es decir, si la suma de sus dígitos elevados a la potencia de la cantidad de dígitos es igual al número.
    `,
    ejemplo: "esArmstrong(153) // true",
    codigo: `
      function esArmstrong(numero) {
        const digitos = numero.toString().split('');
        let armstrong = 0;
        for (let i = 0; i < digitos.length; i++) {
          armstrong += parseInt(digitos[i]) ** digitos.length;
        }
        if (armstrong !== numero) return false;

        return true;
      }
    `,
    tasaExito: 84,
  },
  {
    id: 16,
    slug: "cu-ntos-d-as",
    titulo: "¿CUÁNTOS DÍAS?",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Calcula el número de días entre dos fechas dadas.
    `,
    ejemplo: "diasEntre('2023-01-01', '2023-01-05') // 4",
    codigo: `
      function diasEntreFechas(fecha1, fecha2) {
        const fecha1Array = fecha1.split('/');
        const fecha2Array = fecha2.split('/');

        if (fecha1Array.length !== 3 || fecha2Array.length !== 3) {
          console.log('Las fechas no son correctas');
        }

        const [dia1, mes1, año1] = fecha1Array;
        const [dia2, mes2, año2] = fecha2Array;

        let dias = 0;

        if (año1 !== año2) {
          if (año1 > año2) {
            return console.log('El año 1 es posterior al año 2');
          }
          dias += Number(año2 - año1) * 365;
        }

        if (mes1 !== mes2) {
          if (mes1 > mes2) {
            return console.log('El mes 1 es posterior al mes 2');
          }
          dias += Number(mes2 - mes1) * 30;
        }

        if (dia1 !== dia2) {
          if (dia1 > dia2) {
            return console.log('El dia 1 es posterior al dia 2');
          }
          dias += Number(dia2 - dia1);
        }

        return 'Hay ' + dias + ' días entre ' + fecha1Array + ' y ' + fecha2Array;
      }
    `,
    tasaExito: 89,
  },
  {
    id: 17,
    slug: "en-may-scula",
    titulo: "EN MAYÚSCULA",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Convierte todo el texto de entrada a mayúsculas.
    `,
    ejemplo: "mayuscula('hola') // 'HOLA'",
    codigo: `
      function mayusculas(texto) {
        return texto.toUpperCase();
      }
    `,
    tasaExito: 97,
  },
  {
    id: 18,
    slug: "la-carrera-de-obst-culos",
    titulo: "LA CARRERA DE OBSTÁCULOS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea una función que evalúe si un/a atleta ha superado correctamente una carrera de obstáculos.
      La función recibirá dos parámetros:
      Un array que sólo puede contener String con las palabras "run" o "jump"
      Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
      La función imprimirá cómo ha finalizado la carrera:
      Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no variará el símbolo de esa parte de la pista.
      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
      - Si hace "run" en "|" (valla), se variará la pista por "/".
      - La función retornará un Boolean que indique si ha superado la carrera.
      Para ello tiene que realizar la opción correcta en cada tramo de la pista.
    `,
    ejemplo: "carrera(10) // simulación de saltos",
    codigo: `
      function carrera(tramos, pista) {
        let correcto = true;
        for (let i = 0; i < tramos.length; i++) {
          if (tramos[i] === 'run') {
            if (pista[i] === '|') {
              pista = pista.replace('|', '/');
              correcto = false;
            }
          } else if (tramos[i] === 'jump') {
            if (pista[i] === '_') {
              pista = pista.replace('_', 'x');
              correcto = false;
            }
          }
        }
        console.log(pista);
        return correcto;
      }
    `,
    tasaExito: 80,
  },
  {
    id: 19,
    slug: "tres-en-raya",
    titulo: "TRES EN RAYA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Implementa el juego de tres en raya (Tic-Tac-Toe) para dos jugadores.
    `,
    ejemplo: "tresEnRaya(tablero) // ganador o empate",
    codigo: `
      function analizarMatriz(matriz) {
        let n = matriz.length;
        for (let i = 0; i < n; i++) {
          if (
            matriz[i][0] !== null &&
            matriz[i][0] === matriz[i][1] &&
            matriz[i][1] === matriz[i][2]
          )
            return matriz[0][1] + ' ganó';
        }

        for (let j = 0; j < n; j++) {
          if (
            matriz[0][j] !== null &&
            matriz[0][j] === matriz[1][j] &&
            matriz[1][j] === matriz[2][j]
          )
            return matriz[1][0] + ' ganó';
        }

        if (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2])
          return matriz[1][1] + ' ganó';
        if (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0])
          return matriz[1][1] + ' ganó';

        return 'Empate';
      }
    `,
    tasaExito: 85,
  },
  {
    id: 20,
    slug: "conversor-tiempo",
    titulo: "CONVERSOR TIEMPO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos..
    `,
    ejemplo: "convertirTiempo(3661) // '1:01:01'",
    codigo: `
      function segundos(dias, horas, minutos, segundos) {
        let ms =
          dias * 86400000 + horas * 3600000 + minutos * 60000 + segundos * 1000;

        return 'Hay un total de ' + ms + ' ms';
      }
    `,
    tasaExito: 94,
  },
  {
    id: 21,
    slug: "parando-el-tiempo",
    titulo: "PARANDO EL TIEMPO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea una funcion que sume 2 números y retorne su resultado pasado unos segundos.
      - Recibirá por parámetros 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
      - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal. 
      - Se podría ejecutar varias veces al mismo tiempo.
    `,
    ejemplo: "parandoElTiempo(5, 7, 2) // 10",
    codigo: `
      function parandoElTiempo(num, num2, seg) {
        return new Promise((res) => {
          console.log('Sumando...');
          setTimeout(() => {
            const suma = num + num2;
            res(suma);
          }, seg * 1000);
        });
      }

      parandoElTiempo(5, 7).then((suma) => {
        console.log('La suma es:', suma);
      });
    `,
    tasaExito: 88,
  },
  {
    id: 22,
    slug: "calculadora-txt",
    titulo: "CALCULADORA .TXT",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Lee el fichero "Calculator.txt" incluido en el proyecto, calcula su resultado e imprímelo.
      - El .txt se corresponde con las entradas de una calculadora.
      - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
      - Soporta números enteros y decimales.
      - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
      - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
      - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
    `,
    ejemplo: "calcularDesdeArchivo('ops.txt') // resultados",
    codigo: `
      const fs = require('fs');

      function calculadoraTxT() {
        try {
          const contenido = fs.readFileSync('Calculator.txt', 'utf-8');

          const lineas = contenido
            .trim()
            .split('\n')
            .map((linea) => linea.trim())
            .filter((linea) => linea !== '');

          if (lineas.length === 0) {
            console.log('El archivo está vacío o no tiene operaciones válidas');
            return;
          }

          if (isNaN(Number(lineas[0]))) {
            console.log('La primera linea debe ser un numero');
            return;
          }

          let resultado = parseFloat(lineas[0]);

          for (let i = 1; i < lineas.length; i += 2) {
            const operacion = lineas[i];
            const sigNumStr = lineas[i + 1];

            if (!sigNumStr) {
              console.log('Falta un número despúes de la operación', operacion);
              return;
            }

            const numero = parseFloat(sigNumStr);

            if (isNaN(numero)) {
              console.log(
                'Formato incorrecto, se esperaba un número, se encontró: ',
                sigNumStr
              );
              return;
            }

            switch (operacion) {
              case '+':
                resultado += numero;
                break;
              case '-':
                resultado -= numero;
                break;
              case '*':
                resultado *= numero;
                break;
              case '/':
                if (numero === 0) {
                  console.log('No se puede dividir entre 0');
                  return;
                }
                resultado /= numero;
                break;
              default:
                console.log('Operacion no soportada', operacion);
                return;
            }
          }
          console.log('El resultado es: ', resultado);
        } catch (error) {
          console.log('No se han podido resolver las operaciones.');
          console.log('Error:', error.message);
        }
      }
    `,
    tasaExito: 86,
  },
  {
    id: 23,
    slug: "conjuntos",
    titulo: "CONJUNTOS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea una función que reciba dos array, un booleano y retorne un array.
      - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
      - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
      - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
    `,
    ejemplo: "union({1,2}, {2,3}) // {1,2,3}",
    codigo: `
      function conjuntos(toArray, toArray2, toBoolean) {
        if (toBoolean) {
          const comunes = toArray.filter((elemento) => toArray2.includes(elemento));
          return 'Los elementos comunes son ' + comunes;
        } else {
          const noComunes1 = toArray
            .filter((elemento) => !toArray2.includes(elemento))
            .concat(toArray2.filter((elemento) => !toArray.includes(elemento)));
          return 'Los elementos no comunes son ' + noComunes1;
        }
      }
    `,
    tasaExito: 91,
  },
  {
    id: 24,
    slug: "m-ximo-com-n-divisor-y-m-nimo-com-n-m-ltiple",
    titulo: "MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Calcula el MCD y el MCM de dos números enteros.
    `,
    ejemplo: "mcd(12, 18) // 6",
    codigo: `
      function MCD(a, b) {
        while (b !== 0) {
          let residuo = a % b;
          a = b;
          b = residuo;
        }
        return a;
      }

      function MCM(a, b) {
        let multipoA = a;
        let i = 1;

        while (true) {
          if (multipoA % b === 0) return ('El Mínimo común múltiplo es ', multipoA);
          i++;
          multipoA = a * i;
        }
      }
    `,
    tasaExito: 92,
  },
  {
    id: 25,
    slug: "iteration-master",
    titulo: "ITERATION MASTER",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
      ¿De cuántas maneras eres capaz de hacerlo?
      Crea el código para cada una de ellas.
    `,
    ejemplo: "iterar(5) // suma 1+2+3+4+5",
    codigo: `
      function iteracionMaster() {
        let iWhile = 1;
        let idoWhile = 1;

        for (let i = 1; i <= 100; i++) console.log('i', i);

        while (iWhile <= 100) {
          console.log('iWhile', iWhile);
          iWhile++;
        }

        do {
          console.log('idoWhile', idoWhile);
          idoWhile++;
        } while (idoWhile <= 100);

        Array(100)
          .fill(0)
          .forEach((_, i) => console.log(i + 1));
      }
    `,
    tasaExito: 89,
  },
  {
    id: 26,
    slug: "piedra-papel-tijera",
    titulo: "PIEDRA, PAPEL, TIJERA",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
      - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
      - La función recibe un listado que contiene pares, representando cada jugada.
      - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
      - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
    `,
    ejemplo: "jugar('piedra') // 'empate' o ganador",
    codigo: `
      function juegoPPT(jugadas) {
        let winPlayer1 = 0;
        let winPlayer2 = 0;
        let drawGame = 0;

        for (const [jugador1, jugador2] of jugadas) {
          if (
            (jugador1 === 'R' && jugador2 === 'S') ||
            (jugador1 === 'S' && jugador2 === 'P') ||
            (jugador1 === 'P' && jugador2 === 'R')
          ) {
            winPlayer1 += 1;
            console.log('Esta ronda ganó el Jugador 1');
          } else if (jugador1 === jugador2) {
            drawGame += 1;
            console.log('Esta ronda términa en empate');
          } else {
            winPlayer2 += 1;
            console.log('Esta ronda ganó el Jugador 2');
          }
        }

        if (winPlayer1 > winPlayer2) return 'Resultado final == Player 1';
        if (winPlayer2 > winPlayer1) return 'Resultado final == Player 2';
        return 'Resultado final == Tie';
      }
    `,
    tasaExito: 93,
  },
  {
    id: 27,
    slug: "cuadrado-y-tri-ngulo-2d",
    titulo: "CUADRADO Y TRIÁNGULO 2D",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
      Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
      EXTRA: ¿Eres capaz de dibujar más figuras?
    `,
    ejemplo: "dibujarCuadrado(4) // ****\n****",
    codigo: `
      function dibujarFigura(tipo, tamaño) {
        if (tamaño < 2) {
          console.log('El tamaño debe ser mínimo 2 para dibujar bordes.');
          return;
        }

        tipo = tipo.toLowerCase();

        if (tipo === 'cuadrado') {
          for (let i = 0; i < tamaño; i++) {
            let linea = '';

            for (let j = 0; j < tamaño; j++) {
              if (i === 0 || i === tamaño - 1 || j === 0 || j === tamaño - 1) {
                linea += '* ';
              } else {
                linea += '  ';
              }
            }

            console.log(linea);
          }
        } else if (tipo === 'triangulo') {
          for (let i = 1; i <= tamaño; i++) {
            let linea = '';
            linea += ''.repeat(tamaño - i);
            linea += '*'.repeat(2 * i - 1);

            console.log(linea);
          }
        } else {
          console.log("Tipo no válido. Usa 'cuadrado' o 'triangulo'.");
        }
      }
    `,
    tasaExito: 87,
  },
  {
    id: 28,
    slug: "vectores-ortogonales",
    titulo: "VECTORES ORTOGONALES",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea un programa que determine si dos vectores son ortogonales.
      - Los dos array deben tener la misma longitud.
      - Cada vector se podría representar como un array. Ejemplo: [1, -2]
    `,
    ejemplo: "ortogonales([1,0], [0,1]) // true",
    codigo: `
      function ortogonales(v1, v2) {
        let vectorOrtogonal = 0;
        if (v1.length !== v2.length)
          return 'Los vectores deben tener la misma longitud';

        for (let i = 0; i < v1.length; i++) {
          vectorOrtogonal += v1[i] * v2[i];
        }

        if (vectorOrtogonal !== 0) return 'Los vectores no son ortogonales';

        return 'Los vectores si son ortogonales';
      }
    `,
    tasaExito: 85,
  },
  {
    id: 29,
    slug: "m-quina-expendedora",
    titulo: "MÁQUINA EXPENDEDORA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Simula el funcionamiento de una máquina expendedora creando una operación que reciba dinero (array de monedas) y un número que indique la selección del producto.
      - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor número de monedas).
      - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje y retornar todas las monedas.
      - Si no hay dinero de vuelta, el array se retornará vacío.
      - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
      - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
    `,
    ejemplo: "comprar('agua', 1.5) // cambio 0.5",
    codigo: `
      const MONEDAS_VALIDAS = {
        FIVE: 5,
        TEN: 10,
        FIFTY: 50,
        ONEHUNDRED: 100,
        TWOHUNDRED: 200
      };

      const DENOMINACIONES = [200, 100, 50, 10, 5];

      const PRODUCTS = {
        1: ['Agua', 50],
        2: ['Coca Cola', 150],
        3: ['Cerveza', 300],
        4: ['Pizza', 500],
        5: ['Galleta', 50],
        6: ['Donas', 125]
      };

      function maquinaExpendedora(dinero, idProducto) {
        const product = PRODUCTS[idProducto];

        const monedasInsertadas = [];
        let totalDinero = 0;

        for (const clave of dinero) {
          if (!(clave in MONEDAS_VALIDAS)) {
            return ['Moneda no válida detectada', dinero];
          }
          monedasInsertadas.push(clave);
          totalDinero += MONEDAS_VALIDAS[clave];
        }

        if (!product) {
          return ['Producto no existe', monedasInsertadas];
        }

        if (totalDinero < product[1]) {
          return ['Dinero insuficiente', monedasInsertadas];
        }

        let cambioValor = totalDinero - product[1];

        const cambioMonedas = [];
        for (const den of DENOMINACIONES) {
          while (cambioValor >= den) {
            const clave = Object.keys(MONEDAS_VALIDAS).find(
              (k) => MONEDAS_VALIDAS[k] === den
            );
            cambioMonedas.push(clave);
            cambioValor -= den;
          }
        }

        return [product[0], cambioMonedas];
      }
    `,
    tasaExito: 90,
  },
  {
    id: 30,
    slug: "ordena-la-lista",
    titulo: "ORDENA LA LISTA",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Crea una función que ordene y retorne una matriz de números.
      - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
      - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
    `,
    ejemplo: "ordenar([3,1,2]) // [1,2,3]",
    codigo: `
      function ascDesc(arr, orden) {
        if (orden === 'asc') {
          for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
            }
          }
          return arr;
        } else if (orden === 'desc') {
          for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
              if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
            }
          }
          return arr;
        }
      }
    `,
    tasaExito: 94,
  },
  {
    id: 31,
    slug: "marco-de-palabras",
    titulo: "MARCO DE PALABRAS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea una función que reciba un texto y muestre cada palabra en una línea, formando un marco rectangular de asteriscos.
      - ¿Qué te parece el reto? Se vería así:
     **********
     * ¿Qué   *
     * te     *
     * parece *
     * el     *
     * reto?  *
     **********
    `,
    ejemplo: "",
    codigo: `
      function marcoDeTexto(texto) {
        const palabras = texto.split(' ');
        let maxLength = 0;

        for (const palabra of palabras) {
          if (palabra.length > maxLength) {
            maxLength = palabra.length;
          }
        }

        const borde = '*'.repeat(maxLength + 4);
        console.log(borde);
        for (const palabra of palabras) {
          const espacios = ' '.repeat(maxLength - palabra.length);
          const linea = '* {palabra}{espacios} *'; //Aquí va con comillas invertidas y concatenadas las variables
          console.log(linea);
        }
        console.log(borde);
      }
    `,
    tasaExito: 88,
  },
  {
    id: 32,
    slug: "a-os-bisiestos",
    titulo: "AÑOS BISIESTOS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
      - Utiliza el menor número de líneas para resolver el ejercicio.
    `,
    ejemplo: "esBisiesto(2024) // true",
    codigo: `
      function biciesto() {
        let contador = 0;
        let año = 2025;
        for (let i = 0; contador < 30; i++) {
          año += 1;
          if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
            añosBiciestos += 1;
            console.log('Este año es biciesto', año);
          }
        }
      }
    `,
    tasaExito: 95,
  },
  {
    id: 33,
    slug: "el-segundo",
    titulo: "EL SEGUNDO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Dado un listado de números, encuentra el SEGUNDO más grande
    `,
    ejemplo: "formatoTiempo(3661) // '01:01:01'",
    codigo: `
      function segundoNumero(arrNumeros) {
        arrNumeros.sort((a, b) => b - a);
        return 'El segundo número mas grande es ' + arrNumeros[1];
      }
    `,
    tasaExito: 92,
  },
  {
    id: 34,
    slug: "ciclo-sexagenario-chino",
    titulo: "CICLO SEXAGENARIO CHINO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea un función, que dado un año, indique el elemento y animal correspondiente en el ciclo sexagenario del zodíaco chino.
      - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
      - El ciclo sexagenario se corresponde con la combinación de los elementos madera, fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo (en este orden).
      - Cada elemento se repite dos años seguidos.
      - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
    `,
    ejemplo: "signoChino(2024) // 'Dragón'",
    codigo: dedent`
      function sexagenarioChino(año) {
        const signo = cicloSexagenario.find(obj => obj.año === año);

        if(!signo) {
          return "Has seleccionado un año incorrecto";
        } else {
          return El año S{año} corresponde al {signo.animal} de S{signo.elemento}
        }
      }
    `,
    tasaExito: 86,
  },
  {
    id: 35,
    slug: "los-n-meros-perdidos",
    titulo: "LOS NÚMEROS PERDIDOS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Dado un array de enteros ordenado y sin repetidos, crea una función que calcule y retorne todos los que faltan entre el mayor y el menor.
      - Lanza un error si el array de entrada no es correcto.
    `,
    ejemplo: "perdidos([5,4,2,1]) // 3",
    codigo: `
      function numerosPerdidos() {
        numeros.sort((a, b) => b - a);
        const numerosPerdidos = [];

        for (let i = numeros[0]; i >= numeros.at(-1); i--) {
          if (!numeros.includes(i)) {
            numerosPerdidos.push(i);
          }
        }

        return 'Los numeros Perdidos son' + numerosPerdidos;
      }
    `,
    tasaExito: 89,
  },
  {
    id: 36,
    slug: "batalla-pokemon",
    titulo: "BATALLA POKÉMON",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
      - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
      - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
      - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
      - El programa recibe los siguientes parámetros:
      - Tipo del Pokémon atacante.
      - Tipo del Pokémon defensor.
      - Ataque: Entre 1 y 100.
      - Defensa: Entre 1 y 100.
    `,
    ejemplo: "batalla(pikachu, charmander) // ganador",
    codigo: `
      function pokemonWar(pokemon1, pokemon2) {
        const tipoAtaque = pokemon1[0];
        const tipoDefensa = pokemon2[0];
        const ataque = pokemon1[1];
        const defensa = pokemon2[1];

        const tiposValidos = ['Agua', 'Fuego', 'Planta', 'Eléctrico'];
        if (
          !tiposValidos.includes(tipoAtaque) ||
          !tiposValidos.includes(tipoDefensa)
        ) {
          return 'Tipo inválido. Solo: Agua, Fuego, Planta, Eléctrico.';
        }
        if (ataque < 1 || ataque > 100 || defensa < 1 || defensa > 100) {
          return 'Ataque/Defensa debe estar entre 1 y 100.';
        }

        const efectividad = {
          Agua: { Fuego: 2, Agua: 0.5, Planta: 0.5, Eléctrico: 1 },
          Fuego: { Fuego: 0.5, Agua: 0.5, Planta: 2, Eléctrico: 1 },
          Planta: { Agua: 2, Fuego: 0.5, Planta: 0.5, Eléctrico: 1 },
          Eléctrico: { Agua: 2, Fuego: 1, Planta: 0.5, Eléctrico: 0.5 }
        };

        let multi = efectividad[tipoAtaque]?.[tipoDefensa] || 1;

        daño = Math.floor(50 * (ataque / defensa) * multi);

        return 'El ataque realizado por el pokemon atacante es de ' + daño + '.';
      }

      console.log(pokemonWar(['Agua', 100], ['Planta', 50]));
    `,
    tasaExito: 83,
  },
  {
    id: 37,
    slug: "los-anillos-de-poder",
    titulo: "LOS ANILLOS DE PODER",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
      Cada raza tiene asociado un "valor" entre 1 y 5:
      - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
      - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
      Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
      - El resultado puede ser que gane el bien, el mal, o exista un empate.
      Dependiendo de la suma del valor del ejército y el número de integrantes.
      - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
      - Tienes total libertad para modelar los datos del ejercicio.
      Ej: 1 Peloso pierde contra 1 Orco
          2 Pelosos empatan contra 1 Orco
          3 Pelosos ganan a 1 Orco
    `,
    ejemplo: "anillos(3) // lista de anillos",
    codigo: dedent`
      function anillosDelPoder(rBondadosos, rSauron) {
        const razasParticipantes = [ "Peloso", "Sureños buenos", "Enano", "Númenóreano", "Elfo", "Sureños malos", "Orco", "Goblin", "Huargo", "Troll" ];

        const bondadosos = {
          "Peloso" : 1,
          "Sureños buenos": 2,
          "Enano": 3,
          "Númenóreano": 4,
          "Elfo": 5
        }

        const malvados = {
          "Sureños malos": 2,
          "Orco": 2,
          "Goblin": 2,
          "Huargo": 3,
          "Troll": 5
        }

        const buenos = {};
        const txtBuenos = [];
        let poderBuenos = 0;
        for(const raza of rBondadosos) {
          if (!razasParticipantes.includes(raza)) {
            return "Razas no participantes, las únicas son: " + razasParticipantes.join(", ");
          }
          if (!(raza in bondadosos)) {
            return "Raza " + {raza} + " no es bondadosa. Solo pueden ser: " + Object.keys(bondadosos).join(", ");
          }

          buenos[raza] = (buenos[raza] || 0) + 1;
          txtBuenos.push(S{buenos[raza]} S{raza}S{buenos[raza] > 1 ? 's' : ''},);
          poderBuenos += bondadosos[raza];
        }

        const malos = {};
        const txtMalos = []
        let poderMalos = 0;
        for(const raza of rSauron) {
          if (!razasParticipantes.includes(raza)) {
            return "Razas no participantes, las únicas son: " + razasParticipantes.join(", ");
          }
          if (!(raza in malvados)) {
            return Raza "S{raza}" no es malvada. Solo pueden ser: S{Object.keys(malvados).join(", ")};
          }
          malos[raza] = (malos[raza] || 0) + 1;
          txtMalos.push(S{malos[raza]} S{raza}S{malos[raza] > 1 ? 's' : ''},);
          poderMalos += malvados[raza];
        }

        if(poderBuenos > poderMalos) {
          let resultadoDeBatalla = txtBuenos.join(' ').concat(" ganaron contra ", txtMalos.join(' '));
          return resultadoDeBatalla;

        } else if(poderBuenos < poderMalos) {
          let resultadoDeBatalla = txtBuenos.join(' ').concat(" perdieron contra ", txtMalos.join(' '));
          return resultadoDeBatalla;

        } else {
          let resultadoDeBatalla = txtBuenos.join(' ').concat(" empataron contra ", txtMalos.join(' '));
          return resultadoDeBatalla;
        }
      }
    `,
    tasaExito: 81,
  },
  {
    id: 38,
    slug: "los-lanzamientos-de-the-legend-of-zelda",
    titulo: 'LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"',
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      ¡Han anunciado un nuevo "The Legend of Zelda"!
      Se llamará "Tears of the Kingdom" y se lanzará el 12 de mayo de 2023.
      Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
      Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones.
      - Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto puedes usar el mes, o incluso inventártelo)
    `,
    ejemplo: "lanzamientosZelda('NES') // lista de juegos",
    codigo: `
      function lanzamientoTheLegendOfZelda(juego, juego2) {
        const juegoArray = juego[1].split('/');
        const juego2Array = juego2[1].split('/');

        const [dia, mes, año] = juegoArray;
        const [dia2, mes2, año2] = juego2Array;

        let dias = 0;
        let meses = 0;
        let años = 0;
        if (año > año2) {
          años = año - año2;
          if (mes2 > mes) {
            años = años - 1;
          }
        } else if (año2 > año) {
          años = año2 - año;
          if (mes > mes2) {
            años = años - 1;
          }
        }

        if (mes > mes2 && (año > año2 || año === año2)) {
          meses = mes - mes2;
          if (dia2 > dia) {
            meses = meses - 1;
          }
        } else if (mes2 > mes && (año2 > año || año === año2)) {
          meses = mes2 - mes;
          if (dia > dia2) {
            meses = meses - 1;
          }
        } else if (mes > mes2 && (año2 > año || año === año2)) {
          meses = mes2 - mes + 12;
          if (dia > dia2) {
            meses = meses - 1;
          }
        } else if (mes2 > mes && (año > año2 || año === año2)) {
          meses = mes - mes2 + 12;
          if (dia2 > dia) {
            meses = meses - 1;
          }
        }

        if (dia > dia2 && (mes > mes2 || mes === mes2)) {
          dias = dia - dia2;
        } else if (dia2 > dia && (mes2 > mes || mes2 === mes)) {
          dias = dia - dia2 + 30;
        } else if (dia > dia2 && mes2 > mes) {
          if (mes2 === 2) {
            dias = dia2 - dia + 28;
          } else {
            dias = dia2 - dia + 30;
          }
        } else if (dia2 > dia && (mes > mes2 || mes2 === mes)) {
          if (mes === 2) {
            dias = dia - dia2 + 28;
          } else {
            dias = dia - dia2 + 30;
          }
        }

        return (
          'Entre el lanzamiento del juego ' +
          juego[0] +
          ' y el lanzamiento del juego ' +
          juego2[0] +
          ' hay ' +
          dias +
          ' días ' +
          meses +
          ' meses ' +
          años +
          ' años.'
        );
      }
    `,
    tasaExito: 87,
  },
  {
    id: 39,
    slug: "binario-a-decimal",
    titulo: "BINARIO A DECIMAL",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Convierte un número binario a su equivalente en decimal.
    `,
    ejemplo: "binarioADecimalManual('1011') = 11",
    codigo: `
      function binarioADecimalManual(binario) {
        if (!/^[01]+$/.test(binario)) {
          return 'Error: Ingresa solo números binarios (0 y 1)';
        }

        let decimal = 0;

        for (let i = 0; i < binario.length; i++) {
          // Si el dígito es 1, sumamos 2^posición
          if (binario[i] === '1') {
            decimal += Math.pow(2, binario.length - 1 - i);
          }
        }

        return decimal;
      }
    `,
    tasaExito: 90,
  },
  {
    id: 40,
    slug: "top-algoritmos-quick-sort",
    titulo: "TOP ALGORITMOS | QUICK SORT",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Implementa el algoritmo de ordenación Quick Sort.
    `,
    ejemplo: "",
    codigo: `
      function quickSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }

        const pivotIndex = Math.floor(arr.length / 2);
        const pivot = arr[pivotIndex];

        const left = [];
        const right = [];
        const equal = [];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else if (arr[i] > pivot) {
            right.push(arr[i]);
          } else {
            equal.push(arr[i]);
          }
        }

        return [...quickSort(left), ...equal, ...quickSort(right)];
      }
    `,
    tasaExito: 90,
  },
  {
    id: 41,
    slug: "triangulo-de-pascal",
    titulo: "TRIÁNGULO DE PASCAL",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Genera el triángulo de Pascal hasta una fila dada.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function pascalTriangle(n) {
        let triangle = [];
        for (let i = 0; i < n; i++) {
          triangle[i] = [1];
          for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
          }
          if (i > 0) triangle[i][i] = 1;
        }
        return triangle;
      }
    `,
    tasaExito: 95,
  },
  {
    id: 42,
    slug: "la-ley-de-ohm",
    titulo: "LA LEY DE OHM",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Calcula la resistencia, voltaje o corriente usando la ley de Ohm.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function leyDeOhm() {
        console.log('=== CALCULADORA LEY DE OHM ===');
        console.log('1. Calcular Voltaje (V = I × R)');
        console.log('2. Calcular Corriente (I = V / R)');
        console.log('3. Calcular Resistencia (R = V / I)');

        const opcion = prompt('Elige una opción (1, 2 o 3):');

        if (opcion === '1') {
          const corriente = parseFloat(
            prompt('Ingresa la corriente (I) en Amperios:')
          );
          const resistencia = parseFloat(
            prompt('Ingresa la resistencia (R) en Ohms:')
          );

          if (isNaN(corriente) || isNaN(resistencia)) {
            console.log('Error: Ingresa valores numéricos válidos.');
            return;
          }

          const voltaje = corriente * resistencia;
          console.log('Voltaje (V) = ' + voltaje + ' Voltios');
        } else if (opcion === '2') {
          const voltaje = parseFloat(prompt('Ingresa el voltaje (V) en Voltios:'));
          const resistencia = parseFloat(
            prompt('Ingresa la resistencia (R) en Ohms:')
          );

          if (isNaN(voltaje) || isNaN(resistencia)) {
            console.log('Error: Ingresa valores numéricos válidos.');
            return;
          }

          if (resistencia === 0) {
            console.log('Error: La resistencia no puede ser 0.');
            return;
          }

          const corriente = voltaje / resistencia;
          console.log('Corriente (I) = ' + corriente + ' Amperios');
        } else if (opcion === '3') {
          const voltaje = parseFloat(prompt('Ingresa el voltaje (V) en Voltios:'));
          const corriente = parseFloat(
            prompt('Ingresa la corriente (I) en Amperios:')
          );

          if (isNaN(voltaje) || isNaN(corriente)) {
            console.log('Error: Ingresa valores numéricos válidos.');
            return;
          }

          if (corriente === 0) {
            console.log('Error: La corriente no puede ser 0.');
            return;
          }

          const resistencia = voltaje / corriente;
          console.log('Resistencia (R) = ' + resistencia + ' Ohms');
        } else {
          console.log('Opción inválida. Elige 1, 2 o 3.');
        }
      }
    `,
    tasaExito: 95,
  },
  {
    id: 43,
    slug: "conversor-de-temperatura",
    titulo: "CONVERSOR DE TEMPERATURA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Convierte temperaturas entre diferentes escalas como Celsius, Fahrenheit y Kelvin.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function convertirTemperatura(valor, escalaOrigen, escalaDestino) {
        if (isNaN(valor)) {
          return 'Error: Ingresa un valor numérico válido';
        }

        let celsius;

        switch (escalaOrigen.toUpperCase()) {
          case 'C':
          case 'CELSIUS':
            celsius = valor;
            break;
          case 'F':
          case 'FAHRENHEIT':
            celsius = ((valor - 32) * 5) / 9;
            break;
          case 'K':
          case 'KELVIN':
            celsius = valor - 273.15;
            break;
          default:
            return 'Error: Escala de origen no válida (usa C, F o K)';
        }

        switch (escalaDestino.toUpperCase()) {
          case 'C':
          case 'CELSIUS':
            return celsius;
          case 'F':
          case 'FAHRENHEIT':
            return (celsius * 9) / 5 + 32;
          case 'K':
          case 'KELVIN':
            return celsius + 273.15;
          default:
            return 'Error: Escala de destino no válida (usa C, F o K)';
        }
      }
    `,
    tasaExito: 90,
  },
  {
    id: 44,
    slug: "truco-o-trato",
    titulo: "TRUCO O TRATO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Simula un juego de truco o trato con decisiones aleatorias.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function trucoOTrato() {
    const opciones = ["¡Truco!", "¡Trato!"];
    const resultado = opciones[Math.floor(Math.random() * 2)];

    console.log("🎃 Alguien toca la puerta...");
    console.log("El niño dice: " + resultado);

    if (resultado === "¡Truco!") {
        const trucos = [
            "¡Boo! 👻",
            "¡Te voy a convertir en sapo! 🐸",
            "¡Dame dulces o te maldigo! 😈",
            "¡Cuidado con los zombies! 🧟"
        ];
        console.log(trucos[Math.floor(Math.random() * trucos.length)]);
        console.log("¡Le das dulces para que se vaya! 🍬");
    } else {
        const dulces = ["🍭", "🍬", "🍫", "🧃", "🍪", "🍩"];
        const dulceDado = dulces[Math.floor(Math.random() * dulces.length)];
        console.log("¡Trato! Te doy un " + dulceDado);
        console.log("El niño se va feliz 🎉");
    }
}
    `,
    tasaExito: 95,
  },
  {
    id: 45,
    slug: "bumeranes",
    titulo: "BUMERANES",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Detecta si una cadena es un bumerán (se lee igual al revés en partes).
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function esBoomeran(cadena) {
        const limpia = cadena.toLowerCase().replace(/[^a-záéíóúñ]/g, '');
    
        if (limpia.length < 3) return false;

        const mitad = Math.floor(limpia.length / 2);
        const izquierda = limpia.substring(0, mitad);
        const derecha = limpia.substring(limpia.length - mitad);

        return izquierda === derecha.split('').reverse().join('');
      }
    `,
    tasaExito: 90,
  },
  {
    id: 46,
    slug: "contenedor-de-agua",
    titulo: "CONTENEDOR DE AGUA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Encuentra la cantidad máxima de agua que puede contener un contenedor formado por barras de alturas variables.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function maxArea(height) {
        let izquierda = 0;
        let derecha = height.length - 1;
        let maxAgua = 0;

        while (izquierda < derecha) {
          const ancho = derecha - izquierda;
          const altura = Math.min(height[izquierda], height[derecha]);
          const aguaActual = ancho * altura;
        
          if (aguaActual > maxAgua) {
            maxAgua = aguaActual;
          }

          if (height[izquierda] < height[derecha]) {
            izquierda++;
          } else {
            derecha--;
          }
        }

        return maxAgua;
      }
    `,
    tasaExito: 90,
  },
  {
    id: 47,
    slug: "donde-esta-el-robot",
    titulo: "¿DÓNDE ESTÁ EL ROBOT?",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Simula el movimiento de un robot en una cuadrícula y determina su posición final.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function posicionFinalRobot(instrucciones) {
        let x = 0;
        let y = 0;
        const dir = instrucciones.toUpperCase();

        for (let i = 0; i < dir.length; i++) {
            if (dir[i] === 'N') y++;
            else if (dir[i] === 'S') y--;
            else if (dir[i] === 'E') x++;
            else if (dir[i] === 'O') x--;
        }

        return { x, y };
    }
    `,
    tasaExito: 95,
  },
  {
    id: 48,
    slug: "vocal-mas-comun",
    titulo: "VOCAL MÁS COMÚN",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Encuentra la vocal que más se repite en una cadena de texto.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function vocalMasRepetida(texto) {
        texto = texto.toLowerCase().replace(/[^a-záéíóúñ]/g, '')
        const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 }
        for (let char of texto) {
            if (conteo.hasOwnProperty(char)) {
                conteo[char]++
            }
        }
        let vocalMayor = null
        let max = 0
        for (let vocal in conteo) {
            if (conteo[vocal] > max) {
                max += conteo[vocal]
                vocalMayor = vocal
            }
        }
        return vocalMayor ? "La vocal más repetida es " + vocalMayor + " con " + max + " apariciones." 
                    : "No se encontraron vocales en el texto."
    }
    `,
    tasaExito: 95,
  },
  {
    id: 49,
    slug: "el-calendario-de-adevento-2022",
    titulo: "EL CALENDARIO DE ADEVIENTO 2022",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Genera un calendario de adviento con puertas numeradas del 1 al 24.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function abrirPuerta() {
        const numero = prompt("Elige una puerta del 1 al 24:")
        const mensajes = {
            1: "🎁 Hoy empieza la magia del Adviento.",
            2: "✨ Una sonrisa ilumina tu día.",
            3: "🎄 Recuerda compartir con quienes amas.",
            4: "☕ Un chocolate caliente nunca falla.",
            5: "🎶 Escucha tu canción navideña favorita.",
            6: "🍪 Galletas recién horneadas alegran la casa.",
            7: "📖 Lee un cuento navideño.",
            8: "🕯️ Enciende una vela y agradece.",
            9: "🎁 Haz un pequeño regalo a alguien especial.",
            10: "❄️ Disfruta del frío con alegría.",
            11: "🌟 Cree en la magia de la Navidad.",
            12: "🎄 Decora tu árbol con creatividad.",
            13: "💌 Escribe una carta a alguien querido.",
            14: "🍫 Date un gusto dulce.",
            15: "🎶 Canta un villancico.",
            16: "🎁 Haz una buena acción hoy.",
            17: "🌟 Mira las luces de la ciudad.",
            18: "☕ Comparte un café con un amigo.",
            19: "🎄 Haz una manualidad navideña.",
            20: "✨ Piensa en tus metas para el nuevo año.",
            21: "🎁 Regala tiempo a tu familia.",
            22: "🎶 Escucha música alegre.",
            23: "🍪 Prepara algo especial en la cocina.",
            24: "🎅 ¡Feliz Navidad!"
        }

        if (mensajes[numero]) {
            alert(mensajes[numero])
        } else {
            alert("Número inválido. Elige entre 1 y 24.")
        }
    }

    abrirPuerta()
    `,
    tasaExito: 95,
  },
  {
    id: 50,
    slug: "el-detector-de-handles",
    titulo: "EL DETECTOR DE HANDLES",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Detecta si una cadena contiene un handle válido (por ejemplo, @usuario).
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function contieneHandle(texto) {
        const regex = /@[a-zA-Z0-9_]+/g;
        const resultado = texto.match(regex);
        return resultado
            ? "Handle válido encontrado: " + resultado.join(", ")
            : "No se encontró ningún handle válido.";
      }
    `,
    tasaExito: 95,
  },
  {
    id: 51,
    slug: "la-encriptacion-de-karaca",
    titulo: "LA ENCRIPTACIÓN DE KARACA",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Implementa un cifrado simple basado en sustitución de caracteres.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function karacaEncrypt(texto) {
        const mapa = { a: "0", e: "1", i: "2", o: "2", u: "3" }
        const invertido = texto.split("").reverse().join("")
        const sustituido = invertido.replace(/[aeiou]/g, letra => mapa[letra])
        return sustituido + "aca"
      }
    `,
    tasaExito: 95,
  },
  {
    id: 52,
    slug: "el-reto-random",
    titulo: "EL RETO RANDOM",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Genera un número aleatorio dentro de un rango y realiza una operación básica con él.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      function ejecutarOperacion() {
        const min = parseInt(prompt("Ingresa el número mínimo del rango:"))
        const max = parseInt(prompt("Ingresa el número máximo del rango:"))
        const aleatorio = numeroAleatorio(min, max)

        const operacion = prompt("Elige la operación: suma, resta, multiplicacion o division")
        let resultado

        switch (operacion.toLowerCase()) {
          case "suma":
            resultado = aleatorio + 5
            alert("Número aleatorio: " + aleatorio + "\nOperación: " + aleatorio + " + 5 = " + resultado)
            break
          case "resta":
            resultado = aleatorio - 3
            alert("Número aleatorio: " + aleatorio + "\nOperación: " + aleatorio + " - 3 = " + resultado)
            break
          case "multiplicacion":
            resultado = aleatorio * 2
            alert("Número aleatorio: " + aleatorio + "\nOperación: " + aleatorio + " * 2 = " + resultado)
            break
          case "division":
            resultado = aleatorio / 2
            alert("Número aleatorio: " + aleatorio + "\nOperación: " + aleatorio + " / 2 = " + resultado)
            break
          default:
            alert("Operación no válida. Usa: suma, resta, multiplicacion o division.")
        }
      }

      ejecutarOperacion()
    `,
    tasaExito: 95,
  },
  {
    id: 53,
    slug: "el-famoso-fizz-buzz-v2",
    titulo: 'EL FAMOSO "FIZZ BUZZ" (v2)',
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Imprime números del 1 al 100, reemplazando múltiplos de 3 y 5 por 'Fizz' y 'Buzz'.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz")
        } else if (i % 3 === 0) {
          console.log("Fizz")
        } else if (i % 5 === 0) {
          console.log("Buzz")
        } else {
          console.log(i)
        }
      }
    `,
    tasaExito: 95,
  },
  {
    id: 54,
    slug: "el-lenguaje-hacker",
    titulo: 'EL "LENGUAJE HACKER"',
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Convierte texto normal a un estilo 'hacker' usando caracteres especiales o patrones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function hackerText(texto) {
        const mapa = {
          a: "4", b: "8", c: "<",
          d: "|)", e: "3", f: "ph",
          g: "9", h: "#", i: "1", j: "_|",
          k: "|<", l: "1", m: "/\\/\\",
          n: "/\\/", o: "0", p: "|*",
          q: "0_", r: "|2", s : "$",
          t: "7", u: "(_)", v: "\\/",
          w: "\\/\\/", x: "><", y: "/", z: '2'
        }

        return texto
          .toLowerCase()
          .split("")
          .map((char) => mapa[char] || char)
          .join("")
      }
    `,
    tasaExito: 90,
  },
  {
    id: 55,
    slug: "el-partido-de-tenis",
    titulo: "EL PARTIDO DE TENIS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Simula el conteo de un partido de tenis con lógica de 15, 30, 40 y ventaja.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function partidoTenis(jugadas) {
        let puntos = { jugador1: 0, jugador2: 0 }
        const marcador = ["0", "15", "30", "40"]

        for (let jugada of jugadas) {
          puntos[jugada]++

          if (puntos.jugador1 >= 3 && puntos.jugador2 >= 3) {
            if (puntos.jugador1 === puntos.jugador2) {
              console.log("Deuce")
            } else if (puntos.jugador1 === puntos.jugador2 + 1) {
              console.log("Ventaja jugador1")
            } else if (puntos.jugador2 === puntos.jugador1 + 1) {
              console.log("Ventaja jugador2")
            } else if (puntos.jugador1 >= puntos.jugador2 + 2) {
              console.log("Jugador1 gana el juego")
              break
            } else if (puntos.jugador2 >= puntos.jugador1 + 2) {
              console.log("Jugador2 gana el juego")
              break
            }
          } else {
            console.log("Jugador1: " + marcador[puntos.jugador1] + " - Jugador2: " + marcador[puntos.jugador2])
          }
        }
      }
    `,
    tasaExito: 90,
  },
  {
    id: 56,
    slug: "el-generador-de-contrasenas",
    titulo: "EL GENERADOR DE CONTRASEÑAS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Genera una contraseña aleatoria con longitud y caracteres personalizados.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function generarContrasena(longitud, incluirMayus, incluirNumeros, incluirSimbolos) {
        let caracteres = "abcdefghijklmnopqrstuvwxyz"
        if (incluirMayus) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (incluirNumeros) caracteres += "0123456789"
        if (incluirSimbolos) caracteres += "!@#$%^&*()-_=+[]{};:,.<>/?"

        let contrasena = ""
        for (let i = 0; i < longitud; i++) {
          const indice = Math.floor(Math.random() * caracteres.length)
          contrasena += caracteres[indice]
        }
        return contrasena
      }

      const longitud = parseInt(prompt("¿Qué longitud quieres para tu contraseña?"))
      const mayus = confirm("¿Quieres incluir mayúsculas?")
      const numeros = confirm("¿Quieres incluir números?")
      const simbolos = confirm("¿Quieres incluir símbolos especiales?")

      alert("Tu contraseña generada es:\n" + generarContrasena(longitud, mayus, numeros, simbolos))
    `,
    tasaExito: 90,
  },
  {
    id: 57,
    slug: "primo-fibonacci-y-par",
    titulo: "PRIMO, FIBONACCI Y PAR",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Clasifica un número como primo, fibonacci o par.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function esPrimo(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

function esFibonacci(n) {
  // Un número es Fibonacci si 5*n^2+4 o 5*n^2-4 es un cuadrado perfecto
  const esCuadrado = x => Number.isInteger(Math.sqrt(x))
  return esCuadrado(5 * n * n + 4) || esCuadrado(5 * n * n - 4)
}

function clasificarNumero(n) {
  if (esPrimo(n)) {
    return (n + "es primo")
  } else if (esFibonacci(n)) {
    return (n + " pertenece a la secuencia Fibonacci")
  } else if (n % 2 === 0) {
    return (n + "es par")
  } else {
    return (n + " no es primo, ni Fibonacci, y es impar")
  }
}
    `,
    tasaExito: 95,
  },
  {
    id: 58,
    slug: "hola-mundo",
    titulo: "¡HOLA MUNDO!",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Imprime 'Hola, Mundo!' con variaciones o en diferentes idiomas.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function holaMundoVariaciones() {
        const mensajes = [
          "Hola, Mundo!",       // Español
          "Hello, World!",      // Inglés
          "Bonjour, le monde!", // Francés
          "Hallo, Welt!",       // Alemán
          "Ciao, Mondo!",       // Italiano
          "Olá, Mundo!",        // Portugués
          "こんにちは、世界！",     // Japonés
          "안녕하세요, 세계!",       // Coreano
          "Привет, мир!",       // Ruso
          "مرحبا بالعالم!",      // Árabe
          "你好，世界！"           // Chino
        ]

        mensajes.forEach(mensaje => console.log(mensaje))
      }
    `,
    tasaExito: 90,
  },
  {
    id: 59,
    slug: "piedra-papel-tijera-lagarto-spock",
    titulo: "PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Implementa el juego extendido de Piedra, Papel, Tijera con nuevas reglas.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function jugar(opcionJugador) {
        const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"]
        const opcionCPU = opciones[Math.floor(Math.random() * opciones.length)]

        const reglas = {
          piedra: ["tijera", "lagarto"],
          papel: ["piedra", "spock"],
          tijera: ["papel", "lagarto"],
          lagarto: ["papel", "spock"],
          spock: ["tijera", "piedra"]
        }

        console.log("Jugador: " + opcionJugador)
        console.log("CPU: " + opcionCPU)

        if (opcionJugador === opcionCPU) {
          console.log("Empate")
        } else if (reglas[opcionJugador].includes(opcionCPU)) {
          console.log("¡Ganaste!")
        } else {
          console.log("Perdiste")
        }
      }

      const eleccion = prompt("Elige: piedra, papel, tijera, lagarto o spock").toLowerCase()
      jugar(eleccion)
    `,
    tasaExito: 90,
  },
  {
    id: 60,
    slug: "el-sombrero-seleccionador",
    titulo: "EL SOMBRERO SELECCIONADOR",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Asigna una casa de Hogwarts según características del usuario.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: `
      function sombreroSeleccionador() {
        const valiente = confirm("¿Te consideras valiente?")
        const estudioso = confirm("¿Te gusta aprender y estudiar?")
        const ambicioso = confirm("¿Eres ambicioso y buscas poder?")
        const leal = confirm("¿Valoras la amistad y la lealtad?")

        let casa

        if (valiente) {
          casa = "Gryffindor 🦁"
        } else if (estudioso) {
          casa = "Ravenclaw 🦅"
        } else if (ambicioso) {
          casa = "Slytherin 🐍"
        } else if (leal) {
          casa = "Hufflepuff 🦡"
        } else {
          casa = "El Sombrero está confundido... ¡tienes un poco de todas las casas!"
        }
        alert("¡Has sido asignado a " + casa + "!")
      }
    `,
    tasaExito: 90,
  },
  {
    id: 61,
    slug: "el-generador-pseudoaleatorio",
    titulo: "EL GENERADOR PSEUDOALEATORIO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Genera una secuencia de números pseudoaleatorios usando un algoritmo simple.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 62,
    slug: "heterograma-isograma-y-pangrama",
    titulo: "HETEROGRAMA, ISOGRAMA Y PANGRAMA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Clasifica un texto según si tiene todas letras únicas, repite letras o es pangrama.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 63,
    slug: "la-api-application-programming-interface",
    titulo: "LA API (APPLICATION PROGRAMMING INTERFACE)",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Simula el uso de una API consumiendo datos ficticios.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 64,
    slug: "parametros-url",
    titulo: "PARÁMETROS URL",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Extrae parámetros de una URL codificada.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 65,
    slug: "viernes-13",
    titulo: "VIERNES 13",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Cuenta cuántos días del año son viernes 13 en un año dado.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 66,
    slug: "adivina-la-palabra",
    titulo: "ADIVINA LA PALABRA",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Simula un juego de adivinar una palabra con pistas y intentos limitados.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 67,
    slug: "octal-y-hexadecimal",
    titulo: "OCTAL Y HEXADECIMAL",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Convierte números entre bases octal, hexadecimal y decimal.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 68,
    slug: "aurebesh",
    titulo: "AUREBESH",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Convierte texto a un alfabeto ficticio como el de Star Wars (Aurebesh).
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 69,
    slug: "la-escalera",
    titulo: "LA ESCALERA",
    nivel: 3,
    dificultad: "difícil",
    descripcion: dedent`
      Genera una escalera de caracteres con patrones específicos.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 70,
    slug: "git-y-github",
    titulo: "GIT Y GITHUB",
    nivel: 3,
    dificultad: "difícil",
    descripcion: dedent`
      Se trata de resolver un ejercicio relacionado con el uso de Git y GitHub, probablemente involucrando comandos avanzados o flujos de trabajo típicos de control de versiones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 71,
    slug: "web-scraping",
    titulo: "WEB SCRAPING",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El ejercicio consiste en extraer información de una página web utilizando técnicas de web scraping.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 72,
    slug: "analisis-de-texto",
    titulo: "ANÁLISIS DE TEXTO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe realizar un análisis estadístico o estructural sobre un texto dado, como contar frecuencias o identificar patrones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 73,
    slug: "la-trifuerza",
    titulo: "LA TRIFUERZA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El reto implica simular o resolver un problema relacionado con la Trifuerza de Zelda, posiblemente manipulando combinaciones o estructuras lógicas.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 87,
  },
  {
    id: 74,
    slug: "numeros-primos-gemelos",
    titulo: "NÚMEROS PRIMOS GEMELOS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se pide identificar o generar números primos gemelos, es decir, pares de primos que difieren en 2 unidades.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 75,
    slug: "la-espiral",
    titulo: "LA ESPIRAL",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El ejercicio requiere generar o trabajar con una matriz o secuencia que forme una espiral numérica.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 76,
    slug: "la-base-de-datos",
    titulo: "LA BASE DE DATOS",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Se debe simular o interactuar con una base de datos básica, posiblemente realizando consultas o inserciones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 77,
    slug: "cifrado-cesar",
    titulo: "CIFRADO CÉSAR",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El reto consiste en implementar el cifrado de César, un método de encriptación por desplazamiento de letras.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 93,
  },
  {
    id: 78,
    slug: "el-codigo-konami",
    titulo: "EL CÓDIGO KONAMI",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe detectar una secuencia específica de teclas, como el famoso código Konami, en una entrada.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 79,
    slug: "testing",
    titulo: "TESTING",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El ejercicio implica escribir pruebas unitarias o validar el comportamiento de un programa mediante testing.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 80,
    slug: "cuenta-atras",
    titulo: "CUENTA ATRÁS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe simular una cuenta regresiva, posiblemente con formato de tiempo o eventos.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 91,
  },
  {
    id: 81,
    slug: "expresion-matematica",
    titulo: "EXPRESIÓN MATEMÁTICA",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      El reto consiste en evaluar o validar una expresión matemática ingresada como cadena.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 96,
  },
  {
    id: 82,
    slug: "el-caracter-infiltrado",
    titulo: "EL CARÁCTER INFILTRADO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe identificar un carácter que aparece de forma inesperada en una cadena, posiblemente un intruso.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 83,
    slug: "el-teclado-t9",
    titulo: "EL TECLADO T9",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      El ejercicio requiere simular el funcionamiento de un teclado T9 para convertir pulsaciones en texto.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 94,
  },
  {
    id: 84,
    slug: "el-abaco",
    titulo: "EL ÁBACO",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe modelar o simular el funcionamiento de un ábaco para realizar operaciones aritméticas.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 87,
  },
  {
    id: 85,
    slug: "la-columna-de-excel",
    titulo: "LA COLUMNA DE EXCEL",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El reto implica convertir un número en la notación de columna de Excel (A, B, ..., Z, AA, AB, ...).
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 86,
    slug: "tetris",
    titulo: "TETRIS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe implementar una simulación básica del juego Tetris, manejando piezas y colisiones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 85,
  },
  {
    id: 87,
    slug: "txt",
    titulo: "TXT",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      El ejercicio consiste en leer o procesar un archivo de texto plano (TXT) para extraer información.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 97,
  },
  {
    id: 88,
    slug: "primeros-pasos",
    titulo: "PRIMEROS PASOS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe realizar una introducción práctica a conceptos básicos de programación o manejo de datos.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 92,
  },
  {
    id: 89,
    slug: "permutaciones",
    titulo: "PERMUTACIONES",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El reto requiere generar todas las permutaciones posibles de un conjunto de elementos.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 90,
    slug: "colores-hex-y-rgb",
    titulo: "COLORES HEX Y RGB",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe convertir entre códigos de color en formato hexadecimal y valores RGB.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 91,
  },
  {
    id: 91,
    slug: "las-sumas",
    titulo: "LAS SUMAS",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El ejercicio implica resolver o generar problemas de sumas, posiblemente en un formato específico.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
  {
    id: 92,
    slug: "triples-pitagoricos",
    titulo: "TRIPLES PITAGÓRICOS",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      Se debe encontrar o validar triples de números que cumplan el teorema de Pitágoras.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 95,
  },
  {
    id: 93,
    slug: "tabla-de-multiplicar",
    titulo: "TABLA DE MULTIPLICAR",
    nivel: 3,
    dificultad: "difícil",
    descripcion: dedent`
      El reto requiere generar una tabla de multiplicar completa, posiblemente con formato avanzado o condiciones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 83,
  },
  {
    id: 94,
    slug: "la-casa-encantada",
    titulo: "LA CASA ENCANTADA",
    nivel: 3,
    dificultad: "difícil",
    descripcion: dedent`
      Se debe simular una casa encantada, posiblemente resolviendo un puzzle o navegación lógica.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 82,
  },
  {
    id: 95,
    slug: "punto-de-encuentro",
    titulo: "PUNTO DE ENCUENTRO",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      El ejercicio consiste en determinar un punto de encuentro basado en condiciones dadas.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 96,
  },
  {
    id: 96,
    slug: "simulador-de-clima",
    titulo: "SIMULADOR DE CLIMA",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe crear un simulador simple que genere datos climáticos o prediga condiciones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 90,
  },
  {
    id: 97,
    slug: "adivinzanzas-matematicas",
    titulo: "ADIVINANZAS MATEMÁTICAS",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      El reto implica resolver o generar adivinanzas basadas en conceptos matemáticos.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 94,
  },
  {
    id: 98,
    slug: "el-calendario-de-adevento-2023",
    titulo: "EL CALENDARIO DE ADEVIENTO 2023",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      Se debe implementar un calendario de Adviento que muestre información día a día en diciembre.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 88,
  },
  {
    id: 99,
    slug: "la-carrera-de-coches",
    titulo: "LA CARRERA DE COCHES",
    nivel: 1,
    dificultad: "fácil",
    descripcion: dedent`
      El ejercicio simula una carrera entre coches, determinando ganadores o posiciones.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 93,
  },
  {
    id: 100,
    slug: "la-palabra-de-100-puntos",
    titulo: "LA PALABRA DE 100 PUNTOS",
    nivel: 3,
    dificultad: "difícil",
    descripcion: dedent`
      Se debe encontrar o construir una palabra que alcance 100 puntos según reglas de puntuación.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 84,
  },
  {
    id: 101,
    slug: "el-ranking",
    titulo: "EL RANKING",
    nivel: 2,
    dificultad: "medio",
    descripcion: dedent`
      El reto consiste en generar o gestionar un ranking basado en puntuaciones o criterios específicos.
    `,
    ejemplo: "Ejemplo no disponible",
    codigo: "",
    tasaExito: 89,
  },
];
