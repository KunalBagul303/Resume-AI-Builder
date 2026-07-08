import React from 'react'
import {Lock, Mail , User2Icon} from 'lucide-react'

const Login = () => {

    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState( urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
       <div className="min-h-screen bg-gradient-to-br from-[#0caf04ef] via-[#ffffff] to-[#099509] flex items-center justify-center px-4">
    <form
        onSubmit={handleSubmit}
        className="sm:w-[400px] w-full text-center bg-white/70 backdrop-blur-lg border border-green-200 rounded-3xl px-8 py-2 shadow-2xl shadow-green-200/50"
    >
        <h1 className="text-green-900 text-3xl mt-8 font-bold">
            {state === "login" ? "Login" : "Sign Up"}
        </h1>

        <p className="text-green-700 text-sm mt-2">
            Please {state} to continue
        </p>

        {state !== "login" && (
            <div className="flex items-center mt-6 w-full bg-white border border-green-200 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-emerald-500 transition">
                <User2Icon size={16} color="#22C55E" />

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-transparent text-green-900 placeholder-green-500 border-none outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white border border-green-200 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-emerald-500 transition">
            <Mail size={15} color="#22C55E" />

            <input
                type="email"
                name="email"
                placeholder="Email id"
                className="w-full bg-transparent text-green-900 placeholder-green-500 border-none outline-none"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-green-200 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-emerald-500 transition">
            <Lock size={15} color="#22C55E" />

            <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-transparent text-green-900 placeholder-green-500 border-none outline-none"
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>

        <div className="mt-4 text-left">
            <button
                type="button"
                className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
            >
                Forgot password?
            </button>
        </div>

        <button
            type="submit"
            className="mt-3 w-full h-12 rounded-full text-white font-medium bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-300"
        >
            {state === "login" ? "Login" : "Sign Up"}
        </button>

        <p
            onClick={() =>
                setState((prev) =>
                    prev === "login" ? "register" : "login"
                )
            }
            className="text-green-700 text-sm mt-4 mb-8 cursor-pointer"
        >
            {state === "login"
                ? "Don't have an account?"
                : "Already have an account?"}

            <span className="text-emerald-600 font-semibold hover:underline ml-1">
                Click here
            </span>
        </p>
    </form>
</div>
    )
}

export default Login