import { services } from '../data/data.jsx';
import ServiceDetail from './ServiceDetail';

const WebDevelopment = () => {
  const service = services.find(s => s.id === 'web-development');
  
  return <ServiceDetail service={service} />;
};

export default WebDevelopment;
