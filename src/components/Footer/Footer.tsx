import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-left-logos">
            <img src="/images/mini-logo-1.png" alt="Logo 1" />

            <div className="logo-wrapper">
              <img
                src="/images/mini-logo-2-background.png"
                alt="Logo Background"
                className="logo-background"
              />
              <img
                src="/icons/mini-logo-2.svg"
                alt="Logo Foreground"
                className="logo-foreground"
              />
            </div>

            <p>AQVEX © 2026 | Все права защищены</p>
          </div>

          <div className="footer-right-logo">
            <img
              src="/images/mini-logo-3.png"
              alt="Logo 3"
              width={77}
              height={34}
            />
            <img
              src="/images/mini-logo-4.png"
              alt="Logo 4"
              width={69}
              height={34}
            />
            <img
              src="/images/mini-logo-5.png"
              alt="Logo 5"
              width={62}
              height={34}
            />
            <img
              src="/images/mini-logo-6.png"
              alt="Logo 6"
              width={64}
              height={34}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
