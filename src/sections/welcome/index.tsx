import "./welcome.css";

export const WelcomeSection = () => {
  return (
    <section className="welcome-container">
      <div className="slider-blocks">
        <div className="cyan" />
        <div className="deep-blue" />
        <div className="orange" />
        <div className="yellow" />
        <div className="green" />
      </div>
      <section className="presentation">
        <p>Criado com 💚 por: </p>
        <h1>Gustavo</h1>
      </section>
    </section>
  );
};
