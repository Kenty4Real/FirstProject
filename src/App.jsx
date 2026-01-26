import {useState} from 'react';
import { EXAMPLES } from './examples.js';
import { CORE_CONCEPTS } from './coreconsepts.js';
import Header from './components/Header.jsx';
import CoreConsepts from './Components/CoreConsept.jsx';
import TabButton from './components/TabButtons.jsx';


function App() {

    const [selectedTopic, setSelectedTopic] = useState('')

    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please choose a topic</p>
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      )
    }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>CoreConsepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
            <CoreConsepts {...conceptItem} key={conceptItem.title} />
            )}
           
          </ul>
        </section>
        <section id="examples">
          <h2>More to come...</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
