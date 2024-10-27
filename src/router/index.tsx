import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useSearchParams,
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Markets from '../pages/Markets';
import TokenDetails from '../pages/TokenDetail';
import Sidebar from '../layouts/Sidebar';
import Overview from '../pages/Overview';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Referrals from '../pages/Referrals';
import backgroundImage from '../assets/img/background.svg';
import { useLocation } from 'react-router-dom';
import backgroundGradientOrange from '../assets/img/background-orange.svg';

import { tokenToGradient } from '../utils/config';

function MainContent() {
  const location = useLocation();
  const modalOpen = useSelector((state: RootState) => state.sidebar.modalOpen);

  const [searchParams] = useSearchParams();
  if (searchParams.get('ref')) {
    localStorage.setItem('referredBy', searchParams.get('ref') || 'null');
  }
  if (searchParams.get('r')) {
    localStorage.setItem('referredBy', searchParams.get('r') || 'null');
  }

  return (
    <main className='bg-primary-light w-full lg:w-[calc(100vw-256px)] relative lg:h-screen'>
      <div className='relative px-4 py-8 md:px-6 xl:p-14 z-20 lg:max-h-screen h-full overflow-auto '>
        <Routes>
          <Route path='/' element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='markets' element={<Markets />}>
            <Route path='' element={<Overview />} />
            <Route path=':token' element={<TokenDetails />} />
          </Route>
        </Routes>
        {modalOpen && <Referrals />}
      </div>
      <div className='absolute top-0 right-0 w-full h-screen z-10'>
        {location.pathname.match(/^\/markets\/[^/]+$/) ? (
          <img
            className='w-full'
            src={
              tokenToGradient[location.pathname.split('/')[2]]
                ? tokenToGradient[location.pathname.split('/')[2]]
                : backgroundGradientOrange
            }
            alt=''
          />
        ) : (
          <img className='h-full w-full' src={backgroundImage} alt='' />
        )}
      </div>
    </main>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
      <MainContent />
    </BrowserRouter>
  );
}

export default Router;
