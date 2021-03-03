import {
  FASTElement,
  attr,
  customElement,
  observable,
} from "@microsoft/fast-element";

import { StarWarsCharacterTemplate as template } from "./StarWarsCharacter.template";

@customElement({
  name: "star-wars-character",
  template,
})
export class StarWarsCharacter extends FASTElement {
  @observable character: any = undefined;

  characterChanged(oldValue: any, newValue: any) {
    console.log("Updated");
  }
}
