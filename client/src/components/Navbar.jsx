import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-md flex justify-between">
      <h1 className="font-bold text-xl text-blue-600">Smart Job Portal</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
        <Link to="/post-job" className="text-blue-600">Post Job</Link>
        <Link to="/login" className="text-blue-600">Login</Link>
        <Link to="/register" className="text-blue-600">Register</Link>
      </div>
    </nav>
  );
}
