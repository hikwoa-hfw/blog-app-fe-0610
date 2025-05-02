import { FC } from "react";
import EditBlogForm from "./components/EditBlogForm";

interface EditPageProps {
  slug: string;
}

const EditPage: FC<EditPageProps> = ({ slug }) => {
  return (
    <div className="container mx-auto px-4">
      <EditBlogForm slug={slug} />
    </div>
  );
};

export default EditPage;
