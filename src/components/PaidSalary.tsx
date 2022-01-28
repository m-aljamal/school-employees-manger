import React from "react";
import { useForm } from "react-hook-form";
import { client } from "src/utils/api-client";
import { useAsync } from "src/utils/hook";
import { IPaidSalary } from "src/utils/types";

const PaidSalary = () => {
  const { register, handleSubmit } = useForm<IPaidSalary>();
  const { run } = useAsync();
  const onSubmit = async (data: IPaidSalary) => {
    run(client("create-paid-salary", { data }));
  };
  return (
    <div className="bg-orange-300">
      <h1>تسجيل دفع الرواتب</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">الراتب</label>
          <input type="number" {...register("amount")} id="amount" />
        </div>
        <div>
          <label htmlFor="date">التاريخ</label>
          <input type="date" {...register("date")} id="date" />
        </div>
        <div>
          <label htmlFor="notes">ملاحظات</label>
          <input type="text" {...register("notes")} id="notes" />
        </div>
        <button type="submit">حفظ</button>
      </form>
    </div>
  );
};

export default PaidSalary;
