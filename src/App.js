import React from "react";
import Photo from "./photo";

class App extends React.Component {
  state = {
    photo: [
      {
        id: 1,
        name: "2018",
        overview: " HallStatt",

        imageUrl:
          "https://cdn1.eyeem.com/thumb/15b0a404a85a47ee778efa4ac286f29adc46fe57-1526777767174/1100/1100",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.5321395084861!2d13.649392373758564!3d47.562785600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47713752966fb6fd%3A0x467a5c08d8b89f84!2sSpielplatz!5e0!3m2!1str!2str!4v1663143741424!5m2!1str!2str",
      },

      {
        id: 2,
        name: "2020",
        overview: "AKdamar",
        imageUrl:
          "https://cdn4.eyeem.com/thumb/7696496ca6d9c7299ad20d0ba47f6be0dbd1d250-1601563747524/1100/1100",
        location:
          "https://maps.google.com/maps?q=akdamar&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
      {
        id: 3,
        name: "2019",
        overview: "Italy",
        imageUrl:
          "https://cdn4.eyeem.com/thumb/69107717ae386995efd770f778a9aeed332d844b-1566395937312/1100/1100",
        location:
          "https://maps.google.com/maps?q=rome&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
      {
        id: 4,
        name: "2018",
        overview: "Vienna",
        imageUrl:
          "https://cdn1.eyeem.com/thumb/0502bda3aa987b8ba1242b715f0283be39cd29ae-1527289458490/1100/1100",
        location:
          "https://maps.google.com/maps?q=vienna&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
      {
        id: 5,
        name: "2015",
        overview: "Istanbul",
        imageUrl:
          "https://cdn5.eyeem.com/thumb/85d682103ba7f68a123d8fad2b31b4d04e69dfed-1511363923832/1100/1100",
        location:
          "https://maps.google.com/maps?q=haydarpa%C5%9Fa&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
      {
        id: 6,
        name: "2019",
        overview: "Italy",
        imageUrl:
          "https://cdn3.eyeem.com/thumb/c41d7411f66a4a081cca4f932812c9588e68a725-1582053137094/1100/1100",
        location:
          "https://maps.google.com/maps?q=rome&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
    ],
  };

  render() {
    return <Photo photo={this.state.photo} />;
  }
}
export default App;
