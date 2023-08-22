import { Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import Propos from './Pages/Propos';
import Entreprises from './Pages/Entreprises';
import Partner from './Pages/Partner';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound';

import File from './Pages/File';



function App() {
  return (
    <>
      
      <Routes>
        <Route index element={<Accueil />}/>
        <Route path="Propos" element={<Propos />} />
        <Route path="Product/:filter" element={<Product/>} />
        <Route path="Entreprises" element={<Entreprises />} />  
        <Route path="Partner" element={<Partner />} /> 
        <Route path="Login" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="Dashboard/file" element={<File/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
