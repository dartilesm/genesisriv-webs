import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

function sanitizeImage(source: SanityImageSource) {
    return imageUrlBuilder(useSanityClient()).image(source).format('webp');
}


export default sanitizeImage;