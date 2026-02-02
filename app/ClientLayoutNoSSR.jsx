"use client";

import dynamic from "next/dynamic";

const ClientLayout = dynamic(() => import("./ClientLayout"), {
  ssr: false,
  loading: () => <p>Loading Application...</p>,
});

export default ClientLayout;
