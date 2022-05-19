import React from "react";
import Notice from "../../components/Notice/Notice";
import { HomeData } from "./HomeData";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-10">
          {
            HomeData.map((val)=>{
              return <Notice
              community={val.community} 
              sender={val.sender} 
              content={val.content} 
              reaction={val.reaction} 
              src={val.src}
              />
            })
          
          }
        </div>
      </div>
    </>
  );
};

export default Home;
