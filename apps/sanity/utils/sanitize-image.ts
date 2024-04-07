import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type {
  ImageFormat,
  SanityImageSource,
} from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: import.meta.env.SANITY_STUDIO_SANITY_PROJECT_ID || import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_SANITY_DATASET || import.meta.env.PUBLIC_SANITY_DATASET,
});

type options = {
  format: ImageFormat;
};

function sanitizeImage(
  source: SanityImageSource,
  { format }: options = {} as options,
) {
  return imageUrlBuilder(client).image(source).format(format);
}

export default sanitizeImage;
