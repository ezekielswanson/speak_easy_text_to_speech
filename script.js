//Write the full program out in english first


/*

User inputs text
selects the voice
hits play
text plays in selected voice
*/



//Selecting inputs


const textInput = document.querySelector('#txt');  
const rateInput = document.querySelector('#rate');  
const pitchInput = document.querySelector('#pitch');  
const voiceOptions = document.querySelector('select');
const playBtn = document.querySelector('#play');

//Gives me access to the API
const speechSynth = window.speechSynthesis;

//need to load the voices in the array and access the voices in the event listener
let voices;

//Get voices function
function loadVoices() {

    //and assing the global value returns a list of voices from the system
    voices = speechSynth.getVoices();

    voices.forEach((voice, i) => {
        //console.log(voice);
        const options = document.createElement("option");
        options.textContent = `${voice.name} (${voice.lang})`;
        options.value = i;
        voiceOptions.append(options);
    });
        
}


 // in Google Chrome the voices are not ready on page load
if ("onvoiceschanged" in speechSynth) {
    speechSynth.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
  }





//could potentially pass in voices, pitch, etc, as a param here to use voice

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
  

    console.log('btn clicked');

    //see what values I can pass into the SpeechSynthesisUtterance()

    
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    console.log(utterance)
    console.log(voices);
    utterance.voice = voices[voiceOptions.value];
    speechSynth.speak(utterance);
    
    
})




/*


Purpose 
    -get text and play the speech back in the voice selected
input 
    -text input from user
    -selected voice type

outuput 
    -place the text in the selected voice



methods 
SpeechSynthesisUtterance 
 It contains the content the speech service
should read and information about how to read it (e.g. language, pitch and volume.)


properties 
SpeechSynthesisUtterance.pitch
Gets and sets the pitch at which the utterance will be spoken at.

SpeechSynthesisUtterance.rate
Gets and sets the speed at which the utterance will be spoken at.

SpeechSynthesisUtterance.text
Gets and sets the text that will be synthesized when the utterance is spoken.


*/





