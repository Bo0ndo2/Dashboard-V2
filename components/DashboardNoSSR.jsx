"use client";

import dynamic from "next/dynamic";

const DashboardClient = dynamic(() => import("./DashboardClient"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function DashboardNoSSR(props) {
  return <DashboardClient {...props} />;
}
