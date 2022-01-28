import { GetServerSideProps } from "next";
import React from "react";
import Absence from "src/components/absence";
import CreateEmployee from "src/components/CreateEmployee";
import EmployeesInOut from "src/components/EmployeesInOut";
import PaidSalary from "src/components/PaidSalary";
import { prisma } from "src/utils/prisma";
const Project = ({ project, employees }: any) => {
  console.log(employees);
  
  return (
    <div>
      <h1>مشروع</h1>
      {project?.name}
      <hr />
      <div className="bg-blue-200">
        <h2 className="my-2">جميع الموظفين</h2>
        {employees.length ? (
          employees.map((employee: any) => (
            <div key={employee.id} className="border p-3">
              <h3>{employee.name}</h3>
              <p>{employee.jobTitle}</p>
              <p>{employee.salary}</p>
            </div>
          ))
        ) : (
          <p>لا يوجد موظفين</p>
        )}
      </div>
      <hr />
      <h2>الدوام اليومي</h2>
      <EmployeesInOut />
      <hr />
      <Absence />
      <hr />
      <PaidSalary />
      <CreateEmployee />
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
    select: {
      name: true,
      jobTitle: true,
      project: true,
      salary: true,
      PaidSalaries: true,

      InOut: true,
    },
  });

  return {
    props: {
      project,
      employees,
    },
  };
};
