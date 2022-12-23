import { html, css, LitElement } from 'lit';
import './pw-character.js';

export class MiniSearch extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--mini-search-text-color, #000);
      }

      section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    `;
  }

  static get properties() {
    return {
      characters: { type: Array },
      _characters: { type: Array },
    };
  }

  constructor() {
    super();
    this.characters = [];
  }

  willUpdate(changedProps) {
    if (changedProps.has('_characters')) {
      this.characters = this._characters;
    }
  }

  render() {
    return html`
      <input @input=${this.onSearch} />
      <section>
        ${!this.characters.length ? 'Sin resultados' : ''}
        ${this.characters.map(
          ({ id, name, species, gender, status, image }) => html`
            <pw-character
              id=${id}
              image=${image}
              status=${status}
              gender=${gender}
              species=${species}
              name=${name}
              @pw-character-killed=${this.onKillCharacter}
            ></pw-character>
          `
        )}
      </section>
    `;
  }

  onSearch(e) {
    const query = e.target.value.toLowerCase();

    if (query === '') {
      this.characters = this._characters;
      return;
    }

    this.characters = this._characters.filter(item => {
      if (item.name.toLowerCase().includes(query)) {
        return true;
      }

      return false;
    });
  }

  onKillCharacter(e) {
    const id = e.detail;

    const character = this._characters.find(item => item.id === id);
    character.status = 'Dead';

    const characterVisual = this.characters.find(item => item.id === id);
    characterVisual.status = 'Dead';
    this.requestUpdate();
  }
}
