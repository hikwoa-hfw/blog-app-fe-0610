import BlogDetailPage from '@/features/blog/BlogDetailPage'
import React from 'react'

const BlogDetail = async ({
    params
}: {
    params: Promise<{slug:string}>
}) => {

    const slug = (await params).slug
  return (
    <div>
        <BlogDetailPage slug={slug} />
    </div>
  )
}

export default BlogDetail