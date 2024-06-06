import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white flex py-2 px-5 justify-between">
      <Link href="/">
        <Image src="" alt="Profile Logo" />
      </Link>
      Navbar
    </div>
  );
}

export default Navbar;
