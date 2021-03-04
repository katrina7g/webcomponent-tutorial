import { FASTElement, attr, customElement, observable } from "@microsoft/fast-element";

import { StarWarsCharactersTemplate as template } from "./StarWarsCharacters.template";

@customElement({
    name: "star-wars-characters",
    template
})
export class StarWarsCharacters extends FASTElement {

    @attr title: string = "";
    @observable characters: any = [];

    connectedCallback() {
        super.connectedCallback();
        this.loadData();
    }

    private async loadData() {
        const response = await fetch("https://swapi.dev/api/people");
        const parsedResponse = await response.json();
        this.characters = parsedResponse.results;
    }
}