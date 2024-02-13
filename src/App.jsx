import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { TorneoFormPages } from './pages/torneos/TorneoFormPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import Teams from './pages/Teams.jsx';
import Horarios from './pages/Horarios.jsx';
import Partidos from './pages/Partidos.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='create' element={<TorneoFormPages />} />
        <Route path='equipos' element={<Teams />} />
        <Route path='editar/:id' element={<Dashboard />} />
        <Route path='editar-equipo/:id' element={<Teams/>}/>
        <Route path='editar-jugador/:id' element={<Profile/>}/>
        <Route path='profile' element={<Profile />} />
        <Route path='horario' element={<Horarios />} />
        <Route path='partidos' element={<Partidos />} />
      </Route>

  )
);

function App() {
  return (
<div><RouterProvider router={router} />
      <Toaster /></div>
      

  );
}

export default App;
