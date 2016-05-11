

var synth = new Tone.SimpleSynth().toMaster();

//loop between the first and fourth measures of the Transport's timeline

var notes = ["C3", "C4", "D#3","F3", "F#3", "G3", "G#3", "A#3", "C4", "D#4", "F4", "F#4", "G4", "G#4", "A4"]
var c = document.getElementById("area");
var ctx = c.getContext("2d");
var dur = ['4n', '8n' , '16n', '32n'];
var colors = ['#FF7B77', '#E86D9E' , '#FF84F3', '#CD6DE8', '#BC77FF'];
var pattern = new Tone.Pattern(function(time, note){
    synth.triggerAttackRelease(note, 0.25);
}, ["C4", "E4", "G4", "A4"]);

pattern.start(0);
Tone.Transport.start();
function start(){
    var oneNote = notes[getRandom(0,notes.length-1)];
    var color = colors[getRandom(0,colors.length-1)];
    var duration = dur[getRandom(0,dur.length-1)];
    console.log("note is " + oneNote);
    oneNote = notes[getRandom(0,notes.length-1)];
    // synth.triggerAttackRelease(oneNote, duration);
    synth.triggerAttackRelease(oneNote, '4n');

    for(i=0;i<3;i++){
        ctx.beginPath();    
        ctx.globalAlpha=Math.random();
        ctx.arc(getRandom(100,900), getRandom(100,900), getRandom(10,80), 0 ,2*Math.PI); 
        ctx.fillStyle = color;
        ctx.fill();
    }
    
    
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}