import { CORE_CONCEPTS } from "../../data-with-examples.js";
import CoreConcepts from "./CoreConcepts.jsx";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptitem, index) => (
          <CoreConcepts {...conceptitem} key={index} />
        ))}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                image={CORE_CONCEPTS[3].image}
            /> */}
      </ul>
    </section>
  );
}
