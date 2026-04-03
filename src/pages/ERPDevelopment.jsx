import { services } from '../data/data.jsx';
import ServiceDetail from './ServiceDetail';

const ERPDevelopment = () => {
  const service = services.find(s => s.id === 'erp-development');
  
  return <ServiceDetail service={service} />;
};

export default ERPDevelopment;
