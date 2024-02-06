import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

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
        if (data.deletedCount > 0) {
          toast.success("User deleted successfully");
          const filterData = allUser.filter((soloData) => soloData._id !== idx);
          setAllUser(filterData);
        }
      });
  };

  return (
    <div>
      <p className="text-center my-4 font-semibold text-xl">
        Total Users {allUser.length}
      </p>
      <div className="text-center">
        {allUser.map((data) => (
          <p key={data._id}>
            {(count += 1)}. {data.name} : {data.email},{" "}
            <span className="text-green-500">{data._id}</span>{" "}
            <Link to={`/update/${data._id}`}>
              <button className="btn btn-secondary mr-1">Update</button>
            </Link>
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
