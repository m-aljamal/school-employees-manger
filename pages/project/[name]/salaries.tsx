import React from "react";
import { GetServerSideProps } from "next";
import { prisma } from "src/utils/prisma";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";

import {
  calculateAbcenseDiscount,
  countTotalInOutSalaryDiscount,
} from "src/utils/countTotalInOutSalaryDiscount";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "src/components/CreatePDF";

const CreateMonthSalary = ({ employees, project }: any) => {
  return (
    <div>
      <h2 className="text-xl">{project?.name}</h2>
      <PDFDownloadLink document={<MyDocument />} fileName="fee_acceptance.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      {employees?.map((employee: any) => (
        <SingleEmployeeSalary employee={employee} key={employee.id} />
      ))}
    </div>
  );
};

export default CreateMonthSalary;

const SingleEmployeeSalary = ({ employee }: any) => {
  const totalAbsence = calculateAbcenseDiscount(employee.Absence.length);

  const inoutSalaryDiscount = countTotalInOutSalaryDiscount(
    employee.InOut,
    employee.salary
  );
  return (
    <div className="py-3 ">
      <h2 className="text-xl">{employee?.name}</h2>
      <div className="flex gap-10">
        <p>الراتب:</p>
        <p>{employee?.salary}</p>
        <p>خصم التأخر</p>
        <p>{inoutSalaryDiscount}</p>
        <p>خصم الراتب</p>
        <p>{totalAbsence}</p>
        <p>الصافي</p>
        <p>{employee?.salary - totalAbsence - inoutSalaryDiscount}</p>
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
