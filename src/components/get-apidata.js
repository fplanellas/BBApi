import { LitElement, html, css } from 'lit-element';
import './get-search';

export class GetApidata extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                font-family: sans-serif;
            }

            input {
                border: 1px solid #9b9b9b;
                width: 500px;
                height: 30px;
                border-radius: 12px;
                margin-right: 8px;
                padding: 0 15px;
            }

            .buscador {
                position: absolute;
                right: 0;
                left: 0;
                margin: auto;
                top: 120px;
                display: flex;
                justify-content: center;
            }

            `;
    }

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
                <input id="searchId" type="search" name="buscar" @input="${this.getData}">
                ${ this.getIcon() }
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
                if (data.name.toLowerCase().indexOf(itemSearched) != -1) {
                    return true;
                }
                return false;
            });

            this._sedData(data);
         })
        .catch((error) => { console.warn('Something went wrong', error); });
    }

    getIcon(){
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#9b9b9b"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg
        `;
    }
}
customElements.define('get-apidata', GetApidata);