"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/hero";
import { use } from "react";
import Trending from "@/components/trending";
import Loading from "@/components/loading";
import { useState } from "react";

export default function () {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const Handlesignin = () => {
    setLoading(true);
    router.push("/login");
  };

  return (
    <div className="border-2 m-10 rounded-sm">
      <div className="border-b-2 p-5 flex justify-between items-center">
        <h1 className="font-bold">MyTheatre</h1>
        <div className="flex gap-5">
          <Button onClick={Handlesignin}>Sign In</Button>
          <Button
            variant="outline"
            className="border-2"
            onClick={() => {
              setLoading(true);
              router.push("/register");
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div>
        <div className="p-10 justify-center items-center">
          <Hero></Hero>
        </div>
        <Trending></Trending>
      </div>
    </div>
  );
}
