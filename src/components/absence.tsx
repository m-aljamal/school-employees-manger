import React from "react";
import { useForm } from "react-hook-form";
import { client } from "src/utils/api-client";
import { useAsync } from "src/utils/hook";
import { IAbsence } from "src/utils/types";

const Absence = () => {
  const { register, handleSubmit } = useForm<IAbsence>();
  const { run } = useAsync();
  const onSubmit = async (data: IAbsence) => {
    run(client("create-absence", { data }));
  };
  return (
    <div className="bg-green-300">
      <h1>تسجيل غياب</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="date">التاريخ</label>
          <input type="date" id="date" {...register("date")} />
        </div>
        <div>
          <label htmlFor="reason">السبب</label>
          <input id="reason" {...register("reason")} />
        </div>
        <div>
          <label htmlFor="notes">ملاحظات</label>
          <input id="notes" {...register("notes")} />
        </div>
        <div>
          <label htmlFor="approved">تم التاكيد</label>
          <input id="approved" {...register("approved")} />
        </div>
        <div>
          <label htmlFor="attachment">الملحقات</label>
          <input id="attachment" {...register("attachment")} />
        </div>
        <button>حفظ</button>
      </form>
    </div>
  );
};

export default Absence;
