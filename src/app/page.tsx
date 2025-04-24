import { getBlogs } from "../../sanity/sanity-utils";

export default async function Home() {
  const blogs = await getBlogs()
  return (
    <>
    <h1>Blogs</h1>
    <br/>
    <div>
      {blogs.map((blog)=>(
        <h3 key={blog._id}>{blog.title}</h3>
      ))}
    </div>
    </>
  );
}
