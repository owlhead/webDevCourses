( function(window) {
  
  // define helloSpeaker object
  var helloSpeaker = {};

  // define greeting variable
  var speakWord = "Hello";

  // attach method speak to helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // expose byeSpeaker object to global scope
  window.helloSpeaker = helloSpeaker;

})(window);
