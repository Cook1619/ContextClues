h3 = document.createElement('h3');

for(var i = 0; i < 101; i++){
    h3text = document.createTextNode('Accusation ' + [i]);
}
h3.appendChild(h3text);
document.body.appendChild(h3);