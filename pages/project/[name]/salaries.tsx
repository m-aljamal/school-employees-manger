import React from "react";
import { GetServerSideProps } from "next";
import { prisma } from "src/utils/prisma";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import isAfter from "date-fns/isAfter";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";

const CreateMonthSalary = ({ employees, project }: any) => {
  const date = employees[8].InOut[5].in;
  const out = employees[8].InOut[5].out;

  const startTime = employees[8].startTime;
  const endTime = employees[8].endTime;

  const h = new Date(date).getUTCHours();
  const m = new Date(date).getUTCMinutes();

  const h2 = new Date(out).getUTCHours();
  const m2 = new Date(out).getUTCMinutes();

  const sh = new Date(startTime).getUTCHours();
  const sm = new Date(startTime).getUTCMinutes();

  const eh = new Date(endTime).getUTCHours();
  const em = new Date(endTime).getUTCMinutes();

  const findDef = h - sh;
  console.log(findDef);

  const findDefInMin = m - sm;
  console.log(findDefInMin);

  console.log({ h, m, h2, m2, sh, sm, eh, em });

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
      startTime: true,
      endTime: true,
      InOut: {
        where: {
          date: {
            gte: startOfMonth(new Date()),
            lte: endOfMonth(new Date()),
          },
          // in: Thu Jan 01 1970 09:50:00 GMT+0200 (GMT+03:00)
          // in:{
          //   gte:
          // }
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
