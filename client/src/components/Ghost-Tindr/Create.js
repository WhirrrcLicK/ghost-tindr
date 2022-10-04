import { set } from "lodash";
import React, { useState } from "react";
import Nav from "../Nav";

export default function Create() {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    age: "",
    interested_in: "",
    bios: "",
    url: "",
  });

  const handleSumbit = () => {
    console.log("submit");
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
              type="number"
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
                value={formData.bios}
                onChange={handleChange}
              />
              <input
                id="ghost_type"
                type="text"
                name="ghost_type"
                required={true}
                placeholder="Ghost type"
                value={formData.bios}
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
              id="bios"
              type="text"
              name="bios"
              required={true}
              placeholder="About me"
              value={formData.bios}
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              id="url"
              type="url"
              name="url"
              placeholder="insert image url here"
              required={true}
              onChange={handleChange}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          <input type="submit" />
          </section>
        </form>
      </div>
  );
}
