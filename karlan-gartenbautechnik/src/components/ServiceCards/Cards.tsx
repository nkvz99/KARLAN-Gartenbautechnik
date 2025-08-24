interface CardProps {
  title: string;
  image: string;
  description: string;
  className?: string;
}

export default function Card({ title, image, description, className }: CardProps) {
  return (
    <article className={`service-card ${className || ""}`}>
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
        <h3 className="service-title">{title}</h3>
      </div>
      <div className="service-content">
        <p>{description}</p>
      </div>
    </article>
  );
}
