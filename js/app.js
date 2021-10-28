if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg)=>console.log('sw ok',reg))
    .catch((err)=>console.log('sw erreur',err))
}

