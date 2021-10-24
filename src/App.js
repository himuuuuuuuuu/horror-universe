import React, { useState } from "react";
import "./styles.css";

// data base
var artistWork = {
  Movies: [
    {
      name: "the exorcist (1973)",
      details: "IMDb rating: 8/10 ",
      imgUrl: "https://us.v-cdn.net/5020761/uploads/editor/bc/6yulmok45s0n.jpg",
      description:
        "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her."
    },
    {
      name: "Conjuring(2013)",
      details: "IMDb rating: 7.5/10",
      imgUrl:
        "https://houseofmysterioussecrets.com/images/product/Item73517M.jpg.jpg",
      description:
        "The Conjuring is a 2013 supernatural horror film inspired by the true-life story of the Perron family, who claimed theylived among the dead in the 1970s as spirits both friendly and sinister inhabited their Rhode Island farmhouse."
    },

    {
      name: "Conjuring2(2016)",
      details: "IMDb rating: 7.3/10",
      imgUrl:
        "https://i.pinimg.com/originals/f3/eb/be/f3ebbea30ee3302f0492e7822cea910b.jpg",
      description:
        "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit."
    },
    {
      name: "Conjuring3 (2021)",
      details: "IMDb rating: 6.3/10 ",
      imgUrl:
        "https://i.pinimg.com/originals/55/9d/79/559d79aa7124d6a4190e683ff72aaf60.jpg",
      description:
        "The Conjuring: The Devil Made Me Do It (also known as The Conjuring 3) is a 2021 American supernatural horror film directed by Michael Chaves,"
    },

    {
      name: "Annabelle(2014) ",
      details: "IMDb rating 5.4/10",
      imgUrl:
        "https://ih1.redbubble.net/image.859959565.0301/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      description:
        "Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan."
    },
    {
      name: "Annabelle: Creation (2017)",
      details: "IMDb rating: 6.5/10 ",
      imgUrl:
        "https://media-cache.cinematerial.com/p/500x/cakbetpp/annabelle-creation-movie-cover.jpg?v=1502573107",
      description:
        "Annabelle: Creation is a 2017 American supernatural horror film directed by David F. ... It is a prequel to 2014's Annabelle and the fourth installment in the Conjuring Universe franchise. "
    },

    {
      name: "Annabelle comes home(2019)",
      details: "IMDb rating: 5.9/10 ",
      imgUrl:
        "https://d9nvuahg4xykp.cloudfront.net/-5169332296965673086/-8437196814326469509.jpg",
      description:
        "While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll."
    },
    {
      name: "The Nun(2018)",
      details: "IMDb rating: 5.3/10 ",
      imgUrl:
        "https://teaser-trailer.com/wp-content/uploads/The-Nun-Movie-poster.jpg",
      description:
        "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun."
    },

    {
      name: "Friend Request(2016)",
      details: "IMDb rating: 5.3/10 ",
      imgUrl:
        "https://pics.filmaffinity.com/Friend_Request-273484278-large.jpg",
      description:
        "When a college student unfriends a mysterious girl online, she finds herself fighting a demonic presence that wants to make her lonely by killing her closest friends."
    },
    {
      name: "The Grudge(2004)",
      details: "IMDb rating: 5.9/10 ",
      imgUrl:
        "https://i.pinimg.com/474x/4b/15/ae/4b15ae2db8ab76ed79c2ad2ff157b99f.jpg",
      description:
        "The Grudge describes a curse that is born when someone dies in the grip of extreme rage or sorrow. The curse is an entity created where the person died. "
    },
    {
      name: "The Grudge2(2006)",
      details: "IMDb rating: 5.1/10 ",
      imgUrl: "https://movieposters2.com/images/750409-b.jpg",
      description:
        "“The Grudge 2” follows a different formula for horror, in that there is virtually no blood, guts, or gore in the movie. It seems that most horror movies these days are competing for the title of goriest film ever made."
    },

    {
      name: "The Grudge3(2009)",
      details: "IMDb rating: 4.7/10 ",
      imgUrl:
        "https://i.pinimg.com/originals/d2/cc/55/d2cc5588413b201a4822f306c5d32ceb.jpg",
      description:
        "A young Japanese woman who holds the key to stopping the evil spirit of Kayako, travels to the haunted Chicago apartment from the sequel, to stop the curse of Kayako once and for all."
    }
  ],
  Series: [
    {
      name: "Marianne",
      details: "IMDb rating 7.5/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/40/Marianne_series.jpg",
      description:
        "Marianne, as we come to discover, has been haunting Emma in real-life since childhood, and her books have become a therapeutic outlet. ... It begins with Marianne's childhood, where her house mysteriously burns down, tragically killing her parents."
    },
    {
      name: "Stranger things",
      details: "IMDb rating 8.7/10",
      imgUrl:
        "https://www.closeup-shop.com/media/oart_0/oart_s/oart_89751/thumbs/908437_2487824.jpg",
      description:
        "A young boy, Will Byers, goes missing near a top-secret government laboratory. ... As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl."
    },
    {
      name: "Castle Rock",
      details: "IMDb rating 7.6/10",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdVx7TtDexYgA1jVQy_5lWfbS_RSXK1_MVQ&usqp=CAU",
      description:
        "If you're looking for a chilling series fraught with jump scares, you're not going to find it right away with Castle Rock."
    },
    {
      name: "The Haunting of Bly Manor",
      details: "IMDb rating 7.4/10",
      imgUrl:
        "https://img.republicworld.com/republic-prod/stories/images/16013696235f72f61721f29.jpg",
      description:
        "If there's a theme running through reviews of Netflix's “The Haunting of Bly Manor,” the second installment of Mike Flanagan's horror anthology, it's that “Bly Manor” simply isn't as scary as its predecessor"
    },
    {
      name: "Locke and Key",
      details: "IMDb rating 7.4/10",
      imgUrl:
        "https://assets.penguinrandomhouse.com/series-images/series-LK2-triad.png",
      description:
        "Following their father's murder, three siblings move into a house filled with reality-bending keys; from the comics by Joe Hill and Gabriel Rodriguez."
    },
    {
      name: "The Haunting of Hill House",
      details: "IMDb rating 8.6/10",
      imgUrl:
        "https://i.pinimg.com/originals/6e/87/36/6e87367d870c49a5da532195c5dc7847.jpg",
      description:
        "The Haunting of Hill House is an American supernatural horror drama television series created and directed by Mike Flanagan, "
    }
  ],
  Books: [
    {
      name: "Mexican gothic",
      details: "Goodreads rating 3.7/5",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61VjdedT6ML.jpg",
      description:
        "Mexican Gothic is a 2020 gothic horror novel by Mexican Canadian author Silvia Moreno-Garcia."
    },
    {
      name: "The Southern Book Club's Guide to Slaying Vampires",
      details: "Goodreads rating 3.8/5",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjSHubsKOL-FU-fvd9Nvg1_sAWlVcgzxWQ&usqp=CAU",
      description:
        "The Southern Book Club's Guide to Slaying Vampires is a 2020 horror novel by American author Grady Hendrix."
    },
    {
      name: "If It Bleeds",
      details: "Goodreads rating 4/5",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tAd3w4IIxgG-Rgpn0TdSBd3dxqnvSjB4Kg&usqp=CAU",
      description:
        "If It Bleeds is a collection of four previously unpublished novellas by American writer Stephen King."
    },
    {
      name: "The Year of the Witching",
      details: "Goodreads rating 3.8/5",
      imgUrl:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576699031l/49789629.jpg",
      description:
        "A young woman living in a rigid, puritanical society discovers dark powers within herself, with terrifying and far-reaching consequences, in this stunning, feminist fantasy debut."
    },
    {
      name: "The Only Good Indians",
      details: "Goodreads rating 3.8/5",
      imgUrl:
        "https://media.titanbooks.com/catalog/products/OnlyGoodIndians.jpg",
      description:
        "The Only Good Indians is a 2020 horror novel by Stephen Graham Jones. It was first published on July 14, 2020 through Saga Press and Titan Books."
    },
    {
      name: "Devolution: A Firsthand Account of the Rainier Sasquatch Massacre",
      details: "Goodreads rating 3.9/5",
      imgUrl: "https://m.media-amazon.com/images/I/51QBoRpApkL.jpg",
      description:
        "Devolution: A Firsthand Account of the Rainier Sasquatch Massacre is a 2020 fiction book by American author Max Brooks."
    },
    {
      name: "Survivor Song",
      details: "Goodreads rating 3.8/5",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/817ZqUvcuZL.jpg",
      description:
        "Survivor Song is a 2020 horror novel by American author Paul Tremblay."
    },
    {
      name: "Malorie",
      details: "Goodreads rating 3.8/5",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81VyKG8JUbL.jpg",
      description:
        "Malorie is a 2020 post-apocalyptic horror novel by Josh Malerman and the sequel to his 2014 debut novel Bird Box"
    },
    {
      name: "Lakewood",
      details: "Goodreads rating 3.5/5",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81xzH8-6+yL.jpg",
      description:
        "Directed by Danny Allen. With Charley McDougall, Jessica Ann Brownlie. .."
    }
  ]
};

export default function App() {
  //setting initial value as Movies
  var [artists, setArtists] = useState("Movies");
  // event handler
  function clickHandler(event) {
    setArtists(event);
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

        {/* converting object into array to access by index */}
        {/* artistWork = [Movies , Series , Books] after converting in array */}
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
            <h2 className="booksHead">{work.name}</h2>
            <img src={work.imgUrl} />
            <div className="detailed">{work.details}</div>
            <div className="description">{work.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
