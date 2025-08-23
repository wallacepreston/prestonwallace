import * as React from "react"
import { blogBaseUrl } from "../constants";

const GetFree = () => {

  return (
    <div className="section-padding get-free">
      <div className="content-container">
        <h2 className="section-title">Want to boost your Developer knowledge, fast?</h2>
        
        <button className="button button-info button-medium hover-grow">
          <a href={`${blogBaseUrl}`}>Learn Dev Now!</a>
        </button>
      </div>
    </div>
  )
}

export default GetFree;
