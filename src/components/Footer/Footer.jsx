import React from "react";
import styles from "./footer.module.css";
import FooterCategories from "./FooterCategories/FooterCategories";
function Footer() {
  const mapArr1 = [
    "Contact Us",
    "FAQs",
    "Shipping",
    "Return",
    "Order History",
    "Term and Conditions",
  ];
  const mapArr2 = [
    "Live assistance",
    "Corporate gifts",
    "Facial Appointments",
    "Click and Collect",
    "Video consultation",
  ];
  const mapArr3 = [
    "Our story",
    "Foundation",
    "Careers",
    "Privacy policy",
    "Accessibility",
    "Cookie Policy",
  ];
  const mapArr4 = ["Instagram ", "Twitter ", "LinkedIn ", "WeChat", "Weibo"];
  return (
    <div className={styles.cont}>
      <div className={styles.footerInput}>
      <h4 style={{ marginBottom: "1em" }}>Heading</h4>
      <hr style={{ marginBottom: "1em" }} />
        <input type="Email" placeholder="Email address" style={{margin:"15px 0"}}/>
        <div className={styles.checkboxCont}>
          <label className={styles.checkboxLabel}>
            <span className="custom-checkbox-design"></span>
            Subscribe to receive communications from Aesop. By subscribing, you
            confirm you have read and understood our privacy policy.
          </label>
        </div>
      </div>
      <FooterCategories heading="heading" list={mapArr1} />
      <FooterCategories heading="heading" list={mapArr2} />
      <div>
        <h3>Location preferences</h3>
        <hr style={{marginTop:"1em", marginBottom:"1em"}} />
        <div>
          <h3>Shipping:</h3>
          <p>India</p>
        </div>
        <div>
          <h3>Language:</h3>
          <p>English</p>
          <p>Hindi</p>
        </div>
      </div>
      <div>
        <h3>Sustainability</h3>
        <hr style={{marginTop:"1em", marginBottom:"1em"}}/>
        <p>
          All Aesop products are vegan, and we do not test our formulations or
          ingredients on animals. We are Leaping Bunny approved and a Certified
          B Corporation. Learn more
        </p>
      </div>
      <FooterCategories heading="heading" list={mapArr3} />
      <FooterCategories heading="heading" list={mapArr4} />
    </div>
  );
}

export default Footer;
