import { Routes, Route } from 'react-router-dom';
import ChatView from '../components/ChatView';
import InteractiveModel from '../components/InteractiveModel';
import LandingPage from '../components/LandingPage';
import * as ROUTES from '../constant/routes';

export default function PageRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.INTER_ACTIVE_MODAL} element={<InteractiveModel />} />
      <Route path={ROUTES.GROUP_CHAT} element={<ChatView />} />
    </Routes>
  );
}
