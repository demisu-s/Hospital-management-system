"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export async function handleGithubSignIn() {
  const router = useRouter();

  try {
    await signIn("github", { callbackUrl: "/patients/register" });
  } catch (error) {
    console.error("GitHub sign-in failed:", error);
  }
}
