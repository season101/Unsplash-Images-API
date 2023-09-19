import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Gallery = () => {
  const url = 'aurltobeadded';

  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading ...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Error ...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No result found ...</h4>
      </section>
    );
  }
  // console.log(response);
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
