import React from "react";
import { useForm } from "react-hook-form";
import { client } from "src/utils/api-client";
import { useAsync } from "src/utils/hook";
import { IInOut } from "src/utils/types";

const EmployeesInOut = () => {
  const { run } = useAsync();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInOut>();

  const onSubmit = (data: IInOut) => {
    run(
      client("create-in-out", {
        data: { ...data, employeeId: "ckz5ihqii0010oayv499791f4" },
      })
    );
  };

  return (
    <div className="bg-neutral-600">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">التاريخ</label>
          <input type="date" id="name" {...register("date")} />
        </div>
        <div>
          <label htmlFor="notes">notes</label>
          <textarea {...register("notes")} id="notes" />
        </div>
        {/* string حصة حصتين يوم */}
        <div>
          <label htmlFor="discount">discount</label>
          <input type="string" id="discount" {...register("discount")} />
        </div>
        <div>
          <label htmlFor="attachment">attachment</label>
          <input {...register("attachment")} type="text" />
        </div>
        <button type="submit">تسجيل</button>
      </form>
    </div>
  );
};

export default EmployeesInOut;
