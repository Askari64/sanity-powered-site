import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export async function getBlogs() {

    const client = createClient({
        projectId,
        dataset,
        apiVersion: '2025-03-14'
    })

    return client.fetch(
        groq`*[_type=='Blogs']{
        _id,
        _createdAt,
        title,
        author,
        "slug": slug.current,
        "image": image.asset-> url,
        content
        }`
    )
}