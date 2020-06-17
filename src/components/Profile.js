import React,{useContext, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { SocialContext } from "../context/SocialContext";
import { Card } from 'react-bootstrap';

export default function Profile() {
    const { profile, setProfile } = useContext(SocialContext)
  
  
    useEffect(_ => {

        axiosWithAuth().get("https://strapi-crea.5ika.org/users/id")
            .then(res => {
                console.log(res.data);
                setProfile(res.data)

            })
            .catch(err => console.log(err))
    })

    return (
        <>
      
            {profile.map(profile => {
                return (

                    <Card style={{ marginBottom: '1rem' }}>
                        <Card.Body key={profile}>
                            <Card.Title> <strong>{profile.firstname}</strong></Card.Title>
                            
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}