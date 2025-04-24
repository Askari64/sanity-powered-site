import { createClient, groq } from "next-sanity";
import { BlogInterface } from "../interfaces/type-interfaces";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export async function getBlogs(): Promise<BlogInterface[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2025-03-14",
    useCdn: true,
  });

  const blogs = await client.fetch(
    groq`*[_type == 'blogs']{
        _id,
        _createdAt,
        title,
        author->{
        name,
        "image": image.asset -> url},
        "slug": slug.current,
        "image": image.asset -> url,
        content
        }`
  );

  return blogs;
}
