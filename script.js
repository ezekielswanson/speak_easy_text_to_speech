//Selecting inputs


const textInput = document.querySelector('#txt');  
const rateInput = document.querySelector('#rate');  
const pitchInput = document.querySelector('#pitch');  
const voiceOptions = document.querySelector('selector')

console.log(voiceOptions)




//Gives me access to the API
const speechSynth = window.speechSynthesis;

//Voices function

/*
get these list of voice
    Samantha
    script.js:30 Aaron
    script.js:30 Albert
    script.js:30 Alice
    script.js:30 Alva
    script.js:30 Amélie
    script.js:30 Amira
    script.js:30 Anna
    script.js:30 Arthur
    script.js:30 Bad News
    script.js:30 Bahh
    script.js:30 Bells

-store & display those voice in the seelect tag
-voices only display when an on voiceschanged event occurs






*/

speechSynth.addEventListener("voiceschanged", () => {

    //On the speech synt object get voices methdo and store in var
    //how do I read docuemnation to see what methods I need, etc
    //a method generall retunrs somehting so that's why we store in var?
    //update this code
    const voices = speechSynth.getVoices();
    speechSynth.getVoices().forEach(voice => console.log(voice.name))

})






