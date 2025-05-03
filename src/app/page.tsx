import { getBlogs } from "../../sanity/sanity-utils";
import BlogCard from "@/components/BlogCard";

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
           <BlogCard imgAlt={blog.slug} imgSrc={blog.image} blogTitle={blog.title} />
          </div>
        ))}
      </div>
    </>
  );
}
