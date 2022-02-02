import React from "react";
import { GetServerSideProps } from "next";
import { prisma } from "src/utils/prisma";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import isAfter from "date-fns/isAfter";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { countTotalSalaryDiscount } from "src/utils/countTotalSalaryDiscount";

const CreateMonthSalary = ({ employees, project }: any) => {
  return (
    <div>
      <h2 className="text-xl">{project?.name}</h2>
      {employees?.map((employee: any) => (
        <SingleEmployeeSalary employee={employee} key={employee.id} />
      ))}
    </div>
  );
};

export default CreateMonthSalary;

const SingleEmployeeSalary = ({ employee }: any) => {
  return (
    <div className="py-3 ">
      <h2 className="text-xl">{employee?.name}</h2>
      <div className="flex gap-10">
        <p>الراتب:</p>
        <p>{employee?.salary}</p>
        <p>الخصم</p>
        <p>{countTotalSalaryDiscount(employee.InOut, employee.salary)}</p>
      </div>
    </div>
  );
};

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
      id: true,
      InOut: {
        where: {
          date: {
            gte: startOfMonth(new Date()),
            lte: endOfMonth(new Date()),
          },
        },

        select: {
          discount: true,
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
