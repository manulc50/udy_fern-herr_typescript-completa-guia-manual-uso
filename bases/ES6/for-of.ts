
(() => {

    // Definimos el tipo de dato "Avenger"
    type Avenger = {
        name: string;
        weapon: string;
    };

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };

    const capitanAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'
    };

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };

    const avengers: Avenger[] = [ironman, thor, capitanAmerica];

    // Bucle for tradicional
    for (let i = 0; i < avengers.length; i++) {
        const avenger = avengers[i];
    }

    // Bucle for-of(a partir del ES6)
    for(const avenger of avengers) {
        console.log( avenger );
    }

})();