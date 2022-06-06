const API_URL = 'http://clima.info.unlp.edu.ar/last?lang=es'
const info = []

async function getClima() {
   const clima = await fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((clima) => {
        console.log('Clima >>>>>', clima)
        Object.keys(clima).forEach(data => {
            // console.log('data.bar >>>>>',data)
            info[data] = clima[data]
        });
        
    })
}
// fetch(`${API_URL}`)
//     .then((response) => response.json())
//     .then((clima) => {
//         // console.log('Clima >>>>>', clima)
//         Object.keys(clima).forEach(data => {
//             // console.log('data.bar >>>>>',data)
//             info[data] = clima[data]
//         });
        
//     })
// console.log('info >>>>>>>', info);
// const clima = document.getElementById('clima')
// info.forEach (dato => {
//     console.log('dato >>>>>>>', dato);

//     clima.innerHTML(`<p>${dato}</p>`)
// })
// console.log(clima)
