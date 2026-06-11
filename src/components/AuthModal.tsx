import { useEffect, useState, type FormEvent, type MouseEvent } from "react";

type AuthTab = "login" | "register";

export default function AuthModal() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<AuthTab>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!showModal) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
      >
        Iniciar sesión / Registrarme
      </button>

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
          onClick={handleBackdropClick}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl ring-1 ring-slate-900/5 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="auth-modal-title"
                  className="text-2xl font-semibold text-slate-900"
                >
                  {activeTab === "login" ? "Iniciar sesión" : "Registrarme"}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Usa tu correo y contraseña para continuar.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Cerrar modal"
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                ×
              </button>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-100 p-1">
              <div className="flex gap-1 rounded-2xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    activeTab === "login"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:bg-white/80"
                  }`}
                >
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    activeTab === "register"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:bg-white/80"
                  }`}
                >
                  Registrarme
                </button>
              </div>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              {activeTab === "register" ? (
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">
                    Nombre
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Tu nombre completo"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </label>
              ) : null}

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Correo electrónico
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Contraseña
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  required
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-3xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                {activeTab === "login" ? "Ingresar" : "Crear cuenta"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
