(function(window){

  // define byeSpeaker object
  var byeSpeaker = {};

  // define greeting variable
  var speakWord = "Good Bye";

  // attach method speak to byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // expose byeSpeaker object to global scope
  window.byeSpeaker = byeSpeaker;

})(window);
