

(() => {

    // Definición de una enumeración en TypeScript
    /*enum AudioLevel {
        min, // 0
        medium, // 1
        max // 2
    }*/

    // Definición de una enumeración en TypeScript
    enum AudioLevel {
        min = 1,
        medium, // 2
        max = 10
    }

    console.log(AudioLevel);

    let currentAudio: AudioLevel = AudioLevel.medium;
    console.log(currentAudio);

    currentAudio = 10; // max
    console.log(currentAudio);

})();