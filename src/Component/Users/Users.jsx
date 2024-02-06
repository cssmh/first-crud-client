import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Users = () => {
  let count = 0;
  const loadData = useLoaderData();
  const [allUser, setAllUser] = useState(loadData);

  const handleDelete = (idx) => {
    console.log("delete", idx);
    fetch(`http://localhost:5000/users/${idx}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterData = allUser.filter((soloData) => soloData._id !== idx);
        setAllUser(filterData);
        if (data.deletedCount > 0) {
          alert("User deleted successfully");
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <p className="text-center my-4 font-semibold text-xl">
        Total Users {allUser.length}
      </p>
      <div className="text-center">
        {allUser.map((data) => (
          <p key={data._id}>
            {(count += 1)}. {data.name} : {data.email},{" "}
            <span className="text-green-500">{data._id}</span>{" "}
            <button
              onClick={() => handleDelete(data._id)}
              className="btn btn-accent text-white"
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
