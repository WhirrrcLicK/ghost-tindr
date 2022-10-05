import React, { useState } from "react";
import Nav from "../Nav";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    name: "",
    age: "",
    location: "",
    type: "",
    interested_in: "",
    bio_description: "",
    url1: "",
    url2: "",
    url3: "",
    matches: [],
  });

  let history = useHistory();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/user", {
        formData,
      });
      const success = response.status === 200;
      if (success) history.push("/cards");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log("value" + value, "name" + name);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <div className="create">
      <p>Create Profile</p>
      <form onSubmit={handleSumbit}>
        <section>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required={true}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            id="age"
            type="text"
            name="age"
            placeholder="Age"
            required={true}
            value={formData.age}
            onChange={handleChange}
          />
          <input
            id="location"
            type="text"
            name="location"
            required={true}
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            id="type"
            type="text"
            name="type"
            required={true}
            placeholder="Ghost type"
            value={formData.type}
            onChange={handleChange}
          />
          <input
            id="interested"
            type="text"
            name="interested_in"
            placeholder="Looking for"
            required={true}
            value={formData.interested_in}
            onChange={handleChange}
          />
          <input
            id="bio_description"
            type="text"
            name="bio_description"
            required={true}
            placeholder="About me"
            value={formData.bio_description}
            onChange={handleChange}
          />
        </section>

        <section>
          <label htmlFor="url">Profile Photo</label>
          <input
            id="url1"
            type="url"
            name="url1"
            placeholder="insert image url here"
            required={true}
            onChange={handleChange}
          />
          <div className="photo-container">
            {formData.url1 && (
              <img src={formData.url1} alt="profile pic preview" />
            )}
          </div>

          <label htmlFor="url">Bio Photo</label>
          <input
            id="url2"
            type="url"
            name="url2"
            placeholder="insert image url here"
            required={false}
            onChange={handleChange}
          />
          <div className="photo-container">
            {formData.url2 && (
              <img src={formData.url2} alt="profile pic preview" />
            )}
          </div>

          <label htmlFor="url">Bio Photo</label>
          <input
            id="url3"
            type="url"
            name="url3"
            placeholder="insert image url here"
            required={false}
            onChange={handleChange}
          />
          <div className="photo-container">
            {formData.url3 && (
              <img src={formData.url3} alt="profile pic preview" />
            )}
          </div>
          <input type="submit" />
        </section>
      </form>
    </div>
  );
}
