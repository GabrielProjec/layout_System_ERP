import React, {useState} from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

function Main() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isCollapsed={isCollapsed} isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-auto p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
