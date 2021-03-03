import { html, repeat, when } from "@microsoft/fast-element";

import { StarWarsCharacter } from "./components/StarWarsCharacter";
import { StarWarsCharacters } from "./StarWarsCharacters";

StarWarsCharacter;

export const StarWarsCharactersTemplate = html<StarWarsCharacters>`
    <h1>${x => x.title}</h1>
    <slot name="header"></slot>
    <ul>
    ${repeat(x => x.characters, html<any>`
        <star-wars-character :character=${character => character}></star-wars-character>
    `)}
    </ul>
    <slot name="footer"></slot>
`;