import React, { Component } from "react";

import birds from "./animals/Birds_7157.svg";
import owl from "./animals/Christmas_owl_7942.svg";
import penguin from "./animals/Christmas_penguin_8093.svg";
import raindeer from "./animals/Christmas_reindeer_7963.svg";
import sheep from "./animals/Cute_little_sheep_5917.svg";
import elephant from "./animals/Elephant_6711.svg";
import winterBird from "./animals/Winter_bird_8000.svg";
import rabbit from "./animals/Winter_rabbit_8089.svg";
import butterfly from "./animals/Happy_Butterfly_7876.svg";
import panda from "./animals/Panda_ice_skating_7956.svg";
import santa from "./animals/Santa_ski_7938.svg";
import rabbits from "./animals/Rabbits_6000.svg";

// randomize imgArray
//

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      arr: [
        [birds, "birds"],
        [owl, "owl"],
        [penguin, "penguin"],
        [raindeer, "raindeer"],
        [sheep, "sheep"],
        [elephant, "elephant"],
        [winterBird, "winter bird"],
        [rabbit, "rabbit"],
        [butterfly, "butterfly"],
        [panda, "panda"],
        [santa, "santa"],
        [rabbits, "rabbits"]
      ],
      pick: Math.round(Math.random() * 12),
      score: 0
    };
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  componentWillMount() {
    let arr = this.shuffle([...this.state.arr]);
    this.setState({
      arr: arr
    });
  }

  render() {
    return (
      <div>
        <ul className="collection center boldText">
          <button
            className="btn"
            onClick={() => {
              this.setState({ gameStarted: !this.state.gameStarted });
            }}
          >
            start
          </button>
          <button className="btn red lighten-2" onClick={() => {
            this.setState({
              ...this.state,
              gameStarted:  false,
              pick: Math.round(Math.random() * 11),
              score: 0
            })
          }}>
            start over
          </button>
          <li className="collection-item center boldText transparent">
            <span className="grey-text">
              {" "}
              Score: {this.state.gameStarted ? this.state.score : null}
            </span>
            <br />{" "}
            {this.state.gameStarted &&
              `Pick the ${this.state.arr[this.state.pick][1]}.`}
          </li>
        </ul>
        <div className="row">
          {this.state.arr.map((item, index, array) => {
            return (
              <div
                className={`col s4 m2 center
               ${index === this.state.pick ? "grey" : null}
               lighten-4`}
                key={item[1]}
                onClick={event => {
                  if (index === this.state.pick && this.state.gameStarted) {
                    this.setState({
                      score: this.state.score + 1,
                      pick: Math.round(Math.random() * 12)
                    });
                  }
                }}
              >
                <img src={item[0]} className="responsive-img" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
