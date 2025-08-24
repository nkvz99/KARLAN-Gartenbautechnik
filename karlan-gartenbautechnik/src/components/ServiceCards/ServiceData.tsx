import garden from '../../assets/serviceCards/garden.jpg';
import construction from '../../assets/serviceCards/construction.jpg';
import maintenance from '../../assets/serviceCards/maintenance.jpg';

export interface Service {
  title: string;
  image: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    title: "Garden Design",
    image: garden,
    description:"We craft unique garden layouts tailored to your property, combining aesthetics with functionality to create a harmonious outdoor space.",
  },
  {
    title: "Landscape Construction",
    image: construction,
    description: "Our skilled team specializes in transforming outdoor spaces into functional and beautiful landscapes. From patios and walkways to retaining walls and garden structures, we bring your vision to life with precision and creativity."
,
  },
  {
    title: "Garden Maintenance",
    image: maintenance,
    description: "Keep your garden thriving all year round with our comprehensive maintenance services. From pruning and fertilizing to seasonal clean-ups, we ensure your outdoor space stays healthy, vibrant, and beautiful."
,
  }
];

export default SERVICES;
