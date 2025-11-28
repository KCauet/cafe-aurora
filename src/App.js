import './App.css';
import Segmento from './components/Segmento';
import imgS1 from './Images/Cafeteria.jpg';


function App() {
  return (
    <div className="App">
      <header>
        <section>
          <h2>Café - Aurora</h2>
        </section>
        <section style={{
          display: 'flex',
          gap: '45px',
          fontSize: '18px'
        }}>
          <p>Página principal</p>
          <p>Contato</p>
          <p>Galeria</p>
        </section>
      </header>

      <div style={{
        width: '100%',
      }} >

        <div className='heroContainer' >

          <div style={{
            filter: 'brightness(100%)',
            textAlign: 'center',
            scale: '1.5'
          }}>
            <h1>Café - Aurora</h1>
            <h2>Mais do que um café</h2>
            <h2>um momento para desacelerar</h2>
            <button>Ver Cardápio</button>
          </div>

        </div>

      </div>

      <main>

        <Segmento titulo={'Titulo foda aqui'} desc={'Desc foda aqui'} img={imgS1} />

      </main>

    </div>
  );
}

export default App;
