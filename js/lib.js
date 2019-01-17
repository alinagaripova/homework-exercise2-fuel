export function calculateDistance(volume, consumption) {
    let distance = volume /(consumption / 100);

    // return Math.round(distance);
    return distance;
}

