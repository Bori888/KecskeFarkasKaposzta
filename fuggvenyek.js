export function kepMegjelenit(lista,tartalomElem) {
    for (let index = 0; index < lista.length; index++) {
        tartalomElem.innerHTML+=`
            <div class="kepek" id ="kepek">
                    <img src=${lista[index].kep} alt="kep">

            </div>
            `;
        
    }
    
    
}