"use client";
import Link from "next/link";
// Part 5: landing page starts
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
export default function Week9Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

const  handleLogin = async () => {
  try {
    // Sign in to Firebase with GitHub authentication
await gitHubSignIn();
  } catch (error) {
    console.log("Error during sign-in:", error);
    alert("Error during sign-in:", error);
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
      {/* 未登录状态 */}
      {!user && (
        <>
          <h1 className="text-4xl font-bold mb-6">
            Week 9 – Shopping List 登录
          </h1>
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-blue-400 font-bold text-white rounded hover:bg-blue-700 transition"
          >
            Sign in with GitHub
          </button>
        </>
      )}

      {/* 已登录状态 */}
      {user && (
        <>
          <h1 className="text-4xl font-bold mb-6">
            Welcome, {displayName}
          </h1>
          <div className="flex flex-col items-center">
            <button
              onClick={handleLogout}
              className="mb-4 px-6 py-3 bg-yellow-500 font-bold text-white rounded hover:bg-yellow-700 transition"
            >
              Sign Out
            </button>
            <Link
              href="/week-9/shopping-list"
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
