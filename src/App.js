import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import StatImg from "./components/StatImg/StatImg";
import Slider from "./components/slider/Slider";

function App() {
  const list1 = [
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
  ];
  const list2 = [
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
  ];
  const list3 = [
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
    {
      title: "Nature Bar Soap",
      text: "Offers a mild yet effective cleanse ",
      url: "https://www.aesop.com/u1nb1km7t5q7/1jDpJFSo3ih2QozJeNoNEJ/5f9d6b5863522f92eee44e0f1100608e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Large_1800x1093px.png",
    },
  ];
  const images = [
      "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg",
      "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg",
      "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg"
  ];
  return (
    <div className="App">
      <div className="etctext">
        <p>
          Trained Aesop consultations are available to provide bespoke skin care
          advise.
        </p>
        <p style={{ fontWeight: "bold", textDecoration: "none" }}>
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Book a video consultation
          </span>
        </p>
      </div>
      <div className="etctext2">
        <p>
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400 +
        </p>
      </div>
      <Navbar />
      <Home />
      <Slider
        title="For the body"
        about="An expression of care"
        desc="Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma."
        btntext="See all Body Care"
        list={list1}
      />
      <StatImg
      type="stat"
      link="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg" />
      <Slider
        title="For the body"
        about="An expression of care"
        desc="Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma."
        btntext="See all Body Care"
        list={list2}
      />
      <StatImg
      type="stat" 
      link="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
      style="rev"
      />
      <Slider
        title="For the body"
        about="An expression of care"
        desc="Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma."
        btntext="See all Body Care"
        list={list3}
      />
      <StatImg
      type="dyn" 
      images={images}
      />
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"150px 50px", gap:"1em", textAlign:"center", backgroundColor:"#fffef2"}}>
      <h1>‘Life never becomes a habit to me. It's always a marvel.’</h1>
      <p>Katherine Mansfield</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
