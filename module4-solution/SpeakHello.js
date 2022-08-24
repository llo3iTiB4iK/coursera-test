(function(window){
var helloSpeaker = {};
helloSpeaker.speak=function(name) {
  speakWord="Hello";
  console.log(speakWord + " " + name);
}
window.helloSpeaker=helloSpeaker;
})(window);