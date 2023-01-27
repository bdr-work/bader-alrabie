import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "aiwameuw",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skNjoxj6pJkyrDwE2OmOvCPhyp9f9Qagf6FDnbTrtx2xQJUrPhroQH0y9A8cRKEeK3WGxBRydvTOA7mnvBJOO3Z5lx31zZhl6X6B56PEK8vDl27TuEwSseHZnwWX7ifSz9XWG0vZWHb7TLCzCAEsjTxAoLd8SYSlLlD9EZsbo5OGdS4woFV2",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
