import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <div className="para">We need this information to begin your quote</div>
      <div className="addressbar">
        <label>Address</label>
        <br />
        <input
          className="allinput"
          type="text"
          placeholder="Address"
          value={formData.Address}
          onChange={(event) =>
            setFormData({ ...formData, Address: event.target.value })
          }
        />

        <div className="wrapper">
          <label>Type Of Home?</label>
          <br />

          <div className="custom-select">
            <select
              value={formData.Home}
              onChange={(event) => {
                const y = event.target.value;
                setFormData({ ...formData, Home: y });
              }}
            >
              <option value="0">Select:</option>
              <option value="1">Apartment</option>
              <option value="2">Bungalow</option>
              <option value="3">Condo</option>
              <option value="4">Cottage</option>
              <option value="5">Single Family Household</option>
              <option value="6">Ranch</option>
              <option value="7">Rowhouse</option>
              <option value="8">Townhouse</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpInfo;
