import Image from "next/image";
import {PortableText} from '@portabletext/react'
import { getBlogs } from "../../sanity/sanity-utils";

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      <h1>Blogs</h1>
      <br />
      <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <Image src={blog.image} height={300} width={400} alt={blog.slug} />
            <p>
              Published: <span>{blog._createdAt}</span>
            </p>
            <br></br>
            {blog.author.image && (
              <Image
                src={blog.author.image}
                height={60}
                width={60}
                alt={blog.author.name}
              />
            )}
            <p>
              Author: <span>{blog.author.name}</span>
            </p>
            <PortableText value={blog.content}/>
          </div>
        ))}
      </div>
    </>
  );
}
