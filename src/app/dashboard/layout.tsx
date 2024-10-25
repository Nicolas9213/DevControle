import { HeaderDashboard } from "@/components/layout/HeaderDashboard";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderDashboard/>
            {children}
        </>
    )
}