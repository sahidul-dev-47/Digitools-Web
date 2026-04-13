import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const handleRemove = (id) => {
        const remaining = carts.filter(item => item.id !== id);
        setCarts(remaining);
        toast.error(`Removed ${id} from Cart!`);
    };
    const handleRemoveAll = () => {
        alert ("Remove All Carts!");
        setCarts([]);
        toast.info("Removed All Carts!");
    }

    const totalPrice = carts.reduce((total, item) => total + parseFloat(item.price), 0);

    if (carts.length === 0) {
        return (
            <div className='p-20 text-center border-2 border-gray-200 rounded-2xl'>
                <h1 className='text-2xl font-bold text-black '>Your Cart Is Empty</h1>
                
            </div>
        );
    }

    return (
        <div className='p-10 bg-gray-50 rounded-2xl'>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-bold text-black'>Your Cart :</h1>
               
            </div>

            <div className='space-y-3'>
                {carts.map((item) => (
                    <div key={item.id} className='flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border'>
                        <div className='flex items-center gap-4'>
                            <img src={item.icon} className='w-12 h-12 object-contain bg-gray-100 p-2 rounded-full' />
                            <div>
                                <h2 className='text-lg font-bold text-black'>{item.name}</h2>
                                <p className='text-gray-500 font-semibold'>${item.price}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleRemove(item.id)}
                            className=' text-red-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-200'>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className='mt-8 p-6 bg-white rounded-xl border-t-4  shadow-md'>
                <div className='flex justify-between items-center text-xl font-bold text-black'>
                    <span className='text-gray-500'>Total :</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button onClick={handleRemoveAll} className='w-full mt-4 bg-linear-to-r to-purple-500 from-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700'>
                    Procced To Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;