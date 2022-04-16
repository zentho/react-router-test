import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();
  let { profileID, profileName } = useParams();

  return (
    <div>
      <h1>This is the profile page</h1>
      <p>profileID: {profileID}</p>
      <p>profileID: {profileName}</p>
      <hr />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go back home
      </button>
    </div>
  );
}
