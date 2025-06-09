import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioSalvo = sessionStorage.getItem("usuario");
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
      setCarregando(false);
      return;
    }

    async function verificarSessao() {
      try {
        const res = await fetch("http://localhost:3001/api/auth/perfil", {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setUsuario(data);
          sessionStorage.setItem("usuario", JSON.stringify(data));
        } else {
          setUsuario(null);
        }
      } catch (err) {
        console.error("Erro ao verificar sessão:", err);
        setUsuario(null);
      } finally {
        setCarregando(false);
      }
    }

    verificarSessao();
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, carregando }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
