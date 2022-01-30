import { FC } from "react";
import Sidebar from "./Sidebar";

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex justify-between" style={{ direction: "rtl" }}>
      <Sidebar />
      <div className="w-full container pt-4">{children}</div>
    </div>
  );
};

export default AppLayout;
