import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-left-logos">
            <img src="/images/mini-logo-1.png" alt="Партнер AQVEX" />

            <div className="logo-wrapper">
              <img
                src="/images/mini-logo-2-background.png"
                alt=""
                className="logo-background"
              />
              <img
                src="/icons/mini-logo-2.svg"
                alt="Партнер AQVEX"
                className="logo-foreground"
              />
            </div>

            <p>AQVEX © 2026 | Усі права захищено</p>
          </div>

          <div className="footer-right-logo">
            <img
              src="/images/mini-logo-3.png"
              alt="Партнер AQVEX"
              width={77}
              height={34}
            />
            <img
              src="/images/mini-logo-4.png"
              alt="Партнер AQVEX"
              width={69}
              height={34}
            />
            <img
              src="/images/mini-logo-5.png"
              alt="Партнер AQVEX"
              width={62}
              height={34}
            />
            <img
              src="/images/mini-logo-6.png"
              alt="Партнер AQVEX"
              width={64}
              height={34}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
