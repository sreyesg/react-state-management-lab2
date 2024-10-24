// src/App.jsx
import {useState} from 'react'
import './App.css'

const App = () => {

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
  const HandleAddFighter = (fighter) => {
    // get the clicked zombie's object
    console.log(fighter)
    // before adding check if enough money to afford the fighter
    if(fighter.price > money){
      // return not enough money to affort fighter 
      return console.log(`Not enough money to affort this fighter`)
    }
    // substrac fighter's price from money
    let remainder = money - fighter.price 
    console.log(remainder)
    setMoney(remainder)
      // add fighter to newTeamArray
    const newTeamArray = [...team, fighter]
    setTeam(newTeamArray) 
    console.log('this is the team', team)
  }
  
  
  
  return (
    <>
    <h1>Zombie Fighters Team</h1>
    <h3>Money: {money}</h3>
    <div className="main">
      
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
                <li><button onClick={() =>HandleAddFighter(fighter)}>Add</button></li>
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
