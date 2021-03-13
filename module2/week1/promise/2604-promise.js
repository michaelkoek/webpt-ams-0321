const beers = ['Ijwit', 'Jopen', 'Mannen Liefde', 'Zatte'];
const beer = {
	name: 'Nitwit',
  breweryName: 'Brouwerij de Eeuwige Jeugd',
  beerstyle: 'blond',
  alcohol: 6.5,
  consumption: [
  	'BBQ', 'Terras', 'Tasting'
  ],
  tastes: ['fruity'],
}

const [eiwot, ...remainingValues] = beers;
const { name, consumption: conp, ...rest } = beer
console.log('=>>', rest)

// FROM A FUNCTION
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
}

 getData().then(res => console.log(res))
 //** */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  myPromise.then(response => console.log(response))
  
  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('baz');
    }, 6000);
  });
  
  
  const myPromise3 = new Promise((resolve, reject) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => fnDoesntExcist(json))
      .then(res => console.log('yea', res))
      .catch(err => console.error('error!', err))
  });
  
  // resolve all promises
  Promise.all([myPromise, myPromise2, myPromise3])
    .then(res => res)
    .then(result => result.map(item => item + 's'))
    .then(res => console.log(res))
  

// TASK
// PRINT DATA TO HTML
// HTML: <div id="text"></div>
const elemt = document.getElementById('text');
const getData = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(res => res.json())
    .then(res => {
    	let html = '';
        res.forEach((el, index) => {
      	html += `<p>${index + 1}:${el.name}</p>`
      })
      elemt.innerHTML = html
    })
}

getData()

