import { GetServerSideProps } from "next";
import Link from "next/link";
import CreateInOut from "pages/api/create-in-out";
import React from "react";
import Absence from "src/components/absence";
import CreateEmployee from "src/components/CreateEmployee";
import EmployeeChart from "src/components/EmployeeChart";
import EmployeesInOut from "src/components/EmployeesInOut";
import PaidSalary from "src/components/PaidSalary";
import { prisma } from "src/utils/prisma";

const Project = ({ project, employees }: any) => {
  return (
    <div>
      <h2 className="text-xl">{project?.name}</h2>
      <div className="flex gap-3 text-sm mt-2">
        <p>اللوحة</p>
        <p>/</p>
        <p>دابق</p>
      </div>

      <div className="mt-8">
        {employees.map((em: any) => (
          <div key={em.id}>
            <p>{em.name}</p>
            <p>{em.id}</p>
          </div>
        ))}
      </div>
      <EmployeesInOut />
      <CreateEmployee />
      <Absence />
      <Link href={`${project.name}/salaries`}>الرواتب</Link>
    </div>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const project = await prisma.project.findUnique({
    where: {
      name: query.name as string,
    },
  });
  const employees = await prisma.employee.findMany({
    where: {
      projectId: project?.id,
    },
  });

  return {
    props: {
      project,
      employees,
    },
  };
};
