import React from "react";
import { Outlet } from "react-router-dom";
import WebsiteHeader from "./WebsiteHeader";
import WebsiteFooter from "./WebsiteFooter";
import "./WebsiteLayout.css";

const WebsiteLayout = () => {
  return (
    <div className="website-layout">
      <WebsiteHeader />
      <main className="website-main">
        <Outlet />
      </main>
      <WebsiteFooter />
    </div>
  );
};

export default WebsiteLayout;
