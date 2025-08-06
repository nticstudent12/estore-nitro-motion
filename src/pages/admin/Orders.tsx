import { AdminLayout } from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye,
  Truck,
  CheckCircle,
  Clock,
  ShoppingCart,
  DollarSign
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Orders = () => {
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      email: "john@example.com", 
      amount: "$259.99",
      items: 3,
      status: "completed",
      date: "2024-01-15",
      time: "10:30 AM"
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith", 
      email: "jane@example.com",
      amount: "$149.99",
      items: 1,
      status: "processing",
      date: "2024-01-15",
      time: "09:15 AM"
    },
    {
      id: "#ORD-003",
      customer: "Bob Johnson",
      email: "bob@example.com",
      amount: "$89.99", 
      items: 2,
      status: "shipped",
      date: "2024-01-14",
      time: "03:45 PM"
    },
    {
      id: "#ORD-004",
      customer: "Alice Brown",
      email: "alice@example.com",
      amount: "$199.99",
      items: 1,
      status: "completed",
      date: "2024-01-14", 
      time: "02:20 PM"
    },
    {
      id: "#ORD-005",
      customer: "Charlie Wilson",
      email: "charlie@example.com",
      amount: "$299.99",
      items: 4,
      status: "pending",
      date: "2024-01-14",
      time: "11:00 AM"
    }
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed": return "default"
      case "processing": return "secondary"
      case "shipped": return "outline"
      case "pending": return "destructive"
      default: return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle
      case "processing": return Clock
      case "shipped": return Truck
      case "pending": return Clock
      default: return Clock
    }
  }

  return (
    <AdminLayout 
      title="Orders" 
      subtitle="Manage customer orders and fulfillment"
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">2,345</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold">$45,231</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-green-600">2,298</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Orders</CardTitle>
                <CardDescription>Track and manage customer orders</CardDescription>
              </div>
            </div>
            
            {/* Search and Filter Bar */}
            <div className="flex items-center gap-4 pt-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search orders..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => {
                  const StatusIcon = getStatusIcon(order.status)
                  return (
                    <TableRow key={order.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.time}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.customer}</p>
                          <p className="text-sm text-muted-foreground">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{order.amount}</TableCell>
                      <TableCell>{order.items} items</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)} className="capitalize gap-1">
                          <StatusIcon className="h-3 w-3" />
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{order.date}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="gap-2">
                              <Eye className="h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Truck className="h-4 w-4" />
                              Mark as Shipped
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <CheckCircle className="h-4 w-4" />
                              Mark as Completed
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2 text-red-600">
                              Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default Orders