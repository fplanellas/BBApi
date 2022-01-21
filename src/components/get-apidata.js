import { LitElement, html } from 'lit-element';

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

    /*render() {
        return html`
        
        `;
    }*/

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
        .then((data) => { this._sedData(data); })
        .catch((error) => { console.warn('Something went wrong', error); });
    }
}
customElements.define('get-apidata', GetApidata);