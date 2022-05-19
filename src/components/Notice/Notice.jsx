import React from "react";

const Notice = (props) => {
  return (
    <>
      <div class="card bg-dark-light-b mb-3">
        <div className="card-header">
          <img
            src={props.src}
            class="rounded feed-profile-img"
            alt="..."
          />
          <span class="card-title ms-3">{props.community}-{props.sender}</span>
        </div>
        <div class="card-body">
          <p class="card-text">
          {props.content}
          </p>
        </div>
        <div className="card-footer p-2 m-0">
          <div className="row">
            <div className="col">
              <div>
                <a className="text-light border-0 me-1" href="/add-like">
                  <i class="fa-solid fa-thumbs-up"></i>
                </a>
                <span>
                {props.reaction}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
