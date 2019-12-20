const moo = require('./moo');

const eyeText = process.argv[2];
const tongueText = process.argv[3];
const speechText = process.argv.slice(4).join(' ');

const talkingCow = moo(speechText, eyeText, tongueText);

console.log(talkingCow);