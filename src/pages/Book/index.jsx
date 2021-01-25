import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Title, Author, Date, Image, Description, Button } from "../../components/styles";
import parse from "html-react-parser";

const Book = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const handleBook = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    handleBook();
  })

  return (
    <Card>
      {!!data ? (
        <>
          <Title>{data.volumeInfo.title}</Title>
          <Image src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
          <Description>{parse(data.volumeInfo.description)}</Description>
          <Author>{data.volumeInfo.authors}</Author>
          <Date>{data.volumeInfo.publishedDate}</Date>
          <a href={data.volumeInfo.infoLink} target="_blank" rel="noreferrer"><Button>Ler</Button></a>
          <a href="/"><Button>Voltar</Button></a>
        </>
      ) : (
        <h1>Indisponivel</h1>
      )}
    </Card>
  )
}

export default Book;