import * as React from "react"
import { blogBaseUrl } from "../constants";

const GetFree = () => {

  return (
    <div className="section-padding get-free">
      <div className="content-container">
        <h2 className="section-title">Want to boost your TypeScript knowledge, fast?</h2>
        <p><em>👉 Get the <b>FREE</b> guide. 👈</em></p>
        <br/>
        <h3>TypeScript Essentials: 5 Critical Keys to Using TypeScript Effectively</h3>
        
        <div className="section-padding">
        <button className="button button-info button-medium hover-grow">
          <a href={`${blogBaseUrl}/typescript-essentials-free-guide`}>Get Your FREE Guide</a>
        </button>
        </div>
      </div>
    </div>
  )
}

export default GetFree;
