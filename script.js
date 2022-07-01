//Aqui voy a recuperar los datos del formulario HTML y ponerlos en un arreglo

registros =[];

function procesar () {
    const formulario= document.forms['datosVehiculo'];
    const registro = {
        //Vehicle Type
        "vehicleType": {
            "id" : formulario.elements[0].value,
        },
        "vehicleIdentificationNumber": formulario.elements[1].value,
        "engineNumber":  formulario.elements[2].value,
        "licensePlate" : formulario.elements[3].value,
        "color" : formulario.elements[4].value,
        
        //Public Registry
        "publicRegistry": {
            "id" : formulario.elements[5].value,
            "value":formulario.elements[6].value
        },
        //Crédito (si se envía el objeto es obligatorio lo de adentro)
        "vehiclePurchaseLoan": {
            "number": formulario.elements[7].value,
            "initialAmount": {
                "amount": formulario.elements[8].value,
                "currency": formulario.elements[9].value
            },
            "creditor": {
                "id": formulario.elements[10].value
            }
        },
        "IdCotCifraIdCotCifra" : formulario.elements[11].value, 
};
    //Aqui arriba accedo al objeto IdCotCifra... que esta dentro del objeto Registro
    console.log (registro.IdCotCifraIdCotCifra);    
    registros.push(registro);
    formulario.elements [0].focus[0];
    console.log(registros);
    
    formulario.reset();

    //let refresh = document.getElementById('refresh');
//refresh.addEventListener('click', _ => {
  //          location.reload();
//})
alert("Este es el JSON enviaremos al API: " + JSON.stringify(registros));


// Aqui pido el Token de authorización
let tokenAuth;
let tokenAuthJwt;
tokenAuth= prompt("Porfavor escribe el token (sin el 'jwt' ni espacios");
alert(tokenAuthJwt =("jwt " + tokenAuth));


// ***AQUI voy a consumir el API
  //1er Declaro variables para armar la URL
var urlejemplo = ('https://work-test-apis.bbvabancomer.com/vehicle-insurances/v1/quotations/HYnWQY8ITFv8_80kLKVqxVbP4qbMJoTt3p42ekRkuQc/additional-vehicle-data/1');
var urlBase= ('https://work-test-apis.bbvabancomer.com/vehicle-insurances/v1/quotations/');
// este es un ejemplo de un Id cifrado: HYnWQY8ITFv8_80kLKVqxVbP4qbMJoTt3p42ekRkuQc
var urlIdCotCifra = registro.IdCotCifraIdCotCifra;
console.log ("Id cifrado: " + urlIdCotCifra);
var urlInciso ="/additional-vehicle-data/1";
var urlCompleta = "Id cifrado:  "+ urlBase + urlIdCotCifra +urlInciso;
console.log("Id ejemplo:  " + urlejemplo);
console.log(urlCompleta);

//Consumo el API con un Fetch 
fetch (urlCompleta, {
  method: 'PATCH',
  body: JSON.stringify(registros), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json',
    'Authorization': 'tokenAuthJwt'}
})
.then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

}

