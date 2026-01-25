import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConsepts from './Components/CoreConsept.jsx';
import TabButton from './components/TabButtons.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>CoreConsepts!</h2>
          <ul>
            <CoreConsepts {...CORE_CONCEPTS[0]}/>
            <CoreConsepts {...CORE_CONCEPTS[1]}/> 
            <CoreConsepts {...CORE_CONCEPTS[2]}/>
            <CoreConsepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section>
          <h2>More to come...</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            <TabButton>Lifecycle</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
