import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadData = useLoaderData();
  //   console.log(loadData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userUpdateInfo = { name, email };
    // console.log(userUpdateInfo);

    fetch(`http://localhost:5000/update/${loadData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Update ${loadData.name} info success`);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">
        Update Information of {loadData?.name}
      </h1>
      <div className="p-4 text-center">
        <form onSubmit={handleUpdate}>
          <input
            className="border-2 mb-1 pl-1 rounded-md"
            type="text"
            name="name"
            defaultValue={loadData?.name}
            id="1"
          />
          <br />
          <input
            className="border-2 pl-1 rounded-md"
            type="email"
            defaultValue={loadData.email}
            name="email"
            id="2"
          />
          <br />
          <input
            className="btn btn-secondary mt-1"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
