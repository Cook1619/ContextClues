
var friends = ['Cody', 'Mike', 'Tom', 'Ahmed', 'Aaron'];
var locations = ['kitchen', 'office', 'foyer', 'balcony', 'Master Bedroom', 'Printshop', 'Warehouse', 'Roof', 'Parking lot', 'Pipe Shop'];
var weapons = ['pencil', 'knife', 'rubix cube', 'dymo printer', 'macbook', 'cell phone', 'dot-matrix printer', 'coffee cup', 'usb', 'mouse', 'keyboard', 'clock', 'credit departments dreams', 'coat hanger', 'tablet', 'compressed air', 'isopropyl alcohol', 'stapler', 'power strip', 'mini fridge'];


for (var i = 0; i <= 100; i++) {
    if (i === 100) {
        var h3text = document.createTextNode('Accusation ' + [i]);
    } else {
        h3text = document.createTextNode('Accusation ' + [i] + ', ');
    }
    var h3 = document.createElement('h3');
    h3.appendChild(h3text);
    document.body.appendChild(h3);
    h3.addEventListener("click", alertIt(i,friends, locations, weapons));
}

function alertIt(i, friends, locations, weapons) {
    return function(){
        alert(`Accusation ${i}: I accuse ${friends[i%5]}, with the ${weapons[i%10]} in the ${locations[i%5]}!!`)
    }
}
