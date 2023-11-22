import './App.css';
import imageSuperman from "./assets/Superman_shield.svg.png"

const App= () => {

  const toto = 17
  console.log(toto)

  return (
    <div className="myclass">
      Test Hello
      <img className='imageSuperman' src={imageSuperman}/>
    </div>
  );
}

export default App;
