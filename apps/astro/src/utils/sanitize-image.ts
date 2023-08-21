type Asset = {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    }
}

function sanitizeImage({ _type, asset }: Asset = {} as Asset) {
    if (_type === "image") {
        const imagePath = asset._ref;

        const url = `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/${import.meta.env.VITE_SANITY_DATASET}/${imagePath}`;

        return {
            url
        }
    }
}


export default sanitizeImage;