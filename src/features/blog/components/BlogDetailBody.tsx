import Markdown from "@/components/Markdown";
import { Blog } from "@/types/blog";
import React, { FC } from "react";

interface BlogDetailBodyProps {
  blog: Blog;
}

const BlogDetailBody: FC<BlogDetailBodyProps> = ({ blog }) => {
  return (
    <section className="mt-4">
      <Markdown content={blog.content} />
    </section>
  );
};

export default BlogDetailBody;
