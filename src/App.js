import React from "react";


const movie = {
  title: "Avengers: Infinity War",
  image:
    "https://img.gazeta.ru/files3/905/11750905/mstiteli-pic905-895x505-44281.jpg",
  overview: "Very interesting action movie",
  version: 10.1
};

function Image({ src, alt }) {
  return <img src={src} alt={alt} className="img" />;
}

class MovieItem extends React.Component {
  state = {
    show: false
  }

  showCard = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const {
      data: { title, version, overview, image }
    } = this.props;
    return (
      <div>
        {this.state.show ?
          <div>
            <Image src={image} alt={title} />
            <div>{title}</div>
            <div>{overview}</div>
            <div>{version}</div>
          </div> : null
        }
        <button type="button" onClick={this.showCard}>{this.state.show ? "close" : "show"}</button>
      </div>
    );
  }
}


export default function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}

