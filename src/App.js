import { useState, useEffect } from "react";
import { Card, Box, Container, Image, Button, Input, Form, GlobalStyle, Label, Title, Author, Date } from "./styles";

const App = () => {
  const [book, setBook] = useState("");
  const [data, setData] = useState(undefined);


  const handleBook = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
    const json = await response.json();

    setData(json.items);
  }

  useEffect(() => {
    if (book.lenght === 0) {
      return;
    }
  })

  return (
    <>
    <GlobalStyle />
    <Box>
      <Title color="#fff">Book Finder</Title>
      <Form onClick={handleBook}>
        <Label htmlFor="book">Digite o livro</Label>
          <Input id="book" type="text" placeholder="Digite aqui" onChange={(e) => setBook(e.target.value)} />
        <Button type="submit" onClick={handleBook}>Pesquisar</Button>
      </Form>
    </Box >
    {data ? (
      <Container>
        {data && data.map((items) => (
            <Card>
              <Image src={items.volumeInfo.imageLinks.thumbnail} alt={items.volumeInfo.title} />
              <Title>{items.volumeInfo.title}</Title>
              <Author>{items.volumeInfo.authors}</Author>
              <Date>{items.volumeInfo.publishedDate}</Date>
              <a href={items.selfLink} target="_blank" rel="noreferrer"><Button>Ler</Button></a>
            </Card>
        ))}
      </Container>
    ) : <Title color="#fff">Busca vazia</Title>}
    </>
  );
}

export default App;
