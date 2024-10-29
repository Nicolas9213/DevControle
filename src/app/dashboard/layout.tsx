import { HeaderDashboard } from "@/app/dashboard/components/HeaderDashboard";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderDashboard/>
            {children}
        </>
    )
}