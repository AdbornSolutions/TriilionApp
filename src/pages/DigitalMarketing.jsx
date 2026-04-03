import { services } from '../data/data.jsx';
import ServiceDetail from './ServiceDetail';

const DigitalMarketing = () => {
  const service = services.find(s => s.id === 'digital-marketing');
  
  return <ServiceDetail service={service} />;
};

export default DigitalMarketing;
