import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
        <div  class="bg-sky-300 ...">
          <img class="object-fill h-30 w-60 " src="https://i.ibb.co/0cMzXsp/png-clipart-human-resource-management-system-time-and-attendance-service-employees-international-uni.png" />
        </div>
        </NavLink>


        <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
          Employee Management System (CRUD MERN Full Stack)
        </h2>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}