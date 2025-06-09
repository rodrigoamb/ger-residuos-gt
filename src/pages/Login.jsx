import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { usuario, setUsuario } = useAuth();

  // Redireciona se já estiver logado
  if (usuario) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, senha }),
    });

    if (res.ok) {
      const perfilRes = await fetch("http://localhost:3001/api/auth/perfil", {
        credentials: "include",
      });

      if (perfilRes.ok) {
        const userData = await perfilRes.json();
        setUsuario(userData);
        sessionStorage.setItem("usuario", JSON.stringify(userData));
        navigate("/dashboard");
      } else {
        alert("Login feito, mas não foi possível recuperar o perfil.");
      }
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="border p-2 mb-4"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Entrar
      </button>
    </div>
  );
}
