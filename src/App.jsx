// src/App.jsx
import {useState} from 'react'
import './App.css'

const App = () => {
  // States
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]    
  )
  const [strength, setStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)


  // Handlers
  const handleAddFighter = (fighter) => {
    // get the clicked zombie's object
    console.log(fighter)
    // before adding check if enough money to afford the fighter
    if(fighter.price > money){
      // return not enough money to affort fighter 
      return console.log(`Not enough money to affort this fighter`)
    }
    // substrac fighter's price from money
    let remainder = money - fighter.price 
    setMoney(remainder)
      // add fighter to newTeamArray
    setTeam([...team, fighter])
    // add Fighter.strength to state variable strength 
    setStrength(strength + fighter.strength) 
    setTotalAgility(totalAgility = fighter.agility)


    console.log('this is the team', team)
  }
  const handleRemoveFighter = (fighter) => {
    // grab fighter's name
    const fighterToRemove = fighter.name
    console.log('remove fighter', fighterToRemove)
      // filter array where fighter's name is not selected fighter
    const newArray = team.filter(fighter => fighter.name !== fighterToRemove)
    setTeam(newArray)  
    setMoney(money - fighter.price)
    setStrength(strength - fighter.strength)
    setMoney(totalAgility - fighter.agility)
    
  }
  
  
  return (
    <>
    <h1>Zombie Fighters Team</h1>
    <h3>Money: {money}</h3>
    <h3>Total Strength: {strength}</h3>
    <h3>Total Agility: {totalAgility}</h3>
    
    <h3>Team</h3>
    <div className="fighters">
      {!team.length ? 'pick some team members':''}
      {
      team.map((fighter, idx) => {
          return(
            <>
              <ul>
                <li><img src={fighter.img}/></li>
                <li>{fighter.name}</li>
                <li>Price: {fighter.price}</li>
                <li>strength: {fighter.strength}</li>
                <li>agility: {fighter.agility}</li>
                <li><button onClick={() => handleRemoveFighter(fighter)}>Remove</button></li>
              </ul>
            </>
          )
        })
      }
    </div>
    <h3>Fighters</h3>
    <div className="fighters">
      
        {
        zombieFighters.map((fighter, idx) => {
          return(
            <>
              <ul>
                <li><img src={fighter.img}/></li>
                <li>{fighter.name}</li>
                <li>Price: {fighter.price}</li>
                <li>strength: {fighter.strength}</li>
                <li>agility: {fighter.agility}</li>
                <li><button onClick={() =>handleAddFighter(fighter)}>Add</button></li>
              </ul>
            </>
          )
        })
        }
      
    </div>
    </>

  );
}

export default App
