import React, { useState, useContext, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { SocialContext } from "../context/SocialContext";
import { Card, Button, Container } from 'react-bootstrap';

export default function Profile() {
    const { profile, setProfile } = useContext(SocialContext)
    const [editProfile, setEditProfile] = useState();
    const [editedProfile, setEditedProfile] = useState({
        firstname: "",
        lastName: "",
        bio: ""

    });

    useEffect(_ => {
        axiosWithAuth().get(`https://strapi-crea.5ika.org/users/${profile.id}`)
            .then(res => {
                console.log(res.data);
                setProfile(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProfile = id => {
        axiosWithAuth().delete(`https://strapi-crea.5ika.org/users/${profile.id}`)
            .then(res => (res => setProfile(profile.filter(profile => profile.id !== id)))
                .catch(err => console.log(err))
            )
    }

    const editionProfile = profile => {
        if (!editProfile) {
            setEditProfile(profile)
            setEditedProfile(profile.id)
        }
        else {
            setEditProfile(0)
        }
    }


    const handleChange = e => setEditProfile({ ...editedProfile, [e.target.firsname]: e.target.value })
    return (
        <>
            <Container fluid="md">
                <h1>Mon profile</h1>
                {profile.map(profile => {
                    return (

                        <Card style={{ marginBottom: '1rem' }}>
                            <Card.Body key={profile}>
                                {editedProfile === profile.id

                                    ? <>
                                        <input
                                            name="firstname"
                                            value={editedProfile.firstname}
                                            onChange={handleChange}
                                            placeholder="firstname"
                                        />
                                        <input
                                            name="lastname"
                                            value={editedProfile.lastname}
                                            onChange={handleChange}
                                            placeholder="lastname"
                                        />
                                        <input
                                            name="bio"
                                            value={editedProfile.bio}
                                            onChange={handleChange}
                                            placeholder="bio"
                                        />

                                    </>
                                    : <>
                                        <Card.Title> <strong>{profile.firstname}</strong></Card.Title>
                                        <Card.Title> <strong>{profile.username}</strong></Card.Title>
                                        <Card.Title> <strong>{profile.bio}</strong></Card.Title>
                                    </>}
                                <Button className="danger" onClick={_ => deleteProfile(profile.id)}>delete</Button>
                                <Button className="danger" onClick={_ => editionProfile(profile)}>edit</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>
        </>
    )
}