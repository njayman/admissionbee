import './App.scss';
import ParticleBG from './Particles';

function App() {

  return (
    <ParticleBG>
      <div className="page">
        <div className="container main">
          <div className="logo">
            <span style={{ fontFamily: "Limelight, cursive", fontSize: '9rem', lineHeight: '10rem' }}>A</span><span style={{ fontFamily: "Limelight, cursive", fontSize: '2rem', lineHeight: '3rem' }}>dmission</span><span style={{ fontFamily: "Raleway, sans-serif", fontSize: '2rem', lineHeight: '3rem', fontWeight: 'bold' }}>BEE</span>
            <p style={{ fontFamily: "Nunito, sans-serif" }}>Comming soon . . .</p>
          </div>
        </div>
      </div >
    </ParticleBG>
  );
}

export default App;
