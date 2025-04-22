"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();

  return (
    <div>
      <h1>HomePage</h1>
      {user ? <p>{user.name}</p> : <p>please login first</p>}
      {user ? (
        <Button onClick={clearAuth}>Logout</Button>
      ) : (
        <Button onClick={() => router.push("/login")}>Login</Button>
      )}
    </div>
  );
}
