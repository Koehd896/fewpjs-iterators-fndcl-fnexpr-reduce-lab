const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function incrementor(previous, current) {
    return previous += current;
}

const totalBatteries = batteryBatches.reduce(incrementor, 0);