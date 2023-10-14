const staticCachorros = "dev-cachorro-site-v1"

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app",
    "/images/cachorros1.jpg",
    "/images/cachorros2.jpg",
    "/images/cachorros3.jpg",
    "/images/cachorros4.jpg",
    "/images/cachorros6.jpg",
    "/images/cachorros7.jpg",
    "/images/cachorros8.jpg",
    "/images/cachorros8.jpg",
    "/images/cachorros9.jpg",
    "/images/cachorros10.jpg",
];

async function preCache() {
    const cache = await cache.open(staticCachorros);
    return cache.addALL(assets);
}

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(precache())
})

async function cacheFirst(request){
    const cacheResponse = await caches.match(request);


    if (cacheResponse){
        return cacheResponse;
    }

    try {
        const networkResponse = await fetch(request);


        if(networkResponse.ok){
            const cache = await caches.open(staticCachorros)

            cache.put(request, networkResponse.clone())
        }
        return networkResponse;
    }

    catch ( error ){
        return Response.error();
    }
}

self .addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(cacheFirst(fetchEvent.request))
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
            .then(res => {
                return res || fetch (fetchEvent.request)
            })
    )
})