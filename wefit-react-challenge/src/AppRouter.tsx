import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/organisms/General/Menu'
import Home from './pages/Home'
import PurchaseMade from './pages/PurchaseMade'
import ShoppingCart from './pages/ShoppingCart'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/purchasemade" element={<PurchaseMade />} />
      </Routes>
    </BrowserRouter>
  )
}
