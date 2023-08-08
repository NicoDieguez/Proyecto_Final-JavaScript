

 
//variables
let subtotal = 0;
let producto = 0;
const remeraoversize =3999;
const jean = 5499;
const vestidoslimfit = 12999;
const camperabomber = 17999;
const hoodieestampado = 6499;
let cantidadordenada1 = 0, cantidadordenada2 = 0, cantidadordenada3 = 0, cantidadordenada4 = 0, cantidadordenada5 = 0;
let subtotal1 = 0, subtotal2 = 0, subtotal3 = 0, subtotal4 = 0, subtotal5 = 0;
let cantidadproducto1 = 0, cantidadproducto2 = 0, cantidadproducto3 = 0, cantidadproducto4 = 0, cantidadproducto5 = 0;
//--------------------------------------------------------------------------------------------------------

// Funciones
   function totalproducto (num1, num2) {
    let resultadototalproducto = (parseFloat(num1) * parseFloat(num2));
    return resultadototalproducto;
   }

   function obtenercantidad() {
     let numero = false
       while (!numero){
        let cantidad = parseFloat (prompt("Escribe el NUMERO de cantidad para el producto:"));
        let cantidadnumero = !isNaN (cantidad);
        if (cantidadnumero && (cantidad > 0)) {
            return cantidad;
        }
       }
   }

//--------------------------------------------------------------------------------------------------------
let nombredeusuario = prompt ("Ingrese su nombre");

let ubicacion = prompt ("Escriba la direccion de entrega para el pedido a realizar. En caso de no querer realizar pedido, simplemente continuar.")

alert ("Bienvenido/a " + nombredeusuario + " a Eredita, la marca de ropa preferida por las mujeres.  \nLa siguiente, es una lista de nuestros productos y sus precios. \nLos mismos se le requeriran en unos instantes en casa de que quiera obtenerlos. \n\n 1 - Remera Oversize.......$3999 \n 2 - Jean.......$5499 \n 3 - Vestido Slim Fit.......$12999 \n 4 - Campera Bomber.......$17999 \n 5 - Hoodie Estampado.......$6499");

do {
    producto = parseFloat( prompt ("Ingrese el numero en la lista correspondiente al articulo que desea comprar. Para finalizar la compra presione 0"));

    switch (producto) {
        case 1:
            cantidadproducto1 = obtenercantidad();
            subtotal1+= (cantidadproducto1 * remeraoversize);
            cantidadordenada1+= cantidadproducto1;
        break;
        case 2:
            cantidadproducto2 = obtenercantidad();
            subtotal2+= (cantidadproducto2 * remeraoversize);
            cantidadordenada2+= cantidadproducto2;
        break;   
        case 3:
            cantidadproducto3 = obtenercantidad();
            subtotal3+= (cantidadproducto3 * remeraoversize);
            cantidadordenada3+= cantidadproducto3;
        break;
        case 4:
            cantidadproducto4 = obtenercantidad();
            subtotal4+= (cantidadproducto4 * remeraoversize);
            cantidadordenada4+= cantidadproducto4;
        break;
        case 5:
            cantidadproducto5 = obtenercantidad();
            subtotal5+= (cantidadproducto5 * remeraoversize);
            cantidadordenada5+= cantidadproducto5;
        break;
    
        case 0:
            alert("Muchas gracias " + nombredeusuario +  " por su visita a Eredita. \nSu orden es: \n - Remera Oversize.....x" + cantidadordenada1 + "     $" + subtotal1 + "\n- Jean................x"  + cantidadordenada2 + "     $" + subtotal2 + "\n- Vestido Slim Fit....x"  + cantidadordenada3 + "     $" + subtotal3 + "\n- Campera Bomber....x"  + cantidadordenada4 + "     $" + subtotal4 + "\n- Hoodie Estampado....x"  + cantidadordenada5 + "     $" + subtotal5 + "\n\n||| -- TOTAL..............................$" + (subtotal1 + subtotal2 + subtotal3 + subtotal4 + subtotal5) + "\n\nSu compra llegara en un plazo de 1 semana a " + ubicacion + ". Saludos desde tu tienda preferida.");
            break;
      default:
        alert ("El numero ingresado no coincide con ningun producto, porfavor reintentar, o en caso de querer salir, recuerde ingresar el numero 0.");
    }}
    while(producto!=0);



    

 console.log (nombredeusuario); 
 console.log (ubicacion);
 console.log (listadocompra);






