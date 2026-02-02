import { mockTransactions } from "../data/mockData";
import DashboardClient from "@/components/DashboardClient";

export default function Dashboard() {
  // Server-side slicing of data to avoid bundling 1000 items to client
  const recentTransactions = mockTransactions.slice(0, 10);

  return <DashboardClient transactions={recentTransactions} />;
}
