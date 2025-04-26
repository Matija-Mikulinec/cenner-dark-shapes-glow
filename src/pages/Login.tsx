
import React from "react";

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-full max-w-md bg-card/80 p-8 rounded-xl shadow-xl border border-card">
      <h1 className="text-3xl font-bold mb-6">Prijava</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-background/60 border border-input text-base"/>
        <input type="password" placeholder="Lozinka" className="w-full px-4 py-3 rounded-md bg-background/60 border border-input text-base"/>
        <button
          type="submit"
          className="w-full bg-cenner hover:bg-cenner-dark text-white font-semibold py-3 rounded-md transition"
        >
          Prijavi se
        </button>
      </form>
      <p className="mt-6 text-sm text-gray-400 text-center">
        Nemate račun? <a href="/register" className="text-cenner hover:underline">Registrirajte se</a>
      </p>
    </div>
  </div>
);

export default Login;
