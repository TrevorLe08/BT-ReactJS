import './App.css';
import { useState } from 'react'
function App() {
  let [selectedCar, setSelectedCar] = useState({
    car: 'Audi',
    color: 'Black'
  })
  let changeCar = (e) => {
    setSelectedCar({ ...selectedCar, [(e.target.name)]: e.target.value })
  }
  return (
    <div>
      <h1>Select your car</h1>
      <h4>
        Select a car <select name="car" onChange={changeCar}>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Citroen">Citroen</option>
          <option value="Ford">Ford</option>
          <option value="Honda">Honda</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Mercedes">Mercedes</option>
        </select>
      </h4>
      <h4>
        Select you color <select name='color' onChange={changeCar}>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Cyan">Cyan</option>
          <option value="Green">Green</option>
        </select>
      </h4>
      <h2>You selected a {selectedCar.color} - {selectedCar.car}</h2>
    </div>
  );
}

export default App;
