import Navbar from "../Component/Navbar/Navbar";

const MainLayout = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const getUser = { name, email };
    // console.log(getUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("user added successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-center text-3xl font-semibold mt-16">
          First Simple CRUD
        </h2>
        <div className="p-4 text-center">
          <form onSubmit={handleAddUser}>
            <input
              className="border-2 mb-1 pl-1"
              type="text"
              name="name"
              id="1"
              required
            />
            <br />
            <input
              className="border-2 pl-1"
              type="email"
              name="email"
              required
              id="2"
            />
            <br />
            <input className="btn mt-1" type="submit" value="Add User" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
