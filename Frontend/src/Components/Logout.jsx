import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      // document.getElementById("my_modal_3").close();
      setTimeout(() => {
        // toast.success("login Successfully");
        window.location.reload();
      }, 1000);
      // window.location.reload();
    } catch (error) {
      toast.error("error", error.message);
    }
  };
  return (
    <div>
      <button
        className=" px-3 py-2 bg-red-500 text-white rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
