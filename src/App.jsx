import {useState} from 'react';
import { EXAMPLES } from './examples.js';
import { CORE_CONCEPTS } from './coreconsepts.js';
import Header from './components/Header.jsx';
import CoreConsepts from './Components/CoreConsept.jsx';
import TabButton from './components/TabButtons.jsx';


function App() {

    const [selectedTopic, setSelectedTopic] = useState('components')

    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
    }

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
        <section id="examples">
          <h2>More to come...</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            <TabButton onSelect={() => handleSelect('lifecycle')}>Lifecycle</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
