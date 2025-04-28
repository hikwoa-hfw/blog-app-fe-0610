"use client";
import useGetBlogBySlug from "@/hooks/api/blogs/useGetBlogBySlug";
import React, { FC } from "react";
import BlogDetailHeader from "./components/BlogDetailHeader";
import BlogDetailBody from "./components/BlogDetailBody";

interface BlogDetailPageProps {
  slug: string;
}

const BlogDetailPage: FC<BlogDetailPageProps> = ({ slug }) => {
  const { data: blog, isPending } = useGetBlogBySlug(slug);

  if (isPending) {
    return <h1 className="text-center">Loading..</h1>;
  }

  if (!blog) {
    return <h1 className="text-center"> NO DATA </h1>;
  }

  return (
    <main className="container mx-auto max-w-6xl px-4">
      <BlogDetailHeader blog={blog}/>
      <BlogDetailBody blog={blog}/>
    </main>
  );
};

export default BlogDetailPage;
