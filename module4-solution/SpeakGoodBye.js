(function(window){
var byeSpeaker = {};
byeSpeaker.speak=function(name) {
  speakWord="Good Bye";
  console.log(speakWord + " " + name);
}
window.byeSpeaker=byeSpeaker;
})(window);