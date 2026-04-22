"use client";
export default function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="p-4 m-2 bg-white rounded">
        <div className="p-2 m-2">
          <input type="text" placeholder="Email" />
        </div>
        <div className="p-2 m-2">
          <input type="password" placeholder="password" />
        </div>
        <button className="cursor-pointer p-2 m-2" onClick={() => {}}>{isSignin ? "Sign in" : "Sign up"}</button>
      </div>
    </div>
  );
}
