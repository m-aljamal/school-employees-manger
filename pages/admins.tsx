import React from "react";
import { useForm } from "react-hook-form";
import { User } from "src/utils/types";
import { client } from "src/utils/api-client";
import { useAsync } from "src/utils/hook";
import CreateAdmin from "src/components/createAdmin";
import { GetServerSideProps } from "next";
import { prisma } from "src/utils/prisma";
const admins = ({ adminList }: any) => {
  return (
    <div>
      <CreateAdmin />
      <hr className="my-10" />
      <h2>جميع المشرفين</h2>
      {adminList.length ? (
        adminList.map((admin: any) => (
          <div key={admin.id} className=" border my-8">
            <h2> الاسم: {admin.name}</h2>
            <p>اسم المستخدم: {admin.username}</p>
          </div>
        ))
      ) : (
        <p>لا يوجد مشرفين</p>
      )}
    </div>
  );
};

export default admins;

export const getServerSideProps: GetServerSideProps = async () => {
  const adminList = await prisma.user.findMany({});
  return {
    props: {
      adminList,
    },
  };
};
