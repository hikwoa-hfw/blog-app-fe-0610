"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useDeleteBlog = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await axiosInstance.delete(`/blogs/${id}`);
      return data;
    },
    onSuccess: async () => {
      toast.success("Delete blog success");
      await queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push("/");
    },
    onError: async (error: AxiosError<any>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useDeleteBlog;
