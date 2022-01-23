import React from "react";
import { useForm } from "react-hook-form";
import { User } from "src/components/types";
const createuser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit = (data: User) => {
    console.log(data);
  };
  return (
    <div>
      <h1>مشرف جديد</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">اسم المشرف</label>
          <input id="name" className="border my-4" {...register("name")} />
        </div>
        <div>
          <label htmlFor="username">اسم المستخدم</label>
          <input
            id="username"
            className="border my-4"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="password">كلمة المرور</label>
          <input id="password" className="border" {...register("password")} />
        </div>
        <button type="submit" className="bg-blue-400 text-white p-1 ">
          إنشاء
        </button>
      </form>
    </div>
  );
};

export default createuser;
