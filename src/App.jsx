import { useEffect, useState } from 'react'


import './App.css'

function App() {
  const [response, setResponse] = useState(null);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [showHint, setShowHint] = useState(false);

  const handleAccept = () => {
    setResponse('TE ESPERO AQUI, BJINHOS LINDA! 🎉');
  };

  

  // Função para criar partículas de glitter
  const createParticles = (numParticles) => {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}vw`; // Posição aleatória
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória
      particle.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório
      particlesContainer.appendChild(particle);
    }
  };

  useEffect(() => {
    createParticles(100); // Criar 100 partículas
  }, []);

  const handleDecline = () => {
    setResponse("CLICOU ERRADO PARÇA!");
    setShowHint(false);

    // Mudar a posição do card sem ultrapassar a viewport
    const randomTop = Math.random() * 80; // 0% a 80%
    const randomLeft = Math.random() * 80; // 0% a 80%
    
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setShowHint(true);
  };

  return (
    <div className="convite-container">
      <div
        className="convite-card"
        style={{
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
        }}
      >
        <div className="convite-background">
          <div className="particles"></div> {/* Container para partículas */}
          <h1>Oi! 😄</h1>
          <p>CONVITE PARA ENCHER A CARA HOJE! 💫</p>
          <p>LOCAL: Minha Cama 💫</p>
          <p>HORÁRIO: 19:00h 💫</p>
          <p>NECESSÁRIO TRAZER: Apenas seu corpitcho lindo! 💫</p>
          <p>VENHA CELEBRAR A VIDA E RELEMBRAR MOMENTOS MARCANTES! 💫</p>

          <div className="buttons">
            <button onClick={handleAccept} className="accept-btn">Aceitar</button>
            <button onClick={handleDecline} className="decline-btn">Recusar</button>

            {showHint && !response && (
              <p className="hint">Por favor, clique em Aceitar! 😅</p>
            )}
            {response && <p className="response">{response}</p>}
          </div>
        </div>
      </div>
    </div>
  );
  

//   return (
//     <div className="convite-container">
//       <div className="convite-card">
//         <div className="convite-background">
//           <div className="overlay"></div>
//           <h1>Oi! 😄</h1>
//           <p>CONVITE PARA ENCHER A CARA HOJE! 💫</p>
//           <p>lOCAL: Minha Cama 💫</p>
//           <p>HORÁRIO: 19:00h 💫</p>
//           <p>NECASSÁRIO TRAZER: Apenas seu corpitcho lindo! 💫</p>

//           <p>VENHA CELEBRAR A VIDA E RELEMBRAR MOMENTOS MARCANTES, TE ESPERO AQUI! 💫</p>
//           <div className="buttons">
//             <button onClick={handleAccept} className="accept-btn">Aceitar</button>
//             <button onClick={handleDecline} className="decline-btn">Recusar</button>
//           </div>
//         </div>
//       </div>
//       {response && <p className="response">{response}</p>}
//     </div>
//   );
};

export default App
