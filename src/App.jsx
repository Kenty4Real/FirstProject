import { CORE_CONCEPTS } from './data.js';
import CoreConsept from './CoreConsept.jsx';

function Header() {
  return(
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConsept
             title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}  
            />
            <CoreConsept
             title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}  
            />
            <CoreConsept/>
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
