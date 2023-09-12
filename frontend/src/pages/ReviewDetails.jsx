import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

function ReviewDetails() {
  const { id } = useParams();
  // const { loading, data, error } = useFetch(
  //   "http://localhost:1337/api/reviews/" + id
  // );

  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id },
  });

  // console.log(data?.data.attributes);
  console.log(data?.review?.data.attributes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="review-card">
      <div className="rating">{data?.review?.data.attributes.rating}</div>
      <h2>{data?.review?.data.attributes.title}</h2>

      {/* {data.review.categories.map(c => (
    <small key={c.id}>{c.name}</small>
  ))} */}

      <p>{data?.review?.data.attributes.body}</p>
    </div>
  );
}

export default ReviewDetails;
