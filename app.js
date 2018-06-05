
var friends = ['Cody', 'Mike', 'Tom', 'Ahmed', 'Aaron'];
var locations = ['kitchen', 'office', 'foyer', 'balcony', 'Master Bedroom', 'Printshop', 'Warehouse', 'Roof', 'Parking lot', 'Pipe Shop'];
var weapons = ['pencil', 'knife', 'rubix cube', 'dymo printer', 'macbook', 'cell phone', 'dot-matrix printer', 'coffee cup', 'usb', 'mouse', 'keyboard', 'clock', 'credit departments dreams', 'coat hanger', 'tablet', 'compressed air', 'isopropyl alcohol', 'stapler', 'power strip', 'mini fridge'];

var randFriends = friends[Math.floor(Math.random() * friends.length)];
var randLocs = locations[Math.floor(Math.random() * locations.length)];
var randWeaps = weapons[Math.floor(Math.random() * weapons.length)];

for (var i = 0; i < 101; i++) {
    if (i === 100) {
        var h3text = document.createTextNode('Accusation ' + [i]);
    } else {
        h3text = document.createTextNode('Accusation ' + [i] + ', ');
    }
    var h3 = document.createElement('h3');
    h3.appendChild(h3text);
    document.body.appendChild(h3);
    h3.addEventListener("click", alertIt);
}

function alertIt() {
    alert(`I accuse ${randFriends}, with the ${randWeaps} in the ${randLocs}!!`)
}
