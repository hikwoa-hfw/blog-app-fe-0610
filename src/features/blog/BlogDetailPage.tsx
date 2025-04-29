"use client";
import BlogDetailBody from "@/features/blog/components/BlogDetailBody";
import BlogDetailHeader from "@/features/blog/components/BlogDetailHeader";
import useGetBlogBySlug from "@/hooks/api/blogs/useGetBlogBySlug";
import { FC } from "react";

interface BlogDetailPageProps {
  slug: string;
}
const BlogDetailPage: FC<BlogDetailPageProps> = ({ slug }) => {
  const { data: blog, isPending } = useGetBlogBySlug(slug);
  console.log(blog);
  if (isPending) {
    return <h1 className="text-center">Loading</h1>;
  }
  if (!blog) {
    return <h1 className="text-center">No Data</h1>;
  }

  return (
    <main className="container mx-auto max-w-6xl px-4">
      {" "}
      <BlogDetailHeader blog={blog} />
      <BlogDetailBody blog={blog} />
    </main>
  );
};

export default BlogDetailPage;