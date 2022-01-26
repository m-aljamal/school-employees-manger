import React from "react";
import { useForm } from "react-hook-form";
import { client } from "src/utils/api-client";
import { useAsync } from "src/utils/hook";
import { IEmployee } from "src/utils/types";
const CreateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmployee>();

  const { run, data, error } = useAsync();

  const onSubmit = (data: IEmployee) => {
    run(
      client("create-employee", {
        data,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="border "
          />
        </div>
        <div>
          <label htmlFor="jobTitle">المسمى الوظيفي</label>
          <input
            className="border "
            type="text"
            id="jobTitle"
            {...register("jobTitle")}
          />
        </div>
        <div>
          <label htmlFor="salary">المرتب</label>
          <input
            className="border "
            type="text"
            id="salary"
            {...register("salary")}
          />
        </div>
        <div>
          <label htmlFor="startDate">تاريخ البدء</label>
          <input
            className="border "
            type="date"
            id="startDate"
            {...register("startDate")}
          />
        </div>
        <div>
          <label htmlFor="endDate">تاريخ الانتهاء</label>
          <input
            className="border "
            type="date"
            id="endDate"
            {...register("endDate")}
          />
        </div>
        <div>
          <label htmlFor="workContract">عقد العمل</label>
          <input
            className="border "
            type="text"
            id="workContract"
            {...register("workContract")}
          />
        </div>
        <div>
          <label htmlFor="avatar">الصورة</label>
          <input
            className="border "
            type="text"
            id="avatar"
            {...register("avatar")}
          />
        </div>
        <div>
          <label htmlFor="workHours">عدد ساعات العمل</label>
          <input
            className="border "
            type="number"
            id="workHours"
            {...register("workHours")}
          />
        </div>
        <div>
          <label htmlFor="startTime">يبدأ من الساعة</label>
          <input
            className="border "
            type="time"
            id="startTime"
            {...register("startTime")}
          />
        </div>
        <div>
          <label htmlFor="endTime">ينتهي الساعة</label>
          <input
            className="border "
            type="time"
            id="endTime"
            {...register("endTime")}
          />
        </div>

        <button type="submit">انشاء</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
