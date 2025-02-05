const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')


const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

let secret
let currentQuestion
let charactersInPlay

const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  selectQuestion()
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
 
}

  const selectQuestion = () => {
    const category = questions.options[questions.selectedIndex].parentNode.label
    
    const value = questions.options[questions.selectedIndex].value
    currentQuestion = {
    category: category,
    value: value,
    
  }
}
  
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false
  
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category];
    
  } else if (category === 'accessories'|| category === 'other' ) {
    keep = secret[category].includes(value);
  
  }
  filterCharacters (keep);
    } 

   const filterCharacters = (keep) => {
    const { category, value } = currentQuestion
  
   if (category === 'hair') { 
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert (`Yes, the person has ${value} hair! Keep all the people with ${value} hair `)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert (`No sorry, the person doesn´t have ${value} hair! Remove all people with ${value} hair`)
    }

  } else if (category === 'eyes') { 
     if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>  person[category].includes(value))
       alert (`Oh yes,the person has ${value} eyes! Keep all with ${value} eyes`)
       
     } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
       alert (`Nope, sorry, the person has´nt ${value} eyes! Remove all people with ${value}eyes`)   
    }
    
    } else if (category === 'accessories') {
     if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
       alert (`Yes the person wears a ${value} Keep all the people that wears a ${value}`)

    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
     alert
     ( `No,the person doesn´t wear ${value}! Remove all people that wear ${value} `)
     
   }
  }   else if (category=== 'other') {
        if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
          alert
          (`Yes the person is a ${value}! Keep all the people that are smokers! ${value}`)
         } else {
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
           alert
           (`No the person is not a ${value}! Remove all the people that are smokers!${value}`)
        }
      }

      generateBoard(keep)
}
 
const guess = (personToConfirm) => {
  let thePlayerGuess = confirm (`Is this your guess ${personToConfirm}?`)

  if (thePlayerGuess) {
    checkMyGuess(personToConfirm) 
 
  } else {
    alert (`Sorry, try again!`)

  }  
} 
  
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name )  {
    winOrLoseText.innerHTML = `Hurray, right guess!` 
    } else {
    winOrLoseText.innerHTML = `Sorry, wrong guess! It is ${secret.name}!`

  }
   winOrLose.style.display = 'flex'
   board.style.display = 'none'

  }
 
start()

restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgain.addEventListener('click', start)

