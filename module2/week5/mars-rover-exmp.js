// Rover object goes here:

const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{ x: 0, y: 0 }]
  };
  
  // Rover turning left direction:
  
  function turnLeft(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
    }
    console.log("turnLeft was called!");
    console.log(`Rover is now facing ${rover.direction}`);
  }
  
  // Rover turning right direction:
  
  function turnRight(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
    }
    console.log("turnRight was called!");
    console.log(`Rover is now facing ${rover.direction}`);
  }
  
  // Rover moving forward:
  
  function moveForward(rover) {
    switch (rover.direction) {
      case "N":
        if (rover.y === 0 || rover.y > 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.y--;
        }
        break;
      case "S":
        if (rover.y < 0 || rover.y === 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.y++;
        }
        break;
      case "W":
        if (rover.x === 0 || rover.x > 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.x--;
        }
        break;
      case "E":
        if (rover.x < 0 || rover.x === 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.x++;
        }
        break;
    }
    console.log("moveForward was called");
    console.log(`Rover position ==> x${rover.x}, y${rover.y}`);
  
    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  }
  
  // Rover moving backward:
  
  function moveBackward(rover) {
    switch (rover.direction) {
      case "N":
        if (rover.y < 0 || rover.y === 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.y++;
        }
        break;
      case "S":
        if (rover.y === 0 || rover.y > 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.y--;
        }
        break;
      case "W":
        if (rover.x < 0 || rover.x === 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.x++;
        }
        break;
      case "E":
        if (rover.x === 0 || rover.x > 9) {
          console.log("Rover can't leave the grid!");
        } else {
          rover.x--;
        }
        break;
    }
    console.log("moveBackward was called");
    console.log(`Rover position ==> x${rover.x}, y${rover.y}`);
  
    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  }
  
  //Commands to move the rover:
  
  function command(orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch (order) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        default:
          console.log("Invalid input, please use f,b,l or r");
      }
    }
  }
  
  command("rffrfflfrff");
  
  console.log(rover.travelLog);
  