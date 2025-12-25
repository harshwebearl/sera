import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // UI-only login
        localStorage.setItem("adminToken", "demo-token");
        localStorage.setItem("adminUser", "Admin");

        navigate("/");
    };

    return (
        <div className="min-h-screen pt-20 flex items-start  md:items-center  justify-center bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-sm w-full max-w-sm"
            >
                <div className="flex items-center justify-center">

                    <Link to="/admin/dashboard" >
                        <img
                            src="/images/logo/sera-logo.png"
                            className="h-16 object-contain"
                            alt="Sera Water Logo"
                        />
                    </Link>
                </div>

                <h2 className="text-2xl font-heading font-bold mb-6 text-center text-textDark">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border px-4 py-2 rounded mb-6"
                />

                <button
                    type="submit"
                    className="bg-primary w-full py-2 rounded font-semibold"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
