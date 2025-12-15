import './App.css';
import Segmento from './components/Segmento';
import imgS1 from './Images/Cafeteria.jpg';
import Box from './components/Box';

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

        <Segmento allowImg={true} titulo={'Conheça-nos'} desc={'Somos uma equipe que sonha em você realizar um sonho seu! então que tal uma chicara de café bem quentinha logo de manhã?'} img={imgS1} extras={
          <>
          <p style={{marginTop: '50px'}}>Com os melhores preços se alcança os melhores resultados.</p>
          </>
        } />

          <div className='section'>

            <div>
              <h2 style={{
                fontSize: '55px',
                fontWeight: '900'
                }} >Por que nos escolher?</h2>
            </div>

            <div>
              <Box title={'Preço'} desc={'Cuidamos do café tanto quanto o seu bolso!'}extra={'Temos com certeza os melhores preços pra te ajudar em tudo.'} icon={'tag'} />
              <Box title={'Qualidade'} desc={'Sempre manteremos a qualidade dos cafés únicos com variedade e tudo sem dor de cabeça.'} icon={'coffee'} />
              <Box title={'Garantia'} desc={'Garantiremos que tenha o melhor atendimento tanto quanto o melhor café.'} icon={'handshake'} />
            </div>
            
          </div>

          <div className='section'>
            <p>exemplo</p>
          </div>
          
      </main>

    </div>
  );
}

export default App;
