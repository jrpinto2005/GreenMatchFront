import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="relative flex h-screen w-full flex-col justify-center items-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mb-12">
          <span className="material-symbols-outlined text-7xl text-[#22c55e]">potted_plant</span>
          <h1 className="text-4xl font-bold text-gray-200 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>GreenMatch</h1>
          <p className="text-gray-400 mt-2">Bienvenido de nuevo</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">person</span>
            <input 
              className="form-input w-full rounded-xl border-gray-600 bg-[#27272a] h-14 pl-12 pr-4 text-base placeholder:text-gray-400 focus:ring-[#22c55e] focus:border-[#22c55e] text-gray-200" 
              placeholder="Usuario o Correo" 
              type="text" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">lock</span>
            <input 
              className="form-input w-full rounded-xl border-gray-600 bg-[#27272a] h-14 pl-12 pr-4 text-base placeholder:text-gray-400 focus:ring-[#22c55e] focus:border-[#22c55e] text-gray-200" 
              placeholder="Contraseña" 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <a className="block text-right text-sm text-[#22c55e] hover:underline" href="#">¿Olvidaste tu contraseña?</a>
          <button className="w-full rounded-xl h-14 bg-[#22c55e] text-white text-lg font-semibold tracking-wide shadow-sm hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-all duration-300" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-8 text-sm text-gray-400">¿No tienes una cuenta? <a className="font-medium text-[#22c55e] hover:underline" href="#">Regístrate</a></p>
      </div>
    </div>
  );
};

export default Login;
