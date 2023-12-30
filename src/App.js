import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users));
  // }, []);

  useEffect(() => {
    const pokemon = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    setMonsters(users);
  }
    pokemon()}, []);

  const onChangeHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect (() => {
    const newMonsters = monsters.filter((monster) => 
    return monster.name.toLocaleLowerCase().includes(searchField);
    );
    
    setMonsters(newMonsters);
  },[searchField]);

  return (
    <div>
      <h1> Monsters Rolodex</h1>
      <input onChange={onChangeHandler}/>
      {console.log(monsters)}
      <div>
        {monsters.map((monster) =>
          <div key={monster.id}>{monster.name}</div>)}
      </div>
      {/* <CardList/> */}
    </div>
  );
}

export default App;
