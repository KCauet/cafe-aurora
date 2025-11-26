import './App.css';


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
        height: '200px',
        display: 'flex',
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
      
    </div>
  );
}

export default App;
