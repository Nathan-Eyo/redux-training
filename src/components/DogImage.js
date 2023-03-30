import React from 'react'
import { useGetDogImageQuery } from '../api/apiSlice';

const DogImage = () => {
    const {data, isLoading} = useGetDogImageQuery();
    console.log(data);
  return (
    <img src={data?.message} alt="dog picture"  width={600} height={600}/>
  )
}

export default DogImage