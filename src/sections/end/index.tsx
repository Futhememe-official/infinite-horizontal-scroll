import "./end.css";

interface EndColorSectionProps {
  title: string;
  description: string;
}

export const EndColorSection = ({
  title,
  description,
}: EndColorSectionProps) => {
  return (
    <section className="end-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="marker">
        <div className="cyan" />
        <div className="deep-blue" />
        <div className="orange" />
        <div className="yellow" />
        <div className="green" />
      </div>
    </section>
  );
};
