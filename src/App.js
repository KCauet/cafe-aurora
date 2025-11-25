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

        <div style={{
          backgroundImage: `url(${hero})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '660px',
          width: '100%',
          backgroundColor: 'red'
        }}>

        </div>
      </div>
      

      
    </div>
  );
}

export default App;
