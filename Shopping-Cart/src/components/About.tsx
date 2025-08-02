import "./style.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="navLinks"
        style={{ alignContent: "end", justifyContent: "end", padding: "20px" }}
      >
        <Link to="/" className="navItem">
          Home
        </Link>
        <Link to="/about" className="navItem">
          About
        </Link>
        <Link to="/contact" className="navItem">
          Contact
        </Link>
      </div>
      <div>
        <section
          className="about-section"
          style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            🛍️ About Us
          </h1>
          <p style={{ marginBottom: "1rem" }}>
            Welcome to <strong>Shoppin</strong>, your one-stop destination for
            everything you love to shop!
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Founded in <strong>2025</strong> with a simple mission — to make
            shopping easy, enjoyable, and affordable — we bring together a wide
            range of high-quality products, from the latest fashion trends to
            must-have home essentials, electronics, and more.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            We believe shopping should be <strong>convenient</strong>,{" "}
            <strong>secure</strong>, and <strong>fun</strong>. That’s why we’re
            committed to delivering a seamless experience — with fast shipping,
            easy returns, and customer support that truly cares.
          </p>

          <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
            <li>
              <strong>Customer-first</strong> – Your satisfaction drives
              everything we do.
            </li>
            <li>
              <strong>Trendy & Affordable</strong> – We handpick products to
              match your style without breaking the bank.
            </li>
            <li>
              <strong>Secure & Reliable</strong> – Shop with confidence with our
              trusted payment gateways and privacy-first policies.
            </li>
          </ul>

          <p style={{ marginBottom: "1rem" }}>
            Whether you're hunting for the perfect outfit, upgrading your tech,
            or looking for thoughtful gifts, we’ve got something for everyone.
          </p>

          <h3 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
            🧡 Thank You
          </h3>
          <p>
            Thank you for being a part of our journey. We’re excited to serve
            you and help you find exactly what you’re looking for — and more.
          </p>
          <p>Stay connected. Stay stylish. Happy shopping! 🛒</p>
        </section>
      </div>
    </>
  );
};

export default About;
