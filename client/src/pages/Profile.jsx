import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [avatar, setAvatar] = useState(user?.avatar || "");

  const avatars = [
    "👩‍🍳",
    "🧑‍💻",
    "👨‍🍳",
    "😊",
    "🍕",
    "🍔",
    "🥗",
    "🍜",
  ];

  const selectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);

    const updatedUser = {
      ...user,
      avatar: selectedAvatar,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-6">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-orange-500 text-white text-center py-8">

          <div className="text-7xl">
            {avatar || "🙂"}
          </div>

          <h1 className="text-3xl font-bold mt-4">
            {user?.name}
          </h1>

          <p className="mt-2 opacity-90">
            {user?.email}
          </p>

        </div>

        {/* Account Details */}
        <div className="p-8">

          <h2 className="text-2xl font-bold mb-6">
            Account Information
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">
                Name
              </span>

              <span>
                {user?.name}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">
                Email
              </span>

              <span>
                {user?.email}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">
                Phone
              </span>

              <span>
                {user?.phone || "Not Added"}
              </span>
            </div>

          </div>

          {/* Avatar Selection */}
          <h2 className="text-2xl font-bold mt-10 mb-5">
            Choose Your Avatar
          </h2>

          <div className="grid grid-cols-4 gap-4">

            {avatars.map((item) => (

              <button
                key={item}
                onClick={() => selectAvatar(item)}
                className={`text-5xl p-3 rounded-2xl transition hover:scale-110 ${
                  avatar === item
                    ? "bg-orange-200 border-2 border-orange-500"
                    : "bg-gray-100"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* Quick Actions */}
          <div className="mt-10 space-y-4">

            <button
              onClick={() => navigate("/my-orders")}
              className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600"
            >
              📦 My Orders
            </button>

            <button
              className="w-full bg-gray-100 py-3 rounded-xl hover:bg-gray-200"
            >
              📍 Saved Addresses
            </button>

            <button
              className="w-full bg-gray-100 py-3 rounded-xl hover:bg-gray-200"
            >
              ❤️ Wishlist
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;