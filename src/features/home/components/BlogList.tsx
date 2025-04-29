"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import useGetBlogs from "@/hooks/api/blogs/useGetBlogs";
import PaginationSection from "@/components/Pagination";
import {parseAsInteger, useQueryState} from 'nuqs'
import { Input } from "@/components/ui/input";
import { useDebounceValue } from "usehooks-ts";

const BlogList = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState("search", {defaultValue: ""});
  const [debounceSearch] = useDebounceValue(search, 500);

  const { data: blogs, isPending } = useGetBlogs({
    search: debounceSearch,
    page,
    take: 3,
  });

  const onChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Input
        className="mx-auto mt-10 max-w-xl"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      {isPending && (
        <div className="flex h-[30vh] items-center justify-center">
          <h2>Loading...</h2>
        </div>
      )}

      {!isPending && !blogs?.data.length && (
        <div className="flex h-[30vh] items-center justify-center">
          <h2>No Data</h2>
        </div>
      )}

      {!!blogs && !!blogs.data.length && (
        <div className="space-y-8 mb-6">
          <section className="mt-10 grid md:grid-cols-3 gap-8">
            {blogs.data.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </section>
          <PaginationSection
            onChangePage={onChangePage}
            page={blogs.meta.page}
            total={blogs.meta.total}
            take={blogs.meta.take}
          />
        </div>
      )}
    </>
  );
};

export default BlogList;
