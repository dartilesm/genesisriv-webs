import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from "@sanity/image-url";
import type {
  ImageFormat,
  SanityImageSource,
} from "@sanity/image-url/lib/types/types";

type options = {
  format: ImageFormat;
};

function sanitizeImage(
  source: SanityImageSource,
  { format }: options = {} as options,
) {
  return imageUrlBuilder(useSanityClient()).image(source).format(format);
}

export default sanitizeImage;
