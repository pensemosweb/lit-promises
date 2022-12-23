import { LitElement, html, css } from "lit";

class PwCharacter extends LitElement {
  static get is() {
    return 'pw-character';
  }

  static get properties() {
    return {
      id: { type: Number },
      name: { type: String },
      image: { type: String },
      species: { type: String },
      gender: { type: String },
      status: { type: String },
    }
  }
  
  constructor() {
    super();
    this.values = {};
  }

  render() {
    return html`
      <img src=${this.image} alt=${this.name} width="100%"/>
      <h3>${this.name}</h3>
      <p>${this.species}</p>
      <p>${this.gender}</p>
      <p>${this.status}</p>
      <button @click=${this.onKill}>Matame</button>
    `;
  }

  onKill(e) {
    const killEvent = new CustomEvent('pw-character-killed', {
      detail: this.id
    });
    this.dispatchEvent(killEvent);
  }
}

customElements.define(PwCharacter.is, PwCharacter)