import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <div>
        The more information you provide the more accurate your quote will be.
        Skip any questions you’re unsure about.
      </div>
      <br />
      <div className="holder">
        <label>Does The RV Have An Anti Theft Device?</label>
        <div className="manhoos">
          <input type="radio" className="radiodot" />"
          <label className="radiodot"> Yes</label>
          <input type="radio" className="radiodot" />
          <label className="radiodot">No</label>
        </div>
      </div>

      <div className="holder">
        <label>Does The RV Have An Anti Theft Device?</label>
        <input type="radio" className="radiodot" />
        <label className="radiodot">Yes</label>
        <input type="radio" className="radiodot" />{" "}
        <label className="radiodot">No</label>
      </div>
      <div className="third-container">
        <label>Purchase Price ($)</label>
        <input
          className="allinput"
          type="text"
          placeholder="Ex. $75,000"
          value={formData.Price}
          onChange={(event) =>
            setFormData({ ...formData, Price: event.target.value })
          }
        />
      </div>
      <div className="third-container">
        <span>
          <label>
            How Many Days Per Year Do You Use Your RV? (Days)
            <input
              className="allinput"
              type="text"
              placeholder="Ex. $75,000"
              value={formData.Days}
              onChange={(event) =>
                setFormData({ ...formData, Days: event.target.value })
              }
            />
          </label>
        </span>
      </div>
    </div>
  );
}

export default OtherInfo;
