import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      {/* Div for the left side */}
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">MovieShorts</h1>
        </Link>
      </div>

      {/* Div for thr right side */}
      <div className="flex items-center gap-x-5 pr-5">
        <Button>Log In</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </nav>
  );
}
