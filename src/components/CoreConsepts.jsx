import CoreConsept from './CoreConsept.jsx';
import { CORE_CONCEPTS } from '../coreconsepts.js';

export default function CoreConsepts({title, image, description}) {
    return(
        <section id="core-concepts">
            <h2>CoreConsepts!</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) =>
                <CoreConsept {...conceptItem} key={conceptItem.title} />
                 )}     
            </ul>
        </section>
    )
}