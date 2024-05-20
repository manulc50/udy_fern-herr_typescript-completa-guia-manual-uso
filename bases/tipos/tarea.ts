(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum FuerzaHeroes {
      acuaman = 0,
      batman = 1,
      superman = 100,
      flash = 5
    }

    const fuerzaFlash: FuerzaHeroes = FuerzaHeroes.flash;
    const fuerzaSuperman: FuerzaHeroes = FuerzaHeroes.superman;
    const fuerzaBatman: FuerzaHeroes = FuerzaHeroes.batman;
    const fuerzaAcuaman: FuerzaHeroes = FuerzaHeroes.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string {
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );  
  
  })()
  
  