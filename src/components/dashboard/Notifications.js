import React from "react";
import moment from "moment";

const Notifications = props => {
  //
  const { notifications } = props;

  return (
    <>
      <h2>Notifications</h2>
      <ul>
        {notifications &&
          notifications.map(notification => {
            return (
              <li
                key={notification.id}
                style={{ listStyle: "none", marginBottom: "0.1rem" }}
              >
                <span style={{ color: "pink" }}>{notification.content} </span>
                <span style={{ color: "black" }}>{notification.user} </span>
                <div style={{ color: "grey" }}>
                  {moment(notification.time.toDate()).fromNow()}
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Notifications;
