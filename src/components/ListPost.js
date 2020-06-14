import React, { useState, UseEffect} from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth';

export default function ListPost (){
    useEffect( {
        axiosWithAuth().get("https://strapi-crea.5ika.org/")
    })
}