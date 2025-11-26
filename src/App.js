import './App.css';
import hero from './Images/Heroimg.jpg';

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
            filter: 'brightness(100%)'
          }}>
            <h1>oal</h1>
          </div>
        </div>
      </div>
      

      
    </div>
  );
}

export default App;
