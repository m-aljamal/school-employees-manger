import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-700 text-white flex gap-10 flex-col h-screen p-5">
      <Link href="/createproject">createProject</Link>
      <Link href="/createuser">createuser</Link>
      <Link href="/">home</Link>
    </div>
  );
};

export default Sidebar;
