
import './App.css';

function clickMe() {
  fetch("http://localhost:5000/orders/pizzas", {headers: { ContentType: "application/json" }})
  .then(response => response.json())  
  .then( response =>  {
      console.log("response is", response)
      // let res = await response.json()
      // console.log("testing response.json", res)
     
    })
}

function App() {
  return (
    <div >
      <div>
        <div className='Header'>
          <h1>
            Hassan's Restaurant(checkout)
          </h1>
        </div>f

        <div className='Body'>
          <div>
            <h2>
              Menus
            </h2>
          </div>
          <div className='images'>
            <img src="pizza image.jpg" alt="pizzas"></img>

            <p> order </p>
            <button onClick={clickMe}>Order Food</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
