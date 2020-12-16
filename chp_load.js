import alt from 'alt-client';
import * as native from 'natives';

let player = alt.Player.local;
let pos = { x: 4895.28, y: -5744.58, z: 26.351 };
let status = false;

alt.setInterval(load_island, 0)

function load_island() {
    let dist = native.getDistanceBetweenCoords(pos.x, pos.y, pos.z, player.pos.x, player.pos.y, player.pos.z, false);
    if (dist <= 2000){
        native.setIplSetEnabled('HeistIsland', true);
    }
    if (dist > 2000){
        native.setIplSetEnabled('HeistIsland', false);
    }

}
