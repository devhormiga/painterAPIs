const API_URL = 'https://jsonplaceholder.typicode.com';

// const xhr = new XMLHttpRequest();

// --------------------------------
//        Consumiendo api metodo ' fetch '
// --------------------------------
// le pego a otra api para tomar imagenes 
let cont = 0;
const tenphotos = [];
 fetch(`${API_URL}/photos`)
    .then((response) => response.json())
    .then((photos) => {
        // console.log(photos[cont])
        while (cont < 10 ){
            // console.log(cont)
            photos.forEach(photo => {
                // tenphotos.push(photo.id[cont])
                // ++cont
                if (cont < 10){
                    // console.log(photo.id);
                    // $("#app").append(`<img src="${photo.url}" class="card-img-top" alt="...">`)
                    ++cont;
                    tenphotos.push(photo.url)
                    // console.log(typeof(photo))
                }

            })
        }

    })

// *****************************
//  aca estaba intentando traducir esto a async/await
// *****************************
// const getFotos = async () => {
//     try {
//         const resFotos = await fetch(`${API_URL}/photos`)
//         const fotos = await resFotos.json()
//         console.log('fotos res:' ,fotos)
//         while (cont < 10 ){
//             // console.log(cont)
//             fotos.forEach(photo => {
//                 // tenphotos.push(photo.id[cont])
//                 // ++cont
//                 if (cont < 10){
//                     // console.log(photo.id);
//                     // $("#app").append(`<img src="${photo.url}" class="card-img-top" alt="...">`)
//                     ++cont;
//                     tenphotos.push(photo.url)
//                     // console.log(typeof(photo))
//                 }

//             })
//         }
//     } catch (eror) {
//         console.log('getFoto error: ', eror)
//     }
// }
console.log((tenphotos));



console.log('************consumiendo la api de usuarixs************')
// usando js puro con elementos del DOM
// const HTMLResponse = document.querySelector('#app');
// const template = document.createElement('ul');
fetch(`${API_URL}/users`)
    .then((response) => response.json())
        .then((users) => {
            // console.log(typeof(users))
            users.forEach(user => {
                // console.log(user.id);
                // usando JQUERY
                $("#app").append(`<div class="card border border-warning" style="width: 18rem;">
                    <img src="${tenphotos[user.id-1]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.username}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${user.email}</li>
                    <li class="list-group-item">${user.id}</li>
                    <li class="list-group-item">${Object.values(user.address)}</li>
                    </ul>
                    <div class="card-body">
                    <a href="#" class="card-link">${user.phone}</a>
                    <a href="#" class="card-link">${user.website}</a>
                    </div>
                    </div>`)
                // usando elementos del DOM

                // let elem = document.createElement('li');
                // elem.appendChild(document.createTextNode(`${user.name}`));
                // template.appendChild(elem);
                // HTMLResponse.appendChild(template);
            });
            // forma sin nodos del DOM
            // const template = users.map((user) => `<li>${user.name}</li>`);
            // HTMLResponse.innerHTML = `<ul>${template}</ul>`;
        });



// --------------------------------
//        Consumiendo api metodo ' old school '
// --------------------------------
// function onRequestHandler(){
//     if (this.readyState === 4 && this.status === 200){
//         // console.log(this.response);
//         const data = JSON.parse(this.response);
//         console.log(data);
//         const HTMLResponse = document.querySelector('#app');

//         const template = data.map((user) => `<li>${user.name}</li>`)
//         HTMLResponse.innerHTML = `<ul>${template}</ul>`
//     }
// }

//  xhr.addEventListener("load",onRequestHandler);
//  xhr.open('GET',`${API_URL}/users`);
//  xhr.send();
// tenphotos.forEach (valor => {
//     console.log('************Propiedades de Tenphotos*************');

//     console.log(valor.id);
// });
// for (var i = 0; i < tenphotos.length; i+=1) {
//     console.log("En el índice '" + i + "' hay este valor: " + tenphotos[i]);
//   }
// try {
//     const  arTen = Object.entries(tenphotos[0]);
//     console.log(arTen)
// } catch (error) {
//     console.log(error)    
// }
// try {
//     console.log('INTENTANDO TRY')
//     console.log(typeof(arten))
//     console.log(arTen)
//     for (const ph of tenphotos) {
//         console.log('ten: ' , tenphotos);
//         console.log('ph  ', ph);
//     }
// } catch (error) {
//     console.log('catch:  ',error)
// }
