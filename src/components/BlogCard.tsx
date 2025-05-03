import Image from "next/image";

interface BlogCardProps {
  imgSrc: string;
  imgAlt: string;
  blogTitle: string;
}

function BlogCard({ imgSrc, imgAlt, blogTitle }: BlogCardProps) {
  return (
    <div id="container">
      <Image src={imgSrc} height={60} width={60} alt={imgAlt} />
      <h2>{blogTitle}</h2>
    </div>
  );
}

export default BlogCard;
