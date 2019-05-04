window.onload = function() {
    var para_ = document.getElementsByClassName('content_text');
    var file = new XMLHttpRequest();
    file.open('GET', 'lorem_ipsum_400.txt', true);
    file.onreadystatechange = function() {
        if (file.readyState === 4 ) { // make sure the document is ready to parse
            var text_ = file.responseText;
            
            text_ = text_.split('\n').join('<br>');

            for (i = 0; i < para_.length; i++){
                para_[i].innerHTML = text_;
            }
        }
    };
    file.send(null);
};