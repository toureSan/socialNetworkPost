import React, { useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { SocialContext } from "../context/SocialContext";
import { Container, Row, Col, Card } from 'react-bootstrap';
import AddPostForm from './AddPostForm'

export default function ListPost() {

  const { postList, setPostList } = useContext(SocialContext);



  useEffect(_ => {

    axiosWithAuth().get("https://strapi-crea.5ika.org/posts")
      .then(res => {
        console.log(res.data);
        setPostList(res.data)

      })
      .catch(err => console.log(err))
  },[])

  return (

    <>

      <Container fluid="md">
        <h1> Listes des postes</h1>
        {postList.map(postList => {
          return (

            <Row>
              <Col>
                <Card style={{ marginBottom: '1rem' }}>
                  <Card.Body key={postList}>
                    <Card.Title><strong>ID:</strong> {postList.id}</Card.Title>
                    <Card.Title><strong>{postList.title}</strong></Card.Title>
                    <Card.Text>{postList.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          )

        })}
        <AddPostForm />
      </Container>



    </>
  )
}