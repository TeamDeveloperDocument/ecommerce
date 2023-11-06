import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export function Content({ search, content, setcontent }) {
  return (
    <section className="content">
      <div className="container">
        {content
          .filter((searchName) =>
            search.length
              ? searchName.title.toLowerCase().includes(search.toLowerCase())
              : true
          )
          .map((item, i) =>
            item.cardFlag ? (
              <CardA
                key={item.id}
                content={content}
                setcontent={setcontent}
                item={item}
                i={i}
              />
            ) : (
              <CardB
                key={item.id}
                content={content}
                setcontent={setcontent}
                item={item}
                i={i}
              />
            )
          )}
      </div>
    </section>
  );
}

function CardA({ content, setcontent, item, i }) {
  return (
    <div className="card">
      <IconButton
        className="del"
        aria-label="delete"
        onClick={() =>
          setcontent(content.filter((value, index) => index !== i))
        }
      >
        <DeleteIcon />
      </IconButton>
      <img src={item.img} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <Button
        className="btn"
        onClick={() =>
          setcontent([
            ...content.slice(0, i),
            { ...content[i], cardFlag: false },
            ...content.slice(i + 1)
          ])
        }
        variant="contained"
      >
        Look Up <FontAwesomeIcon className="icon" icon={faChevronRight} />
      </Button>
      <Link to={`/recipe&${item.id}`}>Learn More....</Link>
    </div>
  );
}

function CardB({ content, setcontent, item, i }) {
  return (
    <div className="card">
      <button
        className="back"
        onClick={() =>
          setcontent([
            ...content.slice(0, i),
            { ...content[i], cardFlag: true },
            ...content.slice(i + 1)
          ])
        }
      >
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <h1>Ingredients</h1>
      <ul>
        {item.ingredients.map((ele, i) => (
          <li>{ele}</li>
        ))}
      </ul>
    </div>
  );
}
