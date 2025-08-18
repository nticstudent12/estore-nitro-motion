import { AdminLayout } from "@/components/AdminLayout"
import { AddProductModal } from "@/components/AddProductModal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  Package, 
  DollarSign,
  ArrowUpRight,
  Activity
} from "lucide-react"
import { useState } from "react"

const Dashboard = () => {
  const [addProductModalOpen, setAddProductModalOpen] = useState(false)

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "increase",
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "Orders",
      value: "2,345",
      change: "+15.3%",
      changeType: "increase", 
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Products",
      value: "157",
      change: "+2.5%",
      changeType: "increase",
      icon: Package,
      description: "active products"
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+8.1%",
      changeType: "increase",
      icon: Users,
      description: "total users"
    }
  ]

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", amount: "$259.99", status: "completed", time: "2 min ago" },
    { id: "#ORD-002", customer: "Jane Smith", amount: "$149.99", status: "processing", time: "5 min ago" },
    { id: "#ORD-003", customer: "Bob Johnson", amount: "$89.99", status: "shipped", time: "10 min ago" },
    { id: "#ORD-004", customer: "Alice Brown", amount: "$199.99", status: "completed", time: "15 min ago" },
    { id: "#ORD-005", customer: "Charlie Wilson", amount: "$299.99", status: "processing", time: "20 min ago" }
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed": return "default"
      case "processing": return "secondary"
      case "shipped": return "outline"
      default: return "secondary"
    }
  }

  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Welcome back! Here's what's happening with your store."
    >
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="relative overflow-hidden border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className={`flex items-center gap-1 ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.changeType === 'increase' ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </div>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-7">
          {/* Recent Orders */}
          <Card className="lg:col-span-4 border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recent Orders</CardTitle>
                  <CardDescription>Latest customer orders and their status</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={getStatusVariant(order.status)} className="capitalize">
                        {order.status}
                      </Badge>
                      <div className="text-right">
                        <p className="font-semibold">{order.amount}</p>
                        <p className="text-xs text-muted-foreground">{order.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="lg:col-span-3 border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="hero" 
                className="w-full justify-start gap-3 h-12"
                onClick={() => setAddProductModalOpen(true)}
              >
                <Package className="h-5 w-5" />
                Add New Product
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Users className="h-5 w-5" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Activity className="h-5 w-5" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <ShoppingCart className="h-5 w-5" />
                Process Orders
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription>Latest actions and updates in your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New order placed", details: "Order #ORD-001 by John Doe", time: "2 minutes ago", type: "order" },
                { action: "Product updated", details: "Updated inventory for Wireless Headphones", time: "15 minutes ago", type: "product" },
                { action: "User registered", details: "New customer Jane Smith joined", time: "1 hour ago", type: "user" },
                { action: "Payment received", details: "Payment of $259.99 confirmed", time: "2 hours ago", type: "payment" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.details}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <AddProductModal 
        isOpen={addProductModalOpen} 
        onClose={() => setAddProductModalOpen(false)} 
      />
    </AdminLayout>
  )
}

export default Dashboard