
import './App.css';
import { useNavigate } from "react-router-dom"

function App() {
    const navigate = useNavigate();

  function handleBurgerClick() {
    navigate("/checkoutBurger");
  }
  function handleShawarmaClick() {
    navigate("/checkoutShawarma");
  }
  function handlePizzaClick() {
    navigate("/checkoutPizza");
  }
  return (
    <div >
      <div>
        <div className='Header'>
          <h1>
            Hassan's Restaurant(HOme)
          </h1>
        </div>

        <div className='Body'>
          <div>
            <h2>
              Menus
            </h2>
          </div>
          <div className='images'>
            <img src="burger image.jpg" alt="burger" onClick={handleBurgerClick}></img>
            <img src="shawarma image.jpg" alt="shawarma"onClick={handleShawarmaClick}></img>
            <img src="pizza image.jpg" alt="pizzas"onClick={handlePizzaClick}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
