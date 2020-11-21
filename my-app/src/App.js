import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Nav />
          <section id="section"class="container">
            <Section titulo="inicial" texto="Texto a ser exibido" />
          </section>
          <Footer />
    </div>
  );
}
export default App;

function Header(){
  return(
    <header className="jumbotron jumbotron-fluid text-center">
      <h1>Componentes React</h1>
      <p>Minha primeira página com componentes React</p>
    </header>
  );
}

function Nav(){
  function handleClickHome(){
    ReactDOM.render(
      <Section titulo="Inicial" texto="Texto a ser exibido" />,
      document.getElementById('section')
    );
  }

  function handleClickComponentes(){
    ReactDOM.render(
      <Section titulo="Componentes" texto="Texto sobre componentes" />,
      document.getElementById('section')
    );    
  }

  function handleClickProps(){
    ReactDOM.render(
      <Section titulo="Props" texto="Texto Sobre props..." />,
      document.getElementById('section')
    );
  }

  function handleClickAlternativo(){
    ReactDOM.render(
      <SectionAlternativa titulo="Componenter alternativo" texto="Exemplo com outro componenter" />,
      document.getElementById('section')
    );
  }
  return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" on-onClick={handleClickComponentes} href="#">Componentes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" on-onClick={handleClickProps} href="#">Props</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" on-onClick={handleClickAlternativo} href="#">Outro Componente</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Section(props){
  return(
    <div className="row">
      <div className="col-sm-6">
        <h1>Página {props.titulo}</h1>
        <h5>{props.texto}</h5>
      </div>
      <div className="col-sm-6">
        <h2>Outro título Sobre {props.titulo}</h2>
        <h5>Outro Texto {props.texto}</h5>
      </div>
    </div>
  );
}

function SectionAlternativa(props){
  return(
    <div className="row">
      <div className="col-sm-6">
        <h1>{props.titulo}</h1>
        <h5>{props.texto}</h5>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <footer className="jumbotron text-center">
      <p>Footer</p>
    </footer>
  );
}
