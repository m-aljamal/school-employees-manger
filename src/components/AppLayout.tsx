import { FC } from "react";
import Sidebar from "./Sidebar";

const AppLayout: FC = ({ children }) => {
  return (
    <div className="flex justify-between ">
      {children}
      <Sidebar />
    </div>
  );
};

export default AppLayout;
