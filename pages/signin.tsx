import React from "react";
import { useForm } from "react-hook-form";
import { LoginForm } from "src/components/types";
const signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">اسم المستخدم</label>
          <input
            id="username"
            {...register("username")}
            className="border my-4"
          />
        </div>
        <div>
          <label htmlFor="password">كلمة المرور</label>
          <input id="password" {...register("password")} className="border" />
        </div>
        <button type="submit" className="bg-blue-400 text-white p-1 ">
          دخول
        </button>
      </form>
    </div>
  );
};

export default signin;
