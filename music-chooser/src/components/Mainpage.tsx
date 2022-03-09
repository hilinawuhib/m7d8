import React from "react";
import { Form, Card, Button, Container, Col, Row } from "react-bootstrap";
import { Songs } from "./Types";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

const Mainpage = () => {
  const [songs, setSongs] = useState<Songs[]>([]);
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
    );
    if (res.ok) {
      const { data } = await res.json();
      console.log(data);
      setSongs(data);
    } else {
      console.log("error");
    }
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Form className="mt-5">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="search"
                value={query}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={2}>
          <Button
            className="mt-5"
            variant="outline-dark"
            onClick={handleSubmit}
          >
            search
          </Button>
        </Col>
        <Col md={12}>
          {songs.map((song) => (
            <Card className="musicards" >
              <Card.Img variant="top" src={song.album.cover_small} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Mainpage;
