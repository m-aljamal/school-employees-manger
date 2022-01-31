import React from "react";
import { GetServerSideProps } from "next";
import { prisma } from "src/utils/prisma";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";

const CreateMonthSalary = ({ employees, project }: any) => {
  console.log({ employees, project });

  return (
    <div>
      <h2 className="text-xl">{project?.name}</h2>
    </div>
  );
};

export default CreateMonthSalary;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const employees = await prisma.employee.findMany({
    where: {
      project: {
        name: query.name as string,
      },
    },
    select: {
      name: true,
      salary: true,
      InOut: {
        where: {
          date: {
            gte: startOfMonth(new Date()),
            lte: endOfMonth(new Date()),
          },
        },
        select: {
          date: true,
          in: true,
          out: true,
        },
      },
      Absence: {
        where: {
          date: {
            gte: startOfMonth(new Date()),
            lte: endOfMonth(new Date()),
          },
        },
        select: {
          date: true,
        },
      },
    },
  });

  const project = await prisma.project.findUnique({
    where: {
      name: query.name as string,
    },
    select: {
      name: true,
    },
  });

  return {
    props: { employees, project },
  };
};
