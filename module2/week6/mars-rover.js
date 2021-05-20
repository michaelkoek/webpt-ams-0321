// Rover object goes here:
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
    ]
};

const commandsTypes = {
    move: ['f', 'b'],
    turn: ['l', 'r']
}


// Conditions [Just a visual representation of the directions]
// N: { LEFT: W, RIGHT: E}
// E: { LEFT: N, RIGHT: S}
// S: { LEFT: E, RIGHT: W}
// W: { LEFT: S, RIGHT: N}

const turnDirection = {
    N: { l: 'W', r: 'E'},
    E: { l: 'N', r: 'S'},
    S: { l: 'E', r: 'W'},
    W: { l: 'S', r: 'N'},
}

const turnRover = (direction) => {
    // console.log('turn', direction, turnDirection[rover.direction][direction])
    /**
     * turnDirection[rover.direction][direction]
     * turnDirection = the Object 
     * rover.direction = the value of the current direction of the rover
     * direction = direction we are passing to it
     */
    rover.direction = turnDirection[rover.direction][direction];
}

const checkDirection = (direction) => {
    const roverDirection = rover.direction; // 'N'
    const movePosition = direction === 'f' ? -1 : +1;
    const xaxes = roverDirection === 'W' || roverDirection === 'E';
    const yaxes = roverDirection === 'N' || roverDirection === 'S';

    // const moveX = xaxes ? (rover.x) + movePosition : rover.x;
    // const moveY = yaxes ? (rover.y) + movePosition : rover.y;

    return {
        x: xaxes ? rover.x = (rover.x) + movePosition : rover.x, 
        y: yaxes ? rover.y = (rover.y) + movePosition : rover.y,
    }
}

const moveRover = (direction) => {
    // If there is not travelog
    if (!rover.travelLog.length) {
        rover.travelLog.push({ x: 0, y: 0 })
    }
    const lastLog = rover.travelLog[rover.travelLog.length - 1];
    console.log(lastLog);

    console.log(checkDirection(direction));
    rover.travelLog.push(checkDirection())
}

/**
 * Mars Rover function
 * @args string
 */
const marsRoverCommands = (directions) => {
    const direc = [...directions]
    direc.forEach(dir => {
        if (commandsTypes.turn.includes(dir)) {
            turnRover(dir)
        } else if (commandsTypes.move.includes(dir)) {
            moveRover(dir)
        } else {
            console.log('Use a proper command')
        }
    })

    console.log(rover)
}

marsRoverCommands('rfbfrfflfbrff')

console.log(rover.travelLog)

// EXAMPLE OF Deep value object
// const person = {
// 	name: 'michael',
//     age: 23,
//     address: {
//     	city: 'haarlem'
//     }
// }

// const check = 'address'
// const myCity = 'city'

// console.log(person[check][myCity])
