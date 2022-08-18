

// Funciones ******************************

// function suma(n1,n2) {
//     n1 = parseInt(prompt("numero1"));
//     n2 = parseInt(prompt("numero2"));
//     res =  n1 + n2;
//     return res
    
// }


// suma();
// let resultado = res;
// document.write(resultado);



// Problema con funciones *********************************
// let free = false;

// const validaCliente = (time)=>{
//     let edad = prompt("¿Cual es tu edad?");
//     if ( edad >= 18){
//         if (time >= 2 && time < 7 && free == false){
//             alert("Puedes a entrar gatis")
//             free = true;

//         }else{
//             alert("No puedes pasar, gratis")
//         }
//     } else {
//         alert("Eres menor de edad sorry")
//     }
// }

// validaCliente(3)
// validaCliente(4)

// CONSTANTES**********************

// const suma = ()=>{

// }



// Objeto ***********************************************************

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Color: ${this.especie}<br> Edad: ${this.edad}<br> Color: ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info);
//     }
    
// }

// Herencia ******************************

// class Perro extends Animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color)
//         this.raza = raza;
//     }
//     // Metodo static "Permite ocupar metodos sin estar intaciado el objeto"***********
//     static ladrar(){
//         document.write("WAW");
//     }
//     // Metodosd SET Canbiar informacion **********
//     set setRaza(newName){
//         this.raza = newName;
//     }
//     // Metodo GET Rescatar valores ***************
//     get getRaza(){
//         return this.raza;
//     }

// }

// const perro = new Perro("perro",5,"negro","doberman");
// const gato = new Animal("gato",5,"rojo");
// const pajaro = new Animal("ave",5,"rojo");

// perro.setRaza = "gato";

// document.write(perro.getRaza);

// Fin objetos **************************************

// Problema de Objetos *****************************************

// class Celular{
//     constructor(nombre,color,peso,resPantalla,resCamara,ram){
//         this.nombre = nombre;
//         this.color = color;
//         this.peso = peso;
//         this.resPantalla = resPantalla;
//         this.resCamara = resCamara;
//         this.ram = ram;
//         this.encendido = false;
//     }
//     infoCelular(){
//         return`<b>${this.nombre}</b></br>
//         Color: ${this.color}</br>
//         Peso: ${this.peso}<br>
//         Resolucion de Pantalla: ${this.resPantalla}</br>
//         Resolucion de Camara: ${this,this.resCamara}</br>
//         Ram:${this.ram}</br>`;
        
        
//     }
//     prender(){
//         if (this.encendido == false){
//             alert("Celular Prendiendo");
//             this.encendido = true;

//         }else{
//             alert("Celular ya encendido");
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true){
//             alert("ReiniciandoCelular");
//             this.encendido = true;

//         }else{
//             alert("No se puede reiniciar");
//         }
//     }
//     tomarFoto(){
//         alert(`Tomar foto en una resolucion de ${this.resCamara}`);
//     }
//     grabarVideo(){
//         alert(`Grabar video en resolucion ${this.resCamara}`);
//     }


// }

// class CelularAltaGama extends Celular{
//     constructor(nombre,color,peso,resPantalla,resCamara,ram,rce){
//         super(nombre,color,peso,resPantalla,resCamara,ram)
//         this.rce = rce;
//     }
//     grabarVideoLento(){
//         alert("Estas en camara lenta");
//     }
//     reconocimientoFacial(){
//         alert("Vamos a reconocer las cara");
//     }
//     altaGamaInfo(){
//         return this.infoCelular() + `Resolucion Extra: ${this.rce}`;
//     }

// }

// const celular1 = new Celular("celular1","azul","40g","800x200px","full hd","2GB");
// const celular2 = new Celular("celular2","rojo","40g","800x200px","full 2k","3GB");
// const celular3 = new CelularAltaGama("celular3","rosado","30g","400x200px","full 4k","8GB","si");

// document.write(`${celular1.infoCelular()}</br>
// ${celular2.infoCelular()}</br>
// ${celular3.altaGamaInfo()}`);

// Fin de problema *****************************************