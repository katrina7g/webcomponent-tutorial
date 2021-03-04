import { html, repeat, when } from "@microsoft/fast-element";

import { StarWarsCharacter } from "./StarWarsCharacter";

export const StarWarsCharactersTemplate = html<StarWarsCharacter>`
    ${when(x => x.character, html<StarWarsCharacter>`
        <li>${x => x.character.name}</li>
    `)}
`;