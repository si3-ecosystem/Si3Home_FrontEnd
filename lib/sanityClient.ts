import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "h4ttr3aq",
  dataset: "production",
  apiVersion: "2023-05-03",
  token:
    "skLlMGAGoFvB0VaYTukjYn6wtn5f00N4tdgA2e1SFG0ScOU68KGwRUKLmxN0wTWcFgdukvE8ehTcbmI01rTe18I7YRioytPF0MuwWRdgKyvkxC5enyiBjUjS7LZSgFNizoJW1MKa0OvTbWDi9EGhBQUQBI1WXWrmhgXBLVb9n7O9nbh9x5P7",
  useCdn: true,
});

export default sanityClient;
