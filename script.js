//Selecting inputs


const textInput = document.querySelector('#txt');  
const rateInput = document.querySelector('#rate');  
const pitchInput = document.querySelector('#pitch');  




//Gives me access to the API
const speechSynth = window.speechSynthesis;

//Voices function

/*
store voice in array
loop through voices


*/

speechSynth.addEventListener("voiceschanged", () => {

    //On the speech synt object get voices methdo and store in var
    //how do I read docuemnation to see what methods I need, etc
    const voices = speechSynth.getVoices();
    speechSynth.getVoices().forEach(voice => console.log(voice.name))

})






