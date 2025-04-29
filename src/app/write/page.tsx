import WritePage from "@/features/write";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Write = async () => {
  const session = await auth();

  if (!session) return redirect("/login");
  return (
    <div>
      <WritePage />
    </div>
  );
};

export default Write;
