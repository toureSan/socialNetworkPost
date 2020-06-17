import React, {  useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { SocialContext } from "../context/SocialContext";
import { Container, Card } from 'react-bootstrap';

export default function ListPost() {

  const { listUser, setListUser } = useContext(SocialContext);



  useEffect(_ => {

    axiosWithAuth().get("https://strapi-crea.5ika.org/users")

      .then(res => {

        console.log(res.data);
        setListUser(res.data)

      })
      .catch(err => console.log(err))
  })
  return (
    <>
      <Container fluid="md">
        <h1>Liste Utilisateurs </h1>
        {listUser.map(listUser => {
          return (
            <Card style={{ marginBottom: '1rem' }}>
              <Card.Body key={listUser}>
                <Card.Title> <strong>{listUser.username}</strong></Card.Title>
                <Card.Title> <strong>{listUser.email}</strong></Card.Title>
                <Card.Title> {listUser.firstname}</Card.Title>
                <Card.Title> {listUser.bio}</Card.Title>
              </Card.Body>
            </Card>
          )

        })}


      </Container >

    </>
  )
}