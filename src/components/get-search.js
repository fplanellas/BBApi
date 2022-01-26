import { LitElement, html } from 'lit-element';

export class GetSearch extends LitElement {


    render() {
        return html`
            <div class="buscador">
                <input id="searchId" type="search" name="buscar" value="">         
                <input @click="${this.search}"type="submit" value="Buscar">
            </div>
        `;
    }

    search() {
        let itemSearched = this.shadowRoot.getElementById('searchId').value;

        this.dispatchEvent(new CustomEvent('SearchData', {
            bubbles: true,
            composed: true,
            detail: {
                data: itemSearched
            }
        }));
    }
}
customElements.define('get-search', GetSearch);