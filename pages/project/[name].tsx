import { GetServerSideProps } from "next";
import React from "react";
import { prisma } from "src/utils/prisma";
const Project = ({ project }: any) => {
  return (
    <div>
      <h1>مشروع</h1>
      {project?.name}
    </div>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const project = await prisma.project.findUnique({
    where: {
      name: context.query.name as string,
    },
  });

  return {
    props: {
      project,
    },
  };
};
