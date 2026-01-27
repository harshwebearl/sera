import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 relative">

      {/* DESKTOP SIDEBAR */}
      <Sidebar />

      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          {/* SLIDE PANEL */}
          <div className="fixed top-0 left-0 h-full z-50 md:hidden">
            <Sidebar
              mobile
              closeSidebar={() => setSidebarOpen(false)}
            />
          </div>
        </>
      )}

      {/* MAIN CONTENT */}
      {/* for table responsive */}
      {/* <div className="flex-1 flex flex-col overflow-auto"> */}

      <div className="flex-1 flex flex-col overflow-auto">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto  p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
