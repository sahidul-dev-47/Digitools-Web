import { toast } from "react-toastify";


const ToolCard = ({ tool, carts, setCarts }) => {
    const isAlreadyInCart = carts.some(item => item.id === tool.id);

    const handleBuy = () => {
        if (!isAlreadyInCart) {
            setCarts([...carts, tool]);
            toast.success(`${tool.name} Added to Cart!`);
        }
    }

    return (
        <div className='shadow-lg rounded-2xl space-y-3 p-6 border relative bg-white'>
            <div className='absolute top-2 right-2'>
                {tool.badge && (
                    <span 
                        style={{ backgroundColor: tool.badge_color }} 
                        className='text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase'>
                        {tool.badge}
                    </span>
                )}
            </div>
            <div className='w-15 h-15 border border-gray-200 rounded-full flex items-center justify-center'>
                <img src={tool.icon} className='w-8 h-8' alt={tool.name} />
            </div>
            <div className='space-y-3'>
                <h1 className='text-2xl font-bold text-black'>{tool.name}</h1>
                <p className='text-sm text-gray-400 font-medium'>{tool.description}</p>
            </div>
            <div className='text-xl font-bold text-black'>
                ${tool.price} <span className='text-gray-400 font-semibold'>{tool.pricing_type}</span>
            </div>
            <div>
                {tool.features.map(feature => (
                    <div key={feature} className='text-sm flex items-center text-gray-400 font-medium gap-2'> 
                        <i className="fa-solid fa-check text-green-300"></i>{feature}
                    </div>
                ))}
                <button 
                    onClick={handleBuy} 
                    disabled={isAlreadyInCart}
                    className={`w-full py-3 mt-3 rounded-lg font-semibold transition-colors ${ isAlreadyInCart ? 'bg-green-600 text-white cursor-not-allowed' : 'bg-linear-to-r to-purple-500 from-indigo-600 text-white' }`}>
                    {isAlreadyInCart ? 'Added to Cart!' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
};

export default ToolCard;