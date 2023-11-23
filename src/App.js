import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

const App = () => {
  const myArr = ["toto", "titi", "tata"];

  return (
    <div className="App">
      {myArr.map((item) => {
        return <h1>{item}</h1>;
      })}

      <Header />
      <Section />
      <Footer name="Pierre" age="22" />
    </div>
  );
};

export default App;
