import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db"
import { formatNumber, formatCurrency } from "@/lib/formatters";

async function getSalesData(){
    const data = await db.order.aggregate({
        _sum: {pricePaidInCents: true},
        _count: true
    })

    return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count
    }
}

export default async function AdminDashboard() {
    const salesData = await getSalesData()
    // return <h1>Dashboard</h1>
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title = "Sales" subtitle={formatNumber(salesData.numberOfSales)} body={formatCurrency(salesData.amount)} />
        <DashboardCard title = "Sales" subtitle="test" body="body" />
        <DashboardCard title = "Sales" subtitle="test" body="body" />
        <DashboardCard title = "Sales" subtitle="test" body="body" />
    </div>
}

type DashBoardCardProps = {
    title: string
    subtitle: string
    body: string
}

function DashboardCard({ title, subtitle, body }: DashBoardCardProps) {
    return <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{body}</p>
        </CardContent>
    </Card>
}