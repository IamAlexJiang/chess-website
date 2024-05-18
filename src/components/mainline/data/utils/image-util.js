
function getImageURL(name) {
    return new URL(`./images/openings/${name}`, import.meta.url).href
}

export {getImageURL};