import { LitElement, html, css } from 'lit-element';
import './components/get-apidata';

export class FopcBreakingBad extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                font-family: sans-serif;
            }

            article {
                display: flex;
                flex-wrap: wrap;
                padding: 15px;
                width:100%;
                box-sizing: border-box;
                position: relative;
            }

            .character-container{
                padding: 10px;
                width:20%;
                box-sizing: border-box;
                height: 250px;
                overflow: hidden;
            }

            .character-container div {
                height: 90%;
                padding: 10px;
                position: relative;
                cursor: pointer;
                transition: box-shadow 500ms;
                border: 1px solid transparent;
            }

            .character-container .character-content:hover {
                box-shadow: rgba(0, 0, 0, 3) 0px 3px 10px;
                border: 1px solid silver;
                transition: box-shadow 500ms;
            }

            .character-container h2 {
                background: rgba(255, 255, 255, 0.5);
                text-align: center;
                font-size: 20px;
                margin:0;
            }

            

            span.hidden {
                width: auto;
                margin-right: 8px;
            }

            .character-container .details {
                background: rgba(0, 0, 0, 0.6);
                color: #fff;
                text-align: center;
                width: 98%;
                height: 17px;
                position: absolute;
                bottom:0;
                margin:0 -10px;
                padding: 8px 0;             
            }

            .character-container p {
                margin: 0;
                font-size: 12px;
                font-weight: normal;
                display: inline-flex;
            }

            .character-container.character-detail{
                position: absolute;
                width:100%;
                height:500px;               
            }

            .character-container.character-detail div {               
                background: rgba(255,255,255,0.9)!important;
                display: flex;
            }

            .character-container .hidden {
                display: none
            }

            .character-container.character-detail .hidden {
                display: block;
            }

            .character-detail .detail-container {
                display: flex;
                flex-direction: column;
                width: 50%;
    
            }

            .character-container.character-detail .details {
                background: transparent;
                color: #000;
                text-align: left;
                position: relative;
                padding: 8px 15px;  
                display: flex;
                flex-direction: column;             
            }

            .character-detail .detail-container h2 {                
                display: inline-flex;
                height: 40px;
                text-align: left;
            }

            .character-container.character-detail div img {
                width: 300px;
                height: auto;
            }

            span.ocupation {
                background: pink
            }
        `;
    }

    static get properties() {
        return {
           wiki: { type: Array }
        };
    }

    constructor() {
        super();
        this.wiki = [];
        this.addEventListener('ApiData', (e) => {
            this._paintingData(e.detail.data);
        })
    }

    _paintingData(data) {
        console.log(data);
        let characters = [];
        
        data.map((character) => {
            characters.push({
                img: character.img,
                name: character.name,
                nickname: character.nickname,
                status: character.status,
                id: character.char_id,
                birthday: character.birthday,
                portrayed: character.portrayed,
                occupation: character.occupation            
            })
        });

        this.wiki = characters;
    }

    render() {
        return html`
            <h1>Breaking bad</h1> 
            <article id="BBContent">
                <get-apidata url="https://breakingbadapi.com/api/characters" method="GET"></get-apidata>   
                ${this.dataTemplate} 
            </article>         
                
        `;
    }

    cloneDiv(e) {
        let thisId = e.path[2].id;
        let thisItem = this.shadowRoot.getElementById(thisId);       
        let clon = thisItem.cloneNode(true);       
        clon.classList.add('character-detail');       
        this.shadowRoot.getElementById("BBContent").appendChild(clon);       
    }

    get dataTemplate() {
        return html`
            ${this.wiki.map(character => html`
                <div class="character-container" id="${character.id}" >
                    <div class="character-content" @click=${this.cloneDiv} style="background: transparent url('${character.img}') no-repeat center top; background-size: cover">             
                        <img class="hidden" src="${character.img}" > 
                        <div class="detail-container">
                            <h2><span class="hidden">Name: </span>${ character.name }</h2>
                            <div class="details">
                                <p><span class="hidden">Nickname: </span>${ character.nickname }</p>
                                <p class="hidden"><span>Status: </span>${ character.status }</p>
                                <p class="hidden"><span>Occupation: </span> ${ '' + character.occupation + '   ' }</p>
                                <p  class="hidden"><span>Birthday: </span>${ character.birthday }</p>
                                <p  class="hidden"><span>Interpreted by: </span>${ character.portrayed }</p>
                            </div>
                        </div>
                    </div>
                </div>
            `)}
        `;
    }


    

    
}
customElements.define('fopc-breakingbad', FopcBreakingBad);