import "./default.css";

interface DefaultColorSectionProps {
  title: string;
  description: string;
  onShow?: () => void;
}

export const DefaultColorSection = ({
  title,
  description,
}: DefaultColorSectionProps) => {
  return (
    <section className="default-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};
