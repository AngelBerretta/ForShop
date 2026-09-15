// import React from 'react';
// import { productsData } from '../data/mockData';


// const TopProducts: React.FC = () => {
//   const topProducts = productsData.slice(0, 3);

//   return (
//     <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 h-full">
//       <div className="flex items-center justify-between mb-4 md:mb-6">
//         <div>
//           <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white">
//             Top Products
//           </h3>
//           <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
//             Best selling items this month
//           </p>
//         </div>
//         <button className="text-xs md:text-sm font-semibold text-primary hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors">
//           View All
//           <span className="material-icons-outlined text-sm">chevron_right</span>
//         </button>
//       </div>
      
//       <div className="space-y-3 md:space-y-4">
//         {topProducts.map((product, index) => (
//           <div 
//             key={product.id} 
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer group"
//           >
//             <div className="relative">
//               <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 flex-shrink-0">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//               </div>
//               <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
//                 {index + 1}
//               </div>
//             </div>
            
//             <div className="min-w-0 flex-1">
//               <div className="flex items-center justify-between">
//                 <h4 className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors truncate">
//                   {product.name}
//                 </h4>
//                 <span className="text-sm md:text-base font-bold text-slate-800 dark:text-white ml-2">
//                   {product.price}
//                 </span>
//               </div>
              
//               <div className="flex items-center justify-between mt-1">
//                 <div className="flex items-center gap-2">
//                   <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] md:text-xs font-medium ${
//                     product.status === 'in_stock' 
//                       ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
//                       : product.status === 'low_stock'
//                       ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
//                       : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
//                   }`}>
//                     {product.status === 'in_stock' ? 'In Stock' : 
//                      product.status === 'low_stock' ? 'Low Stock' : 'Out of Stock'}
//                   </span>
//                   <span className="text-xs text-slate-500 dark:text-slate-400">
//                     {product.sales} sales
//                   </span>
//                 </div>
                
//                 <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
//                   <span className="material-icons-outlined text-yellow-500 text-sm">
//                     star
//                   </span>
//                   <span className="ml-1">4.{index + 2}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* Quick Stats */}
//       <div className="mt-4 md:mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
//         <div className="grid grid-cols-2 gap-3">
//           <div className="text-center">
//             <div className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
//               {productsData.reduce((sum, p) => sum + p.sales, 0).toLocaleString()}
//             </div>
//             <div className="text-xs text-slate-500 dark:text-slate-400">Total Sales</div>
//           </div>
//           <div className="text-center">
//             <div className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
//               {productsData.filter(p => p.status === 'in_stock').length}
//             </div>
//             <div className="text-xs text-slate-500 dark:text-slate-400">In Stock</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopProducts;

import React from 'react';

interface Product {
  id: number;
  rank: string;
  name: string;
  price: string;
  image: string;
}

const TopProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      rank: '1',
      name: 'Tshirt Levis',
      price: '$ 49,99',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC01V6NxqP26MRD_lV4Jki_bUMDXKArZj-fLS79Nee2YZhB-TIvQ2ut99sCYBrgF-MouuATvrOXNgKt9vATE0T0WERRkLM886Ol_RO48QLQcCAP17ivOT9DDA3Zc8QaKiMP-1IvMzLh30ux2vmATXUpY449RWBtb_N8jgcG_gu_O1x66yJGAK1ji34eSaeMV4Yb0K1RwCbIG0785dXRFBsZBSN-mo7_LjqOfarwVVINhlU4cg7pdCEBwmS81MACnSKv7QJp518DBPg',
    },
    {
      id: 2,
      rank: '2',
      name: 'Long jeans jacket',
      price: '$ 129,99',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdiaXhzEyJbqqopDYRvFbI-ArjxkGiC1k6-U-eCssZMXMjThU_GeJfYVOoEXjyj_61l1c4ROWOB1oIp9qcMMrX2x0dNVyeZ6jOYDZmHuvR_7nWB6EesxqlYl_SLSnmXaUlDgeXMsOjahkC3y_KGYqlfOB6CmKQhITKj3ZIhmR1s0U8_bCB0NaSMvAIZdRdWvxtEJ-tMu2tM7Ip-ZtrsymVKO6rhc2YL7WOw9FZur5buYZsY5rBQ8kklruFXpcwNuFxNYj4bBxvi9Q',
    },
    {
      id: 3,
      rank: '3',
      name: 'Fullcap',
      price: '$ 20,99',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo2gL7_o64-ou1UAinHC7WQN81z_N5Kvc1yFOxG-OXF1TPOyhPdzh6GfuSJkcdy0QLHen1hEudVBPxR8OiUkDri18Qnpq4UB1P6V59b3Ywz1yaZZYd8rd8wStZAOdeo-T8_Veqg30CDZJySYrYlOPi4kspLfl4fgyBaS5nmro0m5ARMN1hX8Ubo15gL2aGBT1XOk-OETscOLxUFt7kc0dGFcs5-Exh93_XNlVWAUtycEg8IoOGQ2OhHL2TrGzH138WdSUjzQGPcwo',
    },
    {
      id: 4,
      rank: '4',
      name: 'Adidas pants',
      price: '$ 89.99',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrkfB7y0-od-jN3AvOsMAwofEJtfe3lOhiV4iJepx_fjB2WVBRIbM7cFIO8uzMY2Iq9UlF8LUcKp3IGYth8xiPnhNgQ06CbRDdEzwhU8jRAvQHuosIr8LD935kBuR4S2E7LR4wCF73CYExyL3o71nDr73VM_YIHOw7tGbNe6VPlohvLVQB6GRUcTLtOjdennqnZx7vlkFtM18grUmBQFkhY2xaSjWY-3mrR86BfcZOreTDHUmnbcEqkItZCfDV_oItrqXp0xMQrnY',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 flex-shrink-0">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-white">
          Top selling products
        </h3>
        <a className="text-xs font-semibold text-primary hover:text-indigo-600 flex items-center" href="#">
          See all <span className="material-icons-outlined text-sm ml-1">chevron_right</span>
        </a>
      </div>
      <div className="space-y-4 md:space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3 md:gap-4 group cursor-pointer">
            <span className="text-xs font-bold text-slate-300 w-2 flex-shrink-0">{product.rank}</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-700 flex-shrink-0">
              <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors truncate">
                {product.name}
              </h4>
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;