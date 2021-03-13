async function sayJoke(apiUrl, jokeId) {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      const jokes = result.jokes;
      const findJoke = jokes.find(joke => joke.id === jokeId);
      
      if (!findJoke) {
       new Error(`No jokes found id: ${jokeId}`)
      }
          
      return {
        saySetup: () => {
          return findJoke.setup
        },
        sayPunchLine: function() { 
          return findJoke.punchLine
        }
      }
  
      
    } catch(err) {
      new Error(`No jokes at url: ${apiUrl}`)
    }
  }
  
  sayJoke('http://great.jokes/christmas', 10)

//  ADJUSTED CODE FOR JSFIDDLE
  async function sayJoke(apiUrl, jokeId) {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      const jokes = result;
        const findJoke = jokes.find(joke => joke.id === jokeId);
      console.log(findJoke);
  
      if (!findJoke) {
        console.log('not found')
        return new Error(`No jokes found id: ${jokeId}`)
      }
      
      console.log('hallo')
  
      return {
        saySetup: () => {
          return findJoke.name
        },
        sayPunchLine: function() {
          return findJoke.username
        }
      }
    } catch (err) {
      console.error(`No jokes at url: ${apiUrl}`, err)
    }
  }
  
  
  const myJoke = sayJoke('https://jsonplaceholder.typicode.com/user', 11)
  
  myJoke
    .then(res => console.log('res', res))
    .catch(err => console.error('my error', err))
  
  
  