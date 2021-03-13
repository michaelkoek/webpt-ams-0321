console.log('MY COOK BOOK');



// console.log('MY COOL CITY');

// const banktest = {
//     name: 'bank',
//     address: {
//         streetname: 'banklane 17',
//         postcode: '786234jdsf'
//     },
//     windows: 30,
//     public: true,
//     door: {
//         lock: true,
//         openingshours: [9, 17]
//     }
// }

// const myhouse = {
//     name: 'myhouse',
//     address: {
//         streetname: 'mainstreet 17',
//         postcode: '786234jdsf'
//     },
//     windows: 6,
//     public: false,
//     door: {
//         lock: true,
//     }
// }

// class GovernmentBuildings extends PublicBuilding {


//     Guarded() {
//         return true
//     }

// }

// class PublicBuilding extends Building {

//     displayOpeningsHours() {
//         alert(this.openingshours)
//     }

//     hasPublicKey() {
//         return '098sfdvkldvjsd98f7'
//     }


// }

// class PrivateBuilding  extends Building {
//     hasUniqueKey() {
//         return '89sd7f98sa07ffd0cxvixjvio234'
//     }
// }


// class Building {
//     constructor(name, address, window, publicArea, door) {
//         this.name = name;

//     }
// }

// const bank = new GovernmentBuildings(
//     'bank',
//     {
//         streetname: 'mainstreet 17',
//         postcode: '786234jdsf'
//     }, 
//     6,
//     true, 
//     {
//         lock: true,
//         openingshours: [9, 17]
//     }
// );

// console.log(banktest, bank)

const car1 = new Car('red');

class Car {

    setImage() {
        return  this.img = './images' + this.car
    }
}


const init = () => {
    startGame('./images/car1');
}

const startGame = (car) => {

    const dowhatever = car;
    /// do stuff


}

init();

