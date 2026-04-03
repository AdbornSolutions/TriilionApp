import { services } from '../data/data.jsx';
import ServiceDetail from './ServiceDetail';

const MobileApp = () => {
  const service = services.find(s => s.id === 'mobile-app');
  
  return <ServiceDetail service={service} />;
};

export default MobileApp;
