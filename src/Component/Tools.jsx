import React, { use } from 'react';



const Tools = ({toolPromise}) => {
   const tools = use(toolPromise);
   console.log(tools)
    return (
        <div className='py-20 bg-white'>
            <div className='text-center'>
                        
                            <h1 className='text-3xl text-black font-bold'>Premium Digital Tools</h1>
                            <p className='text-gray-400 mt-2 font-medium max-w-lg mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                          </div>
                           <div className="tabs tabs-box bg-white mx-auto">
                            <input type="radio" name="" className="tab bg-linear-to-r to-purple-500 from-indigo-600 " aria-label="Products"defaultChecked />
                            <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" />
                           
                          </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-10'>
            {
                tools.map(tool =>( <div key={tool.id} className='shadow-lg rounded-2xl space-y-3 p-6 border relative'>
                    <div className='absolute top-2 right-2'>
                             {tool.badge && (
                                <span 
                                        style={{ backgroundColor: tool.badge_color }} 
                                        className='text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase'>
                                             {tool.badge}
                                </span>
  )}
</div>
                    <div className='w-15 h-15  border border-gray-200 rounded-full flex items-center justify-center'>
                        <img src={tool.icon} className='w-8 h-8' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-2xl font-bold text-black'>{tool.name}</h1>
                        <p className='text-sm text-gray-400 font-medium'>{tool.description}</p>
                    </div>
                    <div className='text-xl font-bold text-black'>${tool.price} <span className='text-gray-400 font-semibold'>{tool.pricing_type}</span> </div>
                    <div>
                        {tool.features.map(feature =>(
                            <div key={feature} className='text-sm flex items-center text-gray-400 font-medium gap-2'> 
                             <i className="fa-solid fa-check text-green-300"></i>{feature}</div>

                            
                        ))}
                        <button className=' bg-linear-to-r to-purple-500 from-indigo-600 rounded-lg py-2 px-4 text-white font-bold w-full mt-3'>Buy Now</button>
                    </div>
                    
                </div>
                ))
            }
         </div>

        </div>
            
)
}
export default Tools;