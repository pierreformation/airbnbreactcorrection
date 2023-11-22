import './App.css';

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer name="Pierre" age="22"/>
      <Footer name="Thomas" age="23"/>
      <Footer name="Hubert" age="24"/>
    </div>
  );
}

export default App;
