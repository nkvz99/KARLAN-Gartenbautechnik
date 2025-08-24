import Card from "./Cards";
import SERVICES, { type Service } from "./ServiceData";
import "./ServiceCards.css";

export default function ServicesCards() {
  return (
  <section className="services-section" id="services">
    <div className="card">Our Expert Services</div>
  <div className="services-container">
    {SERVICES.map((service: Service) => (
      <Card key={service.title} {...service} />
    ))}
  </div>
</section>
  );
}
