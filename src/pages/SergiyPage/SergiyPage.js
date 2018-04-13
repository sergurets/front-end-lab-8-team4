import React, { Component } from 'react';
import './SergiyPage.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">fast work</h1>
        </header>
        <div className="Description">
        <h1 className="Name">
          Прибрати будівельне сміття на задньому дворі
        </h1>
        <p>Після ремонту на задньому дворі залишилося багато будівельного сміття. В основному це бита цегла і бетон, частково дошки і залишки старих меблів. </p>
        <div className="JobFeatures">
        <div className="JobList">
        <ul>
          <li>Тривалість: від 3 до 5 годин</li>
          <li>Час початку робти: не пізніше 17.08</li>
          <li>Крайній термін виконання: 17:00 18.08</li>
          <li>Локація: Львів, вул. Личаківська 22</li>
          <li>Оплата: 800грн</li>
          </ul>
          </div>
          <div className="Contacts">
          <h3>Сергій</h3>
          <p>+380670000000</p>
          </div>
        </div>
        </div>
        <div className="JobImage">
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30623950_1633496920048789_4881096526492860416_n.jpg?_nc_cat=0&oh=c51fe51aec60c56d8a99622b083721ce&oe=5B6D97D4" className="JbImage"  alt="jobphoto" />
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30629531_1633496936715454_914632900798840832_o.jpg?_nc_cat=0&oh=3fea16d8f0b996317c56c571c2b15e72&oe=5B2C2BE5" className="JbImage"  alt="jobphoto" />
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30709690_1633496930048788_602166771520110592_o.jpg?_nc_cat=0&oh=79ca60a8956fca51059f721409b6b7b3&oe=5B58BD82" className="JbImage"  alt="jobphoto" />
        </div>
        <div className="Map">
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30624552_1633496923382122_1617418034371100672_n.png?_nc_cat=0&oh=e225e7323cf59e5d843e87785bea4644&oe=5B73A3D4"  alt="map" />
        </div>
      </div>
    );
  }
}

export default App;

