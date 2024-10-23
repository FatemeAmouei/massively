import Card from "react-bootstrap/Card";
import { articleCard } from "./Article.types";
import "./Article.css";

function Article({ title, text, image, btn }: articleCard) {
  return (
    <Card className="article-card">
      <Card.Title className="article-card__title">{title}</Card.Title>
      <Card.Img variant="top" src={image} className="article-card__img" />
      <Card.Text className="article-card__text">{text}</Card.Text>
      <a className="article-card__btn">{btn}</a>
    </Card>
  );
}

export default Article;
