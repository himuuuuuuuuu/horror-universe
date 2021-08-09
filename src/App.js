import React, { useState } from "react";
import "./styles.css";

var artistWork = {
  Movies: [
    {
      art: "the exorcist (1973)",
      details: "IMDb rating: 8/10 ",
      imgUrl: "https://us.v-cdn.net/5020761/uploads/editor/bc/6yulmok45s0n.jpg"
    },
    {
      art: "Conjuring(2013)",
      details: "IMDb rating: 7.5/10",
      imgUrl:
        "https://www.joblo.com/assets/images/oldsite/posters/images/full/the-conjuring-poster01_thumb.jpg"
    },
    {
      art: "Conjuring2(2016)",
      details: "IMDb rating: 7.3/10",
      imgUrl:
        "https://i.pinimg.com/originals/f3/eb/be/f3ebbea30ee3302f0492e7822cea910b.jpg"
    },
    {
      art: "Conjuring3 (2021)",
      details: "IMDb rating: 6.3/10 ",
      imgUrl:
        "https://i.pinimg.com/originals/55/9d/79/559d79aa7124d6a4190e683ff72aaf60.jpg"
    },

    {
      art: "Annabelle(2014) ",
      details: "IMDb rating 5.4/10",
      imgUrl:
        "https://ih1.redbubble.net/image.859959565.0301/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
      art: "Annabelle: Creation (2017)",
      details: "IMDb rating: 6.5/10 ",
      imgUrl:
        "https://media-cache.cinematerial.com/p/500x/cakbetpp/annabelle-creation-movie-cover.jpg?v=1502573107"
    },

    {
      art: "Annabelle comes home(2019)",
      details: "IMDb rating: 5.9/10 ",
      imgUrl:
        "https://d9nvuahg4xykp.cloudfront.net/-5169332296965673086/-8437196814326469509.jpg"
    },
    {
      art: "The Nun(2018)",
      details: "IMDb rating: 5.3/10 ",
      imgUrl:
        "https://teaser-trailer.com/wp-content/uploads/The-Nun-Movie-poster.jpg"
    },

    {
      art: "Friend Request(2016)",
      details: "IMDb rating: 5.3/10 ",
      imgUrl: "https://pics.filmaffinity.com/Friend_Request-273484278-large.jpg"
    },
    {
      art: "The Grudge(2004)",
      details: "IMDb rating: 5.9/10 ",
      imgUrl:
        "https://i.pinimg.com/474x/4b/15/ae/4b15ae2db8ab76ed79c2ad2ff157b99f.jpg"
    },
    {
      art: "The Grudge2(2006)",
      details: "IMDb rating: 5.1/10 ",
      imgUrl: "https://movieposters2.com/images/750409-b.jpg"
    },

    {
      art: "The Grudge3(2009)",
      details: "IMDb rating: 4.7/10 ",
      imgUrl:
        "https://i.pinimg.com/originals/d2/cc/55/d2cc5588413b201a4822f306c5d32ceb.jpg"
    }
  ],
  Series: [
    {
      art: "Marianne",
      details: "IMDb rating 7.5/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/40/Marianne_series.jpg"
    },
    {
      art: "Stranger things",
      details: "IMDb rating 8.7/10",
      imgUrl:
        "https://www.closeup-shop.com/media/oart_0/oart_s/oart_89751/thumbs/908437_2487824.jpg"
    },
    {
      art: "Castle Rock",
      details: "IMDb rating 7.6/10",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdVx7TtDexYgA1jVQy_5lWfbS_RSXK1_MVQ&usqp=CAU"
    },
    {
      art: "The Haunting of Bly Manor",
      details: "IMDb rating 7.4/10",
      imgUrl:
        "https://img.republicworld.com/republic-prod/stories/images/16013696235f72f61721f29.jpg"
    },
    {
      art: "Locke and Key",
      details: "IMDb rating 7.4/10",
      imgUrl:
        "https://assets.penguinrandomhouse.com/series-images/series-LK2-triad.png"
    },
    {
      art: "The Haunting of Hill House",
      details: "IMDb rating 8.6/10",
      imgUrl:
        "https://i.pinimg.com/originals/6e/87/36/6e87367d870c49a5da532195c5dc7847.jpg"
    }
  ],
  Books: [
    {
      art: "Mexican gothic",
      details: "Goodreads 3.7/5",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61VjdedT6ML.jpg"
    },
    {
      art: "The Southern Book Club's Guide to Slaying Vampires",
      details: "Goodreads 3.8/5",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjSHubsKOL-FU-fvd9Nvg1_sAWlVcgzxWQ&usqp=CAU"
    },
    {
      art: "If It Bleeds",
      details: "Goodreads 4/5",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tAd3w4IIxgG-Rgpn0TdSBd3dxqnvSjB4Kg&usqp=CAU"
    },
    {
      art: "The Year of the Witching",
      details: "Goodreads 3.8/5",
      imgUrl:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576699031l/49789629.jpg"
    },
    {
      art: "The Only Good Indians",
      details: "Goodreads 3.8/5",
      imgUrl:
        "https://media.titanbooks.com/catalog/products/OnlyGoodIndians.jpg"
    },
    {
      art: "Devolution: A Firsthand Account of the Rainier Sasquatch Massacre",
      details: "Goodreads 3.9/5",
      imgUrl: "https://m.media-amazon.com/images/I/51QBoRpApkL.jpg"
    },
    {
      art: "Survivor Song",
      details: "Goodreads 3.8/5",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/817ZqUvcuZL.jpg"
    },
    {
      art: "Malorie",
      details: "Goodreadse 3.8/5",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81VyKG8JUbL.jpg"
    },
    {
      art: "Lakewood",
      details: "Goodreads 3.5/5",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81xzH8-6+yL.jpg"
    }
  ]
};

export default function App() {
  var [artists, setArtists] = useState("Movies");
  function clickHandler(event) {
    setArtists(event);
    // var meaning = artistWork[buttonClick];
    // console.log(meaning);
  }
  return (
    <div className="App">
      <ul className="heading">
        <div>
          <h2>
            <a style={{ color: "white", textDecoration: "none" }}>
              Horror Universe 👻
            </a>
          </h2>
        </div>

        {Object.keys(artistWork).map((event) => {
          if (artists === event) {
            return (
              <li
                style={{ textDecoration: "underline" }}
                onClick={() => clickHandler(event)}
              >
                <b>{event}</b>
              </li>
            );
          }
          return <li onClick={() => clickHandler(event)}>{event}</li>;
        })}
      </ul>

      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {artistWork[artists].map((work) => (
          <div
            style={{
              width: "20%",
              //border: "4px solid #f7f3f6",
              padding: "20px",
              margin: "50px"
            }}
          >
            <h2 className="booksHead">{work.art}</h2>
            <img src={work.imgUrl} />
            <div className="detailed">{work.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
