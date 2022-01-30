import React from "react";
import Image from "next/image";

const EmployeeChart = () => {
  return (
    <div>
      {/* top */}
      <div className="flex">
        <Employee name="محمد الجمل" position="مشرف تربوي" image="/image.jpg" />
        <Employee name="محمد الجمل" position="مدير" image="/face.jpg" />
      </div>
      {/* mangers  */}
      <div className="flex">
        <Employee name="محمد الجمل" position="امين سر" image="/face.jpg" />
        <Employee name="محمد الجمل" position="مرشد" image="/face.jpg" />
        <Employee name="محمد الجمل" position="موجه" image="/face.jpg" />
      </div>
      {/* another mangers */}
      <div className="flex">
        <Employee name="محمد الجمل" position="اعلامي" image="/face.jpg" />
        <Employee name="محمد الجمل" position="مستخدم" image="/face.jpg" />
        <Employee name="محمد الجمل" position="حارس" image="/face.jpg" />
      </div>
      <div>
        <div>
          <p className="text-center text-lg">الصف الاول:</p>
          <p>الشعبة الاولى:</p>
          <div className="flex">
            <Employee
              name="محمد الجمل"
              position="لغة عربية"
              image="/face.jpg"
            />
            <Employee name="محمد الجمل" position="رياضيات" image="/face.jpg" />
          </div>
          <p>الشعبة الثانية:</p>
          <div className="flex">
            <Employee
              name="محمد الجمل"
              position="لغة انكليزي"
              image="/face.jpg"
            />
            <Employee name="محمد الجمل" position="معلم صف" image="/face.jpg" />
          </div>
        </div>
        <div>
          <p className="text-center">الصف الثاني:</p>
          <p>الشعبة الاولى:</p>
          <div className="flex">
            <Employee name="محمد الجمل" position="مستخدم" image="/face.jpg" />
            <Employee name="محمد الجمل" position="مستخدم" image="/face.jpg" />
          </div>
          <p>الشعبة الثانية:</p>
          <div className="flex">
            <Employee name="محمد الجمل" position="مستخدم" image="/face.jpg" />
            <Employee name="محمد الجمل" position="مستخدم" image="/face.jpg" />
            <Employee name="محمد الجمل" position="مستخدم" image="/face.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeChart;

const Employee = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => {
  return (
    <div className=" flex items-center w-[250px] mx-auto my-3">
      <div className="border-4 z-10 border-yellow-500 -ml-5 rounded-full flex">
        <Image
          width={90}
          height={90}
          src={image}
          className="w-full rounded-full"
        />
      </div>
      <div className="bg-gray-300  w-[200px] text-center rounded-lg py-1 text-gray-800 text-lg">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};
