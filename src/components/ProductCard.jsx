import { Link } from 'react-router-dom'
import { useStore } from '../contexts/StoreContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useStore()

  const badgeColors = {
    'Best Seller': 'bg-blue-500',
    'New': 'bg-blue-500',
    'Eco': 'bg-green-500',
    default: 'bg-red-500'
  }

  const badgeColor = product.badge?.startsWith('-') ? badgeColors.default : (badgeColors[product.badge] || badgeColors.default)

  return (
    <div className="group flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        {product.badge && (
          <div className={`absolute top-3 left-3 z-10 rounded ${badgeColor} px-2 py-1 text-xs font-bold text-white`}>
            {product.badge}
          </div>
        )}
        <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url("${product.image}")`}}></div>
      </Link>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`material-symbols-outlined text-[16px] ${i < product.rating ? 'text-yellow-400 icon-filled' : 'text-slate-300'}`}>star</span>
          ))}
          <span className="text-xs text-slate-400 ml-1">({product.reviews})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.oldPrice && <span className="text-sm text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>}
        </div>
        <button 
          onClick={(e) => { e.preventDefault(); addToCart(product.id); }}
          className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
