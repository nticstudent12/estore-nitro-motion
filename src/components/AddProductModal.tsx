import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Upload, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

interface AddProductModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ProductFormData {
  name: string
  price: string
  categoryId: string
  description: string
  variants: Array<{
    id: string
    color: string
    size: string
    stock: string
    sku: string
  }>
  images: Array<{
    id: string
    url: string
    alt: string
    isPrimary: boolean
  }>
}

const categories = [
  { id: "1", name: "T-Shirts" },
  { id: "2", name: "Hoodies" },
  { id: "3", name: "Jackets" },
  { id: "4", name: "Cargo Pants" },
  { id: "5", name: "Joggers" },
  { id: "6", name: "Jeans" },
  { id: "7", name: "Track Pants" }
]

export function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    categoryId: "",
    description: "",
    variants: [{ id: "1", color: "", size: "", stock: "", sku: "" }],
    images: [{ id: "1", url: "", alt: "", isPrimary: true }]
  })

  const handleInputChange = (field: keyof ProductFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addVariant = () => {
    const newVariant = {
      id: Date.now().toString(),
      color: "",
      size: "",
      stock: "",
      sku: ""
    }
    setFormData(prev => ({
      ...prev,
      variants: [...prev.variants, newVariant]
    }))
  }

  const removeVariant = (id: string) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.filter(variant => variant.id !== id)
    }))
  }

  const updateVariant = (id: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.map(variant =>
        variant.id === id ? { ...variant, [field]: value } : variant
      )
    }))
  }

  const addImage = () => {
    const newImage = {
      id: Date.now().toString(),
      url: "",
      alt: "",
      isPrimary: false
    }
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, newImage]
    }))
  }

  const removeImage = (id: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(image => image.id !== id)
    }))
  }

  const updateImage = (id: string, field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map(image =>
        image.id === id ? { ...image, [field]: value } : image
      )
    }))
  }

  const setPrimaryImage = (id: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map(image => ({
        ...image,
        isPrimary: image.id === id
      }))
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.price || !formData.categoryId) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    // Here you would typically send the data to your API
    console.log("Product data:", formData)
    
    toast({
      title: "Product Added",
      description: "Your product has been successfully added to the catalog.",
    })
    
    // Reset form and close modal
    setFormData({
      name: "",
      price: "",
      categoryId: "",
      description: "",
      variants: [{ id: "1", color: "", size: "", stock: "", sku: "" }],
      images: [{ id: "1", url: "", alt: "", isPrimary: true }]
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="absolute inset-4 md:inset-8 bg-card border border-border shadow-2xl rounded-xl overflow-hidden"
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-subtle">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Add New Product</h2>
                <p className="text-muted-foreground">Create a new product for your catalog</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Product Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter product name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price">Price *</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.categoryId} onValueChange={(value) => handleInputChange("categoryId", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Enter product description"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Product Variants */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Product Variants</CardTitle>
                      <Button type="button" variant="outline" size="sm" onClick={addVariant}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Variant
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.variants.map((variant, index) => (
                      <div key={variant.id} className="p-4 border border-border rounded-lg bg-muted/20">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">Variant {index + 1}</h4>
                          {formData.variants.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeVariant(variant.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label>Color</Label>
                            <Input
                              value={variant.color}
                              onChange={(e) => updateVariant(variant.id, "color", e.target.value)}
                              placeholder="e.g., Black"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Size</Label>
                            <Input
                              value={variant.size}
                              onChange={(e) => updateVariant(variant.id, "size", e.target.value)}
                              placeholder="e.g., M"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Stock</Label>
                            <Input
                              type="number"
                              value={variant.stock}
                              onChange={(e) => updateVariant(variant.id, "stock", e.target.value)}
                              placeholder="0"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>SKU</Label>
                            <Input
                              value={variant.sku}
                              onChange={(e) => updateVariant(variant.id, "sku", e.target.value)}
                              placeholder="e.g., TSH-BLK-M"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Product Images */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Product Images</CardTitle>
                      <Button type="button" variant="outline" size="sm" onClick={addImage}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Image
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.images.map((image, index) => (
                      <div key={image.id} className="p-4 border border-border rounded-lg bg-muted/20">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">Image {index + 1}</h4>
                            {image.isPrimary && (
                              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                                Primary
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {!image.isPrimary && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => setPrimaryImage(image.id)}
                              >
                                Set Primary
                              </Button>
                            )}
                            {formData.images.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeImage(image.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Image URL</Label>
                            <Input
                              value={image.url}
                              onChange={(e) => updateImage(image.id, "url", e.target.value)}
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Alt Text</Label>
                            <Input
                              value={image.alt}
                              onChange={(e) => updateImage(image.id, "alt", e.target.value)}
                              placeholder="Image description"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-border bg-gradient-subtle">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="hero" onClick={handleSubmit}>
                Add Product
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}