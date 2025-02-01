//Selecting inputs


const textInput = document.querySelector('#txt');  
const rateInput = document.querySelector('#rate');  
const pitchInput = document.querySelector('#pitch');  





const speechSynth = window.speechSynthesis;


speechSynth.getVoices().forEach(voice => console.log(voice.name))



