"use client";
import Link from "next/link";
// Part 5: landing page starts
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
export default function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


const  handleLogin = async () => {
  try {
    // Sign in to Firebase with GitHub authentication
await gitHubSignIn();
  } catch (error) {
    console.log("Error during sign-in:", error);
    alert("Error during sign-in:", + (error?.message || ""));
  }
};

const handleLogout = async () => {
  try {
    // Sign out of Firebase
await firebaseSignOut();
  } catch (error) {
    console.log("Error during sign-out:", error);
    alert("Error during sign-out:", error);
  }
};
const displayName = user?.displayName || user?.email || "User";

return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* logged out state */}
      {!user && (
        <>
          <h1 className="text-4xl font-bold mb-6">
            Week 10 - Shopping List Login
          </h1>

          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-blue-400 font-bold text-white rounded hover:bg-blue-700 transition"
          >
            Sign in with GitHub
          </button>
        </>
      )}

      {/* logged in state */}
      {user && (
        <>
          <h1 className="text-4xl font-bold mb-6">
            Welcome, {displayName}
          </h1>
          <div>
          <p>Your email is {user.email}. Here is your image:</p>
          <img src={user.photoURL} alt={user.displayName}/>
          </div>
          
          <div className="flex flex-col items-center">
            <button
              onClick={handleLogout}
              className="mb-4 px-6 py-3 bg-yellow-500 font-bold text-white rounded hover:bg-yellow-700 transition"
            >
              Sign Out
            </button>
            <Link
              href="/week-10/shopping-list"
              className="px-6 py-3 bg-green-500 font-bold text-white rounded hover:bg-green-700 transition"
            >
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </div>
  );
}   
