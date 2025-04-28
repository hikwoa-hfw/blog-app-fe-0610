import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types/blog";
import React, { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import useDeleteBlog from "@/hooks/api/blogs/useDeleteBlog";
import ModalDeleteBlog from "./ModalDeleteBlog";
import { useAuthStore } from "@/stores/auth";

interface BlogDetailHeaderProps {
  blog: Blog;
}

const BlogDetailHeader: FC<BlogDetailHeaderProps> = ({ blog }) => {
  const { user } = useAuthStore();
  const { mutateAsync: deleteBlog, isPending } = useDeleteBlog();

  const handleDelete = async () => {
    await deleteBlog(blog.id);
  };
  return (
    <section className="mt-10 space-y-2">
      <Badge
        variant="outline"
        className="rounded-sm bg-green-100 text-gray-600 capitalize"
      >
        {blog.category}
      </Badge>

      <h1 className="text-3xl font-bold">{blog.title}</h1>

      <div className="flex items-center justify-between">
        <p>
          {format(new Date(blog.createdAt), "dd MM yyyy")} -{" "}
          <span className="capitalize">{blog.user?.name}</span>
        </p>
        {user?.id === blog.userId && (
          <ModalDeleteBlog isPending={isPending} onClick={handleDelete} />
        )}
      </div>

      <div className="relative h-[300px]">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    </section>
  );
};

export default BlogDetailHeader;
