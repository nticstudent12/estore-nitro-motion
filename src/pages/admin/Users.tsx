import { AdminLayout } from "@/components/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AlertTriangle } from "lucide-react"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Plus,
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit,
  Trash2,
  Mail,
  Shield,
  Users as UsersIcon,
  UserCheck,
  UserX
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const Users = () => {
  const { toast } = useToast()
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [modalType, setModalType] = useState<'status' | 'role' | 'delete' | null>(null)
  const [newStatus, setNewStatus] = useState('')
  const [newRole, setNewRole] = useState('')

  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "customer",
      status: "active",
      joinDate: "2024-01-10",
      orders: 5,
      spent: "$599.95"
    },
    {
      id: "2", 
      name: "Jane Smith",
      email: "jane@example.com",
      role: "admin",
      status: "active",
      joinDate: "2023-12-15",
      orders: 0,
      spent: "$0.00"
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "customer",
      status: "active",
      joinDate: "2024-01-08",
      orders: 3,
      spent: "$299.97"
    },
    {
      id: "4",
      name: "Alice Brown", 
      email: "alice@example.com",
      role: "customer",
      status: "inactive",
      joinDate: "2023-11-20",
      orders: 12,
      spent: "$1,299.88"
    },
    {
      id: "5",
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "moderator",
      status: "active",
      joinDate: "2023-12-01",
      orders: 2,
      spent: "$199.98"
    }
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active": return "default"
      case "inactive": return "secondary"
      case "suspended": return "destructive"
      default: return "secondary"
    }
  }

  const getRoleVariant = (role: string) => {
    switch (role) {
      case "admin": return "destructive"
      case "moderator": return "secondary"
      case "customer": return "outline"
      default: return "outline"
    }
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const handleOpenModal = (user: any, type: 'status' | 'role' | 'delete') => {
    setSelectedUser(user)
    setModalType(type)
    if (type === 'status') {
      setNewStatus(user.status)
    } else if (type === 'role') {
      setNewRole(user.role)
    }
  }

  const handleCloseModal = () => {
    setSelectedUser(null)
    setModalType(null)
    setNewStatus('')
    setNewRole('')
  }

  const handleStatusChange = () => {
    if (selectedUser && newStatus) {
      toast({
        title: "Status Updated",
        description: `${selectedUser.name}'s status has been changed to ${newStatus}.`,
      })
      handleCloseModal()
    }
  }

  const handleRoleChange = () => {
    if (selectedUser && newRole) {
      toast({
        title: "Role Updated", 
        description: `${selectedUser.name}'s role has been changed to ${newRole}.`,
      })
      handleCloseModal()
    }
  }

  const handleDeleteUser = () => {
    if (selectedUser) {
      toast({
        title: "User Deleted",
        description: `${selectedUser.name} has been removed from the system.`,
        variant: "destructive"
      })
      handleCloseModal()
    }
  }

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' }
  ]

  const roleOptions = [
    { value: 'customer', label: 'Customer' },
    { value: 'moderator', label: 'Moderator' },
    { value: 'admin', label: 'Admin' }
  ]

  return (
    <AdminLayout 
      title="Users" 
      subtitle="Manage user accounts and permissions"
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <UsersIcon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-green-600">1,156</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New This Month</p>
                  <p className="text-2xl font-bold text-blue-600">89</p>
                </div>
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Inactive</p>
                  <p className="text-2xl font-bold text-red-600">78</p>
                </div>
                <UserX className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">User Management</CardTitle>
                <CardDescription>Manage user accounts and their permissions</CardDescription>
              </div>
              <Button variant="hero" className="gap-2">
                <Plus className="h-4 w-4" />
                Add User
              </Button>
            </div>
            
            {/* Search and Filter Bar */}
            <div className="flex items-center gap-4 pt-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search users..." 
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
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getRoleVariant(user.role)} className="capitalize">
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(user.status)} className="capitalize">
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.orders}</TableCell>
                    <TableCell className="font-medium">{user.spent}</TableCell>
                    <TableCell className="text-muted-foreground">{user.joinDate}</TableCell>
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
                            <Edit className="h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Mail className="h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="gap-2"
                            onClick={() => handleOpenModal(user, 'status')}
                          >
                            <Shield className="h-4 w-4" />
                            Change Status
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="gap-2"
                            onClick={() => handleOpenModal(user, 'role')}
                          >
                            <Shield className="h-4 w-4" />
                            Change Role
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="gap-2 text-red-600"
                            onClick={() => handleOpenModal(user, 'delete')}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Change Status Modal */}
      <Dialog open={modalType === 'status'} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md border-0 shadow-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Change User Status
            </DialogTitle>
            <DialogDescription>
              Update the status for {selectedUser?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="status">Select New Status</Label>
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          option.value === 'active' ? 'bg-green-500' :
                          option.value === 'inactive' ? 'bg-gray-500' :
                          'bg-red-500'
                        }`} />
                        {option.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="hero" onClick={handleStatusChange}>
              Update Status
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Change Role Modal */}
      <Dialog open={modalType === 'role'} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md border-0 shadow-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Change User Role
            </DialogTitle>
            <DialogDescription>
              Update the role for {selectedUser?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="role">Select New Role</Label>
              <Select value={newRole} onValueChange={setNewRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose role" />
                </SelectTrigger>
                <SelectContent>
                  {roleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <Badge variant={getRoleVariant(option.value)} className="text-xs">
                          {option.label}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {newRole === 'admin' && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-800">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">Warning</span>
                </div>
                <p className="text-sm text-yellow-700 mt-1">
                  Admin users have full access to all system features and data.
                </p>
              </div>
            )}
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="hero" onClick={handleRoleChange}>
              Update Role
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Modal */}
      <Dialog open={modalType === 'delete'} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md border-0 shadow-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Delete User
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedUser?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Warning:</strong> Deleting this user will permanently remove their account, 
                order history, and all associated data from the system.
              </p>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteUser}>
              Delete User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  )
}

export default Users