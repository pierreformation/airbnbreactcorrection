import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import "./section.css";
import Card from "../Card/Card";

const Section = () => {
  return (
    <section className="cardsContainer">
      <Card text="apt1" image={img1} />
      <Card text="apt2" image={img2} />
      <Card text="apt3" image={img3} />
      <Card text="apt4" image={img4} />
      <Card text="apt5" image={img5} />
    </section>
  );
};

export default Section;
