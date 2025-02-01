//Selecting inputs


const textInput = document.querySelector('#txt');  
const rateInput = document.querySelector('#rate');  
const pitchInput = document.querySelector('#pitch');  





console.log(window)


const speechSynth = window.speechSynthesis;


speechSynth.getVoices().forEach(voice => console.log(voice.name))



