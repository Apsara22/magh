import React from "react";
import { useState } from "react";

export default function GoogleTabs() {
  const [currentTab, setCurrentTab] = useState("all");
  return (
    <>
    if()
      <div>
        <ul style={{ display: "flex", gap: "1rem", listStyleType: "none" }}>
          {/* <li onClick={()=>{setCurrentTab('all')}}>all</li>
          <li onClick={()=>{setCurrentTab('images')}}>images</li>
          <li onClick={()=>{setCurrentTab('videos')}}>videos</li> */}
          <li className={`cursor-pointer ${currentTab== tab ? "active-tab":""}` 
        onclick()}>
            
          </li>
        </ul>
      </div>
      -<div>
        <h2>All conents</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
      </div>
      <div>
        <h2>Image conents</h2>
        <img src="" alt="some image" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
      </div>
      <div>
        <h2>Video conents</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
      </div>
    </>
  );
}
