import alt from 'alt-client';
import * as native from 'natives';

let player = alt.Player.local;
let pos = { x: 4895.28, y: -5744.58, z: 26.351 };
loaded = false;

alt.setInterval(load_island, 1000)

function load_island() {
    let dist = native.getDistanceBetweenCoords(pos.x, pos.y, pos.z, player.pos.x, player.pos.y, player.pos.z, false);
    if (dist <= 2000 && !loaded) {
        native.setIplSetEnabled('HeistIsland', true);
        loaded = true;
    } 
    else if (dist > 2000 && loaded) {
        native.setIplSetEnabled('HeistIsland', false);
        loaded = false;
    }
}