const cacheName='site'
const assets=[
    './',
    './index.html',
    './js/app.js',
    './js/ui.js',
    './css/styles.css',
    './js/materialize.min.js',
    './css/materialize.min.css',
    './img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v111/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
]

self.addEventListener('install',evt=>{
    console.log('installé') 
    evt.waitUntil(
        caches.open(cacheName).then(cache =>{
            cache.addAll(assets)
        })
    )
})

self.addEventListener('activate',evt=>{
    console.log('activé') 
})

self.addEventListener('fetch',evt=>{
    console.log('fetch',evt) 
    evt.respondWith(
        caches.match(evt.request).then(res=>{
            return res || fetch(evt.request)
        })
    )       
})