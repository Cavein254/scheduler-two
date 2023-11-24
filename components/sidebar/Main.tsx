import React from "react";

import dynamic from "next/dynamic";

const DynamicMain = dynamic(() => import("./MainSidebar"), {
  loading: () => <p>Loading...</p>,
});

export default DynamicMain;
