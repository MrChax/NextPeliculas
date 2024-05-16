import "./users.css";
import User from "./User";

export default function UserList(props) {
  return (
    <ul className="users-list">
      {props.Users.map((user,index) => {
        return (
          <User
            key={index}
            Id={user["_id"]}
            Title={user.title}
            Picture={user.poster}
            FullPlot={user.fullplot}
          />
        );
      })}
    </ul>
  );
}
