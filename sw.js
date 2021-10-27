const cacheName='cache'
const cacheDynamic='dynamic'
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
    evt.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(keys
                .filter(key=>key !== cacheName)
                .map(key=>caches.delete(key))
            )
        })
    )
})

self.addEventListener('fetch',evt=>{
    //console.log('fetch',evt) 
    evt.respondWith(
        caches.match(evt.request).then(res=>{
            return res || fetch(evt.request).then(res=>{
                return caches.open(cacheDynamic).then(cache=>{
                    cache.put(evt.request.url,res.clone())
                    return res
                })
            })
        })
    )       
})