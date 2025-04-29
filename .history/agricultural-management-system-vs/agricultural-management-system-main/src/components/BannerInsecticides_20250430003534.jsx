import React from "react";
import { Link } from "react-router-dom";
import "./i";

const BannerHerbicides = () => {
  return (
    <section className="shop-banner3">
      {/* 🔥 Overlay */}
      <div className="overlayy3"></div>

      {/* Content on top of overlay */}
      <div className="content">
        <p className="subheading">Buy Insecticides At Our Store</p>
        <h1 className="title ">SHOP Insecticides</h1>
        <div className="underline"></div>
        <nav className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>{" "}
          ➝<Link className="breadcrumb-link">Shop Insecticides</Link>
        </nav>
      </div>
    </section>
  );
};

export default BannerHerbicides;
