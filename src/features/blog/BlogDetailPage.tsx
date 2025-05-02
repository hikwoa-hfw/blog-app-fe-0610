"use client";
import Loading from "@/components/Loading";
import NoData from "@/components/NoData";
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
    return <Loading/>;
  }
  if (!blog) {
    return <NoData/>;
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