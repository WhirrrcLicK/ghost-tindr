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
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="create">
        <h2>CREATE PROFILE</h2>
        <form onSubmit={handleSumbit}>
          <section>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required={true}
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Age"
              required={true}
              value={formData.age}
              onChange={handleChange}
            />

            <label htmlFor="interested">Interested In</label>
            <input
              id="interested"
              type="text"
              name="interested_in"
              placeholder="Interested In"
              required={true}
              value={formData.interested_in}
              onChange={handleChange}
            />

            <label htmlFor="bios">Bios</label>
            <input
              id="bios"
              type="text"
              name="bios"
              required={true}
              placeholder="I like..."
              value={formData.bios}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              id="url"
              type="url"
              name="url"
              required={true}
              onChange={handleChange}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
