import React from 'react';

function LoginForm() {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4">
                <h1 className="text-xl font-semibold text-center text-gray-700">Login</h1>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label" htmlFor="email">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input input-bordered w-full"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-control">
                    <label className="label" htmlFor="password">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input input-bordered w-full"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
  