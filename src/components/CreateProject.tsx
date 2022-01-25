import React from "react";
import { useForm } from "react-hook-form";
import { client } from "src/utils/api-client";
import { useAsync } from "src/utils/hook";
import { ICreateProject } from "src/utils/types";
const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProject>();
  const { run, data } = useAsync();
  const onSubmit = (data: ICreateProject) => {
    run(client("createproject", { data }));
  };

  return (
    <div>
      <h2>مشروع جديد</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">اسم المشروع</label>
          <input id="name" className="border my-4" {...register("name")} />
        </div>
        <button type="submit" className="bg-blue-400 text-white p-1 ">
          إنشاء
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
