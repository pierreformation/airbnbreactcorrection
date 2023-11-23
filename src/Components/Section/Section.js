import "./section.css";
import Card from "../Card/Card";

const Section = () => {
  const result = [
    {
      name: "apt1",
      address: "1 rue de lappe",
      imgUrl:
        "https://a0.muscache.com/im/pictures/72045b06-2774-4d67-abc3-64b4941c4106.jpg?im_w=720",
    },
    {
      name: "apt2",
      address: "2 rue de lappe",
      imgUrl:
        "https://a0.muscache.com/im/pictures/54188d5a-6c1f-462c-b59e-386621aa66e2.jpg?im_w=720",
    },
    {
      name: "apt3",
      address: "3 rue de lappe",
      imgUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-51245223/original/9eecf2b6-e7ca-412e-9dfe-1fd0d978966a.jpeg?im_w=720",
    },
    {
      name: "apt4",
      address: "18 rue de lappe",
      imgUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-51245223/original/9eecf2b6-e7ca-412e-9dfe-1fd0d978966a.jpeg?im_w=720",
    },
  ];

  console.log("je demarre sections");

  return (
    <section className="cardsContainer">
      {result.map((item) => {
        return (
          <Card name={item.name} imgUrl={item.imgUrl} address={item.address} />
        );
      })}
    </section>
  );
};

export default Section;
