import { mockTransactions } from "../data/mockTransactions";
import DashboardNoSSR from "@/components/DashboardNoSSR";

export default function Dashboard() {
  // Server-side slicing of data to avoid bundling 1000 items to client
  const recentTransactions = mockTransactions.slice(0, 10);
  return <DashboardNoSSR transactions={recentTransactions} />;
}
