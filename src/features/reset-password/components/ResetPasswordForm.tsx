'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ForgotPasswordSchema } from "@/features/forgot-password/schema";
import useResetPassword from "@/hooks/api/auth/useResetPassword";
import { Label } from "@radix-ui/react-label";
import { useFormik } from "formik";
import React, { FC } from "react";
import { ResetPasswordSchema } from "../schema";

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ token }) => {
  const { mutateAsync: resetPassword, isPending } = useResetPassword(token);
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordSchema,

    onSubmit: async (values) => {
        await resetPassword(values)
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your data below to reset your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=""
                  required
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.password && !!formik.errors.password && (
                  <p className="text-xs text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="m@example.com"
                  required
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword && (
                    <p className="text-xs text-red-500">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>

              <Button type="submit" className="w-full">
                {isPending ? "Loading..." : "Send"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
