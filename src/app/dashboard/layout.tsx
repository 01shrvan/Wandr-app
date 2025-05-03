import { AuthProvider } from "@/context/auth-context"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-neutral-950">
            <AuthProvider>
                {children}
            </AuthProvider>
        </div>
    )
}