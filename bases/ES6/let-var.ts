
// Hoy en día se recomienda usar "let" en vez de "var" para declarar variables en JavaScript y TypeScript
// "var" sólo se debe usar de manera forzosa si se necesita que el código tenga compatibilidad con navegadores antiguos
// Las variables declaradas con "var" en el ámbito global de la aplicación(no aquellas declaradas de forma aislada dentro de funciones auto-invocadas como en este caso) se almacenana como propiedades en el objeto global o principal "window"
// Además, a veces, las variables declaradas con "var" tienen comportamientos extraños
// También es recomendable y una buena práctica usar constantes en lugar de variables como primera opción a no ser que sea estrictamente necesario cambiar o modificar valores

(() => {
    //var saludo: string = "hola";
    //let saludo: string = "hola";
    const saludo: string = "hola"; // Mejor usar "const" que "let" ya que, en este caso, no es necesario modificar valores de "saludo" 

    console.log(saludo);

})();