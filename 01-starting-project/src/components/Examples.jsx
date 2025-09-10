import { useState } from "react";
import { EXAMPLES } from "../data-with-examples.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        // selectedButton => 'Components', 'JSX', 'Props', 'State'
        setSelectedTopic(selectedButton);
    }
    
    return (
        <Section title="Examples" id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic to see an example</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </Section>
    );
}