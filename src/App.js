import './App.css';
import { SidebarWithNavbar } from './components';
import { MainRoute } from './routes';


function App() {
  return (
    <SidebarWithNavbar>
      <MainRoute/>
    </SidebarWithNavbar>
  );
}

export default App;
