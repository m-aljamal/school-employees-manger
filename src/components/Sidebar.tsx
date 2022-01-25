import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-700 w-1/4 text-white text-lg flex gap-10 flex-col h-screen p-5">
      <Link href="/">اللوحة</Link>
      <Link href="/projects">المشاريع</Link>
      <Link href="/admins">المشرفين</Link>
    </div>
  );
};

export default Sidebar;
