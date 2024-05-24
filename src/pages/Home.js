
import './App.css';
import { useNavigate } from "react-router-dom"

function App() {
    const navigate = useNavigate();

  function handleClick() {
    navigate("/checkout");
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
            <img src="burger image.jpg" alt="burger" onClick={handleClick}></img>
            <img src="shawarma image.jpg" alt="shawarma"onClick={handleClick}></img>
            <img src="pizza image.jpg" alt="pizzas"onClick={handleClick}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
