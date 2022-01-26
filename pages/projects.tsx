import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import CreateProject from "src/components/CreateProject";
import { prisma } from "src/utils/prisma";
const projects = ({ projects }: any) => {
  return (
    <div>
      <CreateProject />
      <hr />
      <h2 className="mb-2">جميع المشاريع</h2>
      {projects.length ? (
        projects.map((proj: any) => (
          <Link href={`/project/${proj.name}`} key={proj.id}>
            <div className="border p-3 cursor-pointer  ">
              <p>{proj.name}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>لا يوجد مشاريع</p>
      )}
    </div>
  );
};

export default projects;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await prisma.project.findMany();
  return {
    props: { projects },
  };
};
