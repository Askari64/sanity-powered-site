import type { PortableTextBlock } from "next-sanity";

export interface BlogInterface {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    image: string;
    content: PortableTextBlock[]; // You can be more specific if you're parsing Portable Text later
    author: {
      name: string;
      image?: "string";
    };
  }
  

/*
        _id,
        _createdAt,
        title,
        author,
        "slug": slug.current,
        "image": image.asset -> url,
        content
*/