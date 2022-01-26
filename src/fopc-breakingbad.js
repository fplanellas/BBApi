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

            h1 {
                display: flex;
                justify-content: center;
                margin-bottom: 45px;
            }

            h1 img {
                width: 150px;
            }

            article {
                display: grid;
                gap: 1rem;
                grid-auto-flow: dense;
                grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
                text-align: center;
                padding: 15px;
                padding-top:0;
                margin: 0 130px;
                position: relative;
            }

            .character-container{
                padding: 10px;
                height: 220px;
                overflow: hidden;
            }

            .character-container div {
                height: 90%;
                padding: 10px;
                position: relative;             
                transition: box-shadow 500ms;
                border: 1px solid transparent;
            }

            .character-container .character-content {
                cursor: pointer;
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
                color: #e0e0e0;
                text-align: center;
                width: 98%;
                height: 17px;
                position: absolute;
                bottom:0;
                margin:0 -10px;
                padding: 8px 0;             
            }

            .character-container p {
                margin: 6px 0;
                font-size: 12px;
                font-weight: normal;
                display: inline-flex;
            }

            span {
                font-weight: bold;
                color: #565656;
            }

            .character-container.character-detail{
                position: absolute;
                right: 0;
                left: 0;
                margin: auto;
                top: -60px;
                background: transparent);
                opacity: 0;
                transition: opacity 500ms;
                width:90%;
                height:580px; 
                padding: 15px;   
                box-sizing: border-box;          
            }

            .character-container.character-detail .character-content {   
                cursor: auto;            
                background: rgba(240,240,240)!important;              
                box-shadow: rgba(0, 0, 0, 3) 0px 3px 10px;
                display: flex;
                color: #565656;
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
                width: 60%;
    
            }

            .character-container.character-detail .details {
                background: transparent;
                color: #565656;
                text-align: left;
                position: relative;
                padding: 8px 0 8px 15px;;  
                display: flex;
                flex-direction: column;                          
            }
            .character-container.character-detail .details p{
                font-size: 15px;  
            }

            .character-detail .detail-container h2 {                
                display: inline-flex;
                height: 40px;
                text-align: left;
                background: transparent;
                font-size: 25px
            }

            .character-container.character-detail div img {
                width: 350px;
                height: auto;
            }

            .character-container .iconClose {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
                z-index: 100;
                transition: background 500ms;
            }

            .pagination {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                
            }

            .pagination button {
                margin: 0 5px;
                padding: 4px 10px;
                border-radius: 6px;
                background: transparent;
                border: 0;
                cursor: pointer;
                transition: box-shadow 500ms;
            }
            .pagination button:hover {
                box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 6px;
                transition: box-shadow 500ms;
            }

            .pagination button.active {
                border: 1px solid #9b9b9b;
                background: #f8f8f8;
            }

        `;
    }

    static get properties() {
        return {
           wiki: { type: Array },
           url: { type: String},
           search: { type: String }
        };
    }

    constructor() {
        super();
        this.search = '';
        this.url = "https://breakingbadapi.com/api/characters";
        this.wiki = [];
        this.addEventListener('ApiData', (e) => {
            this._pagination(e.detail.data)
        })
    }

    _paintingData(data) {
        
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
            <h1><img src="./img/pngegg.png"></h1>
            <div class="pagination" id="paginationId"></div>
            <get-apidata url="${this.url}"  ></get-apidata>  
            <article id="BBContent">                
                ${this.dataTemplate} 
            </article>         
                
        `;
    }


    _pagination(data) {

        const pagination_element = this.shadowRoot.getElementById('paginationId');

        let currentPage = 1;
        let itemsPage = 10;
        
        let  DisplayList = ( (data, items_per_page, page) => {
            page--;

            let start = items_per_page * page;
            let end = start + items_per_page;
            let paginationItems = data.slice(start, end);
            this._paintingData(paginationItems);
        });

        let  SetupPagination = ( (data, items_per_page) => {
            let paginatorContent = this.shadowRoot.getElementById("paginationId");
            paginatorContent.innerHTML = '';

            let pageCount = Math.ceil(data.length / items_per_page);
             for (let i = 1; i < pageCount + 1; i++) {
                  PaginationButton(i, data);
             }
        });

        let  PaginationButton = ( (page, data) => {
            let paginatorContent = this.shadowRoot.getElementById("paginationId");
            let button = document.createElement('button');
            
            button.innerText = page;
            paginatorContent.appendChild(button); 

            currentPage == page ? button.classList.add('active') : button.classList.remove("mystyle"); 

            button.addEventListener("click", () => {
                currentPage = page;
                DisplayList(data, itemsPage, currentPage);
                
                let current_btn = this.shadowRoot.querySelector('button.active');
                current_btn.classList.remove('active');
                button.classList.add('active');
            });

            
        });

        DisplayList(data, itemsPage, currentPage);
        SetupPagination(data, itemsPage, pagination_element)

    }

    cloneDiv(e) {
        let thisId = e.path[2].id;
        let thisItem = this.shadowRoot.getElementById(thisId);       
        let clon = thisItem.cloneNode(true);       
        clon.classList.add('character-detail');       
        this.shadowRoot.getElementById("BBContent").appendChild(clon); 
        clon.setAttribute('id', 'cloned');

        let divIcon = document.createElement("div");
        divIcon.classList.add('iconClose'); 
        divIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>';
        this.shadowRoot.getElementById("cloned").appendChild(divIcon); 
        

        const elementCloned = this.shadowRoot.getElementById("cloned");
        elementCloned.addEventListener("click", () => {
            this.removeDiv();
        });

        setTimeout(() => {
            clon.style.opacity = "1";
          }, 1);      
    }

    removeDiv() {
        let  contain = this.shadowRoot.getElementById("BBContent");
        let elementCloned = this.shadowRoot.getElementById("cloned");
        setTimeout(() => {
            elementCloned.style.opacity = "0";
          }, 1); 
        
        setTimeout(() => {
            contain.removeChild(elementCloned);
          }, 500); 
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
                                <p class="hidden"><span>Occupation: </span> ${ character.occupation } </p>
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