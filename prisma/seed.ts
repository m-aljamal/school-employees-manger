import { PrismaClient } from "@prisma/client";

import set from "date-fns/set";

const prisma = new PrismaClient();

function formatTime(time: string) {
  const [hours, minutes] = time.split(":");
  return set(new Date(), {
    hours: +hours + 3,
    minutes: +minutes,
    seconds: 0,
    milliseconds: 0,
  });
}

const employeesDate = [
  {
    name: "بهنام رضایی",
    jobTitle: "EDUCATION_SUPERVISOR",
    salary: 150,
    startDate: new Date("01-01-2022"),
    workContract: "",
    workHours: 5,
    startTime: formatTime("07:30"),
    endTime: formatTime("12:30"),
    projectId: "ckz2r8x8d001029yv5d18kv12",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "مصطفى كامل",
    jobTitle: "HEAD_TEACHER",
    salary: 140,
    startDate: new Date("01-01-2022"),
    workContract: "",
    workHours: 5,
    startTime: formatTime("07:30"),
    endTime: formatTime("12:30"),
    projectId: "ckz2r8x8d001029yv5d18kv12",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "عوض ناصر",
    jobTitle: "TEACHER",
    salary: 120,
    startDate: new Date("01-01-2022"),
    workContract: "",
    workHours: 5,
    startTime: formatTime("07:30"),
    endTime: formatTime("12:30"),
    projectId: "ckz2r8x8d001029yv5d18kv12",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "محمد العمر",
    jobTitle: "TEACHER",
    salary: 120,
    startDate: new Date("01-01-2022"),
    workContract: "",
    workHours: 5,
    startTime: formatTime("12:30"),
    endTime: formatTime("05:30"),
    projectId: "ckz2r8x8d001029yv5d18kv12",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const run = async () => {
  await Promise.all(
    employeesDate.map((em) => {
      return prisma.employee.create({
        data: {
          name: em.name,
          jobTitle: em.jobTitle,
          avatar: em.avatar,
          salary: em.salary,
          startDate: em.startDate,
          workContract: em.workContract,
          workHours: em.workHours,
          startTime: em.startTime,
          endTime: em.endTime,
          projectId: em.projectId,
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
