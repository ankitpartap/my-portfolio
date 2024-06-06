export const getImageUrl = (path) => {
    return new URL(`/asset/${path}`, import.meta.url).href;
};

//it make it easy to import images dynamically