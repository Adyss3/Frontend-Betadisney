import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShoppingCart from './pages/ShoppingCart'
import CatalogScreen from './pages/CatalogScreen'
import RegistrationPage from './pages/RegistrationPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderDetailsScreen from './pages/OrderDetailsScreen'
import PaymentSelectionPage from './pages/PaymentSelectionPage'
import AdminDashboard from './pages/AdminDashboard'
import CustomerSupportPage from './pages/CustomerSupportPage'
import AIProductRecommendations from './pages/AIProductRecommendations'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/catalog" element={<CatalogScreen />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/order/:id" element={<OrderDetailsScreen />} />
        <Route path="/payment" element={<PaymentSelectionPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/support" element={<CustomerSupportPage />} />
        <Route path="/recommendations" element={<AIProductRecommendations />} />
      </Routes>
    </Router>
  )
}

export default App
