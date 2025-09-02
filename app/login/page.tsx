"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useAuth } from "@/context/AuthContext";
import { LoginForm } from "@/components/login-form";
export default function Home() {
  const { user, loading } = useAuth();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        {user ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Welcome, {user.displayName}!
            </h1>
            <img
              src={user.photoURL || ""}
              alt="User avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-6">{user.email}</p>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </main>
  );
}
