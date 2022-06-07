const API_URL = 'http://clima.info.unlp.edu.ar/last?lang=es'
const info = []

const getClima = async () => {
    try{
        const resClima = await fetch(`${API_URL}`)
        const  infoClima = await resClima.json()
        
        console.log('********** Consumiendo API Clima **********')
        // console.log('infoCLima >>>',infoClima)
        Object.keys(infoClima).forEach(data => {
            // console.log('data.bar >>>>>',data)
             info[data] = infoClima[data]
            });
            
        }
    
     catch (eror) {
        console.log('Clima error: ', eror)
    }
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

const clima = document.getElementById('clima')
const buildClima = async () => {
    const dataClima = await getClima()
    console.log('dataCLima >>>>', info)
    Object.keys(info).forEach (dato => {
        console.log('dato >>>>>>>', dato, ':',info[dato]);
    
        p = document.createElement('p')
        p.id = `${dato}ID`
        p.className = 'text-warning'
        p.innerHTML = `${dato}: ${info[dato]}`
        clima.appendChild(p)
    })
    console.log('DOM clima ',clima)
}

buildClima()