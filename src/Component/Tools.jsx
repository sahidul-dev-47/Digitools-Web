import React, { use } from 'react';
import ToolCard from './ToolCard';
import Cart from './Cart';

const Tools = ({ toolPromise, setActiveTab, activeTab, carts, setCarts }) => {
    const tools = use(toolPromise);

    return (
        <div className='py-20 bg-white'>
            <div className='text-center'>
                <h1 className='text-3xl text-black font-bold'>Premium Digital Tools</h1>
                <p className='text-gray-400 mt-2 font-medium max-w-lg mx-auto'>
                    Choose from our curated collection of premium digital products.
                </p>
            </div>

            <div className="tabs tabs-box bg-transparent justify-center py-3 rounded-full mt-3 gap-5 text-black">
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className={`tab w-40 rounded-full text-center cursor-pointer font-bold ${activeTab === 'tool' ? ' bg-linear-to-r to-purple-500 from-indigo-600 text-white' : 'bg-gray-100 - text-black'}`}
                    aria-label={`Products (${tools.length})`}
                    checked={activeTab === 'tool'}
                    onChange={() => setActiveTab('tool')} 
                />
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className={`tab w-40 rounded-full text-center cursor-pointer font-bold ${activeTab === 'cart' ? ' bg-linear-to-r to-purple-500 from-indigo-600 text-white' : 'bg-gray-100 text-black'}`}
                    aria-label={`Cart (${carts.length})`}
                    checked={activeTab === 'cart'}
                    onChange={() => setActiveTab('cart')} 
                />
            </div>

            <div className='max-w-6xl mx-auto px-4 mt-10'>
                {activeTab === 'tool' ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {tools.map(tool => (
                            <ToolCard 
                                tool={tool} 
                                key={tool.id} 
                                carts={carts} 
                                setCarts={setCarts} 
                            />
                        ))}
                    </div>
                ) : (
                    <Cart carts={carts} setCarts={setCarts} />
                )}
            </div>
        </div>
    );
};

export default Tools;