import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Search, ShoppingCart, User, Bell, Heart, ArrowRight, Star, Shield, Users, Zap, RefreshCw } from 'lucide-react'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    // Simulating API call to fetch featured products
    const fetchFeaturedProducts = async () => {
      // In a real application, this would be an API call
      const products = [
        { id: 1, name: "Vintage Leather Sofa", price: 299.99, rating: 4.5, image: "/placeholder.svg?height=200&width=300" },
        { id: 2, name: "Modern Coffee Table", price: 149.99, rating: 4.2, image: "/placeholder.svg?height=200&width=300" },
        { id: 3, name: "Antique Brass Lamp", price: 79.99, rating: 4.7, image: "/placeholder.svg?height=200&width=300" },
        { id: 4, name: "Rustic Wooden Bookshelf", price: 199.99, rating: 4.4, image: "/placeholder.svg?height=200&width=300" },
      ]
      setFeaturedProducts(products)
    }

    fetchFeaturedProducts()
  }, [])

  const categories = [
    { name: "Furniture", icon: "🪑" },
    { name: "Electronics", icon: "📱" },
    { name: "Kitchen", icon: "🍳" },
    { name: "Decor", icon: "🏠" },
    { name: "Garden", icon: "🌿" },
    { name: "Books", icon: "📚" },
  ]

  const recentlyViewed = [
    { id: 5, name: "Retro Record Player", price: 89.99, image: "/placeholder.svg?height=100&width=100" },
    { id: 6, name: "Ceramic Vase Set", price: 39.99, image: "/placeholder.svg?height=100&width=100" },
    { id: 7, name: "Vintage Wall Clock", price: 59.99, image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">Bikri Bazaar</Link>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/notifications" className="text-gray-600 hover:text-blue-600">
              <Bell className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Welcome to Bikri Bazaar</h1>
              <p className="text-xl mb-4">Buy, Sell, Reuse - A Marketplace for Second-Hand Household Goods</p>
              <div className="flex space-x-4">
                <Button size="lg" variant="secondary">
                  Start Selling
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Browse Items
                </Button>
              </div>
            </div>
            <img src="/placeholder.svg?height=300&width=400" alt="Hero" className="rounded-lg max-w-sm" />
          </motion.div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/category/${category.name.toLowerCase()}`} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition duration-300 block">
                  <span className="text-4xl mb-2 block">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <Carousel className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{product.name}</CardTitle>
                      <p className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Bikri Bazaar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
                <p className="text-gray-600">Find a vast array of quality second-hand items for your home.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
                <p className="text-gray-600">Shop with confidence using our secure payment and escrow services.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community-Driven</h3>
                <p className="text-gray-600">Join a thriving community of buyers and sellers in your area.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <Tabs defaultValue="recent">
            <TabsList>
              <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
              <TabsTrigger value="saved">Saved Items</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                {recentlyViewed.map((item) => (
                  <Link key={item.id} href={`/product/${item.id}`} className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300">
                    <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-md mb-2" />
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="saved">
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">You haven't saved any items yet.</p>
                <Button variant="link" className="mt-2">Start browsing</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Top Sellers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((seller) => (
              <motion.div
                key={seller}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition duration-300"
              >
                <Avatar className="w-16 h-16 mx-auto mb-2">
                  <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                  <AvatarFallback>S{seller}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium">Seller {seller}</h3>
                <Badge variant="secondary" className="mt-2">Top Rated</Badge>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Sustainable Shopping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Reduce Carbon Footprint</h3>
                  <p className="text-sm text-gray-600">By buying second-hand, you're helping to reduce demand for new products and their associated emissions.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <RefreshCw className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Circular Economy</h3>
                  <p className="text-sm text-gray-600">Support a circular economy by giving pre-loved items a new home and extending their lifecycle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="mb-6">Sign up now to start buying and selling second-hand household goods in your area.</p>
            <div className="flex space-x-4">
              <Button>Sign Up</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Bikri Bazaar</h3>
              <ul className="space-y-2">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/press">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/safety">Safety Center</Link></li>
                <li><Link href="/community">Community Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/cookie">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2023 Bikri Bazaar. All rights reserved.</p>
            <div className="mt-4 sm:mt-0">
              <Button variant="link" className="text-white">Download our app</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default HomePage;