import { useState } from "react";


function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const [avatar, setAvatar] = useState(
    user?.avatar || ""
  );


  const avatars = [
    "👩‍🍳",
    "🧑‍💻",
    "🍕",
    "😊",
    "👨‍🍳",
    "🥗",
  ];


  const selectAvatar = (item) => {

    setAvatar(item);

    const updatedUser = {
      ...user,
      avatar: item,
    };


    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

  };



  return (

    <div className="min-h-screen bg-orange-50 px-8 py-10">


      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">


        <h1 className="text-3xl font-bold mb-6">
          My Profile 👤
        </h1>



        <div className="text-center mb-6">


          <div className="text-7xl">

            {avatar || "🙂"}

          </div>


        </div>



        <h2 className="text-xl font-bold">
          {user?.name}
        </h2>


        <p className="mt-2">
          📞 {user?.phone}
        </p>


        <p>
          📧 {user?.email}
        </p>



        <h3 className="text-xl font-bold mt-8 mb-4">
          Choose Avatar
        </h3>



        <div className="flex gap-4 text-4xl">


          {
            avatars.map((item)=>(
              
              <button
                key={item}
                onClick={() => selectAvatar(item)}
                className="hover:scale-125 transition"
              >

                {item}

              </button>

            ))
          }


        </div>



      </div>


    </div>

  );

}


export default Profile;