import React from "react";
import { Outlet } from "react-router-dom";

function MainHeader() {
  return (
    <div>

      {/* we use Outlet for giving to permission of parent component route to render its child component route */}
      <Outlet />
    </div>
  );
}

export default MainHeader;
