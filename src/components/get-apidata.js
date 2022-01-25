import { LitElement, html } from 'lit-element';
import './components/get-apidata';

export class GetApidata extends LitElement {

    static get properties() {
        return {
            url: { type: String },
            method: { type: String }
        };
    }

    firstUpdated() {
        this.getData();
    }

    render() {
        return html`
            <div class="buscador">
                <input id="searchId" type="search" name="buscar" value="">         
                <input @click="${this.getData}"type="submit" value="Buscar">
            </div>
        `;
    }

    _sedData(data) {       
        this.dispatchEvent(new CustomEvent('ApiData', {
            bubbles: true,
            composed: true,
            detail: {
                data: data
            }
        }));
    }

    getData() {
        fetch(this.url, { method: this.method })
        .then((response) => {
            if(response.ok) return response.json();
            return Promise.reject(response);
        })

        .then((dataC) => { 
            let itemSearched = this.shadowRoot.getElementById('searchId').value;
            let data = dataC.filter(data => {
                if (data.name.indexOf(itemSearched) != -1) {
                    return true;
                }
                return false;
            });

            this._sedData(data);
         })
        .catch((error) => { console.warn('Something went wrong', error); });
    }
}
customElements.define('get-apidata', GetApidata);