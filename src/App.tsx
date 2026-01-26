// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';

// // Pages
// import Dashboard from './pages/Dashboard';
// import Orders from './pages/Orders';
// import Products from './pages/Products';
// import Marketing from './pages/Marketing';
// import Rates from './pages/Rates';
// import Reports from './pages/Reports';

// const App: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark');
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <Router>
//       <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
//         <div className="bg-sidebar dark:bg-sidebar-dark text-slate-800 dark:text-slate-100 font-display h-screen flex overflow-hidden selection:bg-indigo-500 selection:text-white">
//           <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           <main className="flex-1 bg-background-light dark:bg-background-dark my-2 md:my-4 mr-2 md:mr-4 rounded-2xl md:rounded-4xl shadow-xl md:shadow-2xl overflow-hidden flex flex-col relative ">
//             <Header userName="Damian" toggleSidebar={toggleSidebar} />
//             <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-0 md:pt-2">
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/orders" element={<Orders />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="/marketing" element={<Marketing />} />
//                 <Route path="/rates" element={<Rates />} />
//                 <Route path="/reports" element={<Reports />} />
//               </Routes>
//             </div>
//           </main>
//           <div className="fixed bottom-4 right-4 z-50">
//             <button
//               className="p-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-full shadow-lg hover:scale-110 transition-transform"
//               onClick={toggleDarkMode}
//             >
//               <span className="material-icons-outlined block dark:hidden">dark_mode</span>
//               <span className="material-icons-outlined hidden dark:block">light_mode</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Marketing from './pages/Marketing';
import Rates from './pages/Rates';
import Reports from './pages/Reports';

// Layout Components
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={
            <ProtectedRoute requireAuth={false}>
              <Login />
            </ProtectedRoute>
          } />
          
          {/* Protected Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/orders" element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />
            <Route path="/products" element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            } />
            <Route path="/marketing" element={
              <ProtectedRoute>
                <Marketing />
              </ProtectedRoute>
            } />
            <Route path="/rates" element={
              <ProtectedRoute>
                <Rates />
              </ProtectedRoute>
            } />
            <Route path="/reports" element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            } />
          </Route>
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
