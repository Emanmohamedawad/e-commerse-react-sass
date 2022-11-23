// import Home from './Pages/Home.jsx';
// import "./Appsass.scss";
import React from 'react';
// Lazy loading 
const Home = React.lazy(() => import('./Pages/Home.jsx'));



function App() {
  return (
    <>
      <React.Suspense fallback={<div className='fs-1 text-white  bg-info h-100 text-center m-5 p-5'><h1>Loading...</h1></div>}>
      <Home/>
      </React.Suspense>
    </>
    
  );
}

export default App;
