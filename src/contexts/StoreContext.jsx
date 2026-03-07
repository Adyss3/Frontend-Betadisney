import { createContext, useContext, useState, useMemo } from 'react'

const StoreContext = createContext()

const MOCK_PRODUCTS = [
  { id: 1, name: 'RGB Mechanical Keyboard', price: 145, category: 'computers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhNQgEiS-aemqpXhKB1YSNwIctpi9Nn7NZUeFHXL0R3YipyppQLDZrEv3kzPtigUJqhL7vGhwJkWfVUpfz7CBsl4L-FAdRHDu0bhD-gKRfKau3E7wQLJUZa25Mvvte-PIdnj81vOldgH2uuaY2v3-TwIM2OiQuyOR09KyTN3ngIGcls8EQW4YjZCasgS1wNnw94zh9GLjz0mJ5uXCpR8Yu7SoQUUy_lZoqu-C4laAg-55QNGD6VaO257vVj7Ml10SDQX9EAyM1MOQL', rating: 5, reviews: 312, badge: 'Best Seller' },
  { id: 2, name: 'Ergo Office Chair', price: 299, oldPrice: 349, category: 'office', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT_ARes_sQswD5QkFVUjVxK8_Rwcoyea0JkwTpGc1q1VqhNXEngR04i3BncHh8Q4Zf5kQmrJOgDRZCxAemxDnksQ2v5myJ0LdbXa45uWV0UhC_rvMkHeT2nO8R_iZCZa3A4zPjF51t3Ox3zSY1UB_HNIQiHl8soMLF9Ne3f0iNLLdVUiBvdduwmRbFIuLpMUBYmZgK1-5DHN04XY3nUYS-prD1nTWrRORATLbdKF8WuMD0R99rnnuOXgXigNxGC3i7r0AOCvcZkqWn', rating: 4, reviews: 45, badge: '-15%' },
  { id: 3, name: 'Premium Laptop Bag', price: 120, category: 'accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvcb0X-Rff249CLAcUyP1zVDfyVsIGb9-LeuzxpJab_PWTGSJI6l1pKj22k0W0ocw4E3wFmKaxdYUhC7WBioaAFBoziecOu-P94m2mNvp_fN8G9Zea9xgEJ7JZkch2KzzA5v5Ds-4cjBCmDKDM5trKtLvswhsWriwScZ6uR-CW9bkIy6jGRt6WVrSrwFm5D2xCKeLt-AMmyJkay00-WhD-OQbQUJzHR_ht54x2F0ZOEWclBmCI8Iwg-ruZmKJfy2UhJzWfq72p2EK7', rating: 4, reviews: 89 },
  { id: 4, name: 'Blue Light Glasses', price: 49.99, category: 'accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmmMqoshwr3OhbG5_pOh_1XL2MCd-xJ0E9VePYeWFllLw--KNZbv1_5nKB9h6e_C1KPyvFw1yoD8zZ2osm9uvFGlkbvT6db8aVnH_BMdTNs4ZOzArVTEmPMWaLbYXIDayHOJOVJDc_06_H4q82UKxuHTyFp5Wl9HmW4oKY-t5nsGweqFlWqeRuAZf467zJuOfHepKM_Bh6yn3bmBQ-lUjCezoeNdNCyNs_ZIEXhXBg72G3snqWXQmVqxpQ0Bo03J2faAiqD1K90bqq', rating: 3, reviews: 24 },
  { id: 5, name: 'Studio Wireless Headphones', price: 299, oldPrice: 375, category: 'sound', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN8qA065lS2-xsQDFDV0tQ90RzJQhKqqbXBITPAB2w07Qq2mglkB2SArf4XlO7VWCsTixMgCwb0HUKmija4aq17rNVldg7Hqdoeut_w-dWqUqM9AbGORnzaFw4mRlhYG5G3oZ8lbC6ZYo6vL9OYkK3855ivz4XXve9E3q9GssEuufVClGjD7a3JM-n8kDe0ITUFgeYOXGBZ7j1UjcubLMqFzOZyMyfBPVmZUMd1UzOOvwcHrbStpEBO1b_hkeudB7IcdnFfKTyGjSv', rating: 5, reviews: 120, badge: '-20%' },
  { id: 6, name: 'Pro Smart Watch 2', price: 199, category: 'phones', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGUVoG5gA0hgruLY1CX3v-eTL6FNrnBnnx55BNi79_CVmXQWTNRlldth5kW-2PGOcDLi2GB_GnSD52ph1RvlKhkrui0aO5ur3LEgINICahIw8qX_hSEXrkSaytb-vJpHsya260LBoA8cVafeoARwQfqUcs3TdbHLuodvWPw_knbbCqP_sceFouU8ct7WxjY7ZyuJWe_b37f7m8u1mOTne1Z6JmrB63yFhs7eRElKDUuO8XiO_3ejucPJAz0D6vfg87YbtZTggmLo5W', rating: 4, reviews: 200, badge: 'New' },
  { id: 7, name: 'Temperature Smart Bottle', price: 45, category: 'accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2EX3JHh9olCACH3nfHCpyK2LIDRSCXHIlT4WuUgPmYDNXGber5Z1q80tCyAhYtU2k1yj0Y7K1G6DpATbu4ZjcEppkr0iL7faFV9m5VtYJLDYUa-Cyb2LTHsEa9qdVyH4FcEbtrJsr-di21E_ys3lG2LTpd4LINR6WUscyq6ho5OI0Z5XvyVJbMO0kUMrJuqDzhQgt0qbEaYqHPm9GF_iTqx3aGfJ3E0zwJ81SI7dCRf2NBYj2RD5Z19uLUqwpcPQnNcmlj32eV8w-', rating: 3, reviews: 15, badge: 'Eco' },
  { id: 8, name: 'Slim Wireless Keypad', price: 65, category: 'computers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhNQgEiS-aemqpXhKB1YSNwIctpi9Nn7NZUeFHXL0R3YipyppQLDZrEv3kzPtigUJqhL7vGhwJkWfVUpfz7CBsl4L-FAdRHDu0bhD-gKRfKau3E7wQLJUZa25Mvvte-PIdnj81vOldgH2uuaY2v3-TwIM2OiQuyOR09KyTN3ngIGcls8EQW4YjZCasgS1wNnw94zh9GLjz0mJ5uXCpR8Yu7SoQUUy_lZoqu-C4laAg-55QNGD6VaO257vVj7Ml10SDQX9EAyM1MOQL', rating: 3, reviews: 67 }
]

export const StoreProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(start, start + itemsPerPage)
  }, [filteredProducts, currentPage])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const addToCart = (productId, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId)
      if (existing) {
        return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity + quantity } : item)
      }
      const product = MOCK_PRODUCTS.find(p => p.id === productId)
      return [...prev, { ...product, quantity }]
    })
  }

  const updateCartQuantity = (productId, quantity) => {
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item))
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const toggleFavorite = (productId) => {
    setFavorites(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId])
  }

  const isFavorite = (productId) => favorites.includes(productId)

  const getProduct = (id) => MOCK_PRODUCTS.find(p => p.id === parseInt(id))

  const value = {
    products: MOCK_PRODUCTS,
    filteredProducts,
    paginatedProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    cart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    getProduct,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    favorites,
    toggleFavorite,
    isFavorite,
    currentPage,
    setCurrentPage,
    totalPages
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStore must be used within StoreProvider')
  return context
}
