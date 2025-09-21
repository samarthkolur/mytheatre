"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { use } from "react";
export function Navbar() {
  const router = useRouter();
  const Handlesignin = () => {
    router.push("/login");
  };

  return (
    <div className="fixed top-0 w-full text-center p-4 bg-black">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Button variant="ghost" onClick={Handlesignin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
