import React from "react";

const User = ({ user }) => {
  const { avatar, first_name, last_name, email, id } = user;
  return (
    <div className="">
      <div class="row row-cols-1 row-cols-md-2 gx-3 gy-5">
        <div class="col">
          <div class="card">
            <img src={avatar} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                {first_name} {last_name}
              </h5>
              <p class="card-text">{email}</p>
              <p className="card-text">Id:{id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
