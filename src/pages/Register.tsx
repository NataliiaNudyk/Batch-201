// import { registerUser } from "../utils/api";


const Register = () => {
// const handleRegister = async () => {
//     try {
//       const newUser = await registerUser({
//         email: "eve.holt@reqres.in",
//         password: "pistol",
//       });
//       console.log("✅ Зареєстровано:", newUser);
//     } catch (error) {
//       console.error("❌ Помилка реєстрації:", error);
//     }
//   };
  return (
    <div className="flex flex-col justify-center items-center">
      <form action="" className="w-[350px] bg-[#a3bce6] p-10" method="get">
        <label htmlFor="" className="flex flex-col" >
          First Name
          <input type="text" className="bg-white rounded " />
        </label>
        <label htmlFor="" className="flex flex-col" >
          Last Name
          <input type="text" className="bg-white rounded " />
        </label>
        <label htmlFor="" className="flex flex-col" >
          Email
          <input type="email" className="bg-white rounded " />
        </label>
        <label htmlFor="" className="flex flex-col" >
          Password
          <input type="password" className="bg-white rounded " />
        </label>
        <label htmlFor="" className="flex flex-col" >
          Comfirm Password
          <input type="password" className="bg-white rounded " />
        </label>
        <button  className="w-full h-10 text-white bg-[#2368d9] mt-5">Register Now</button>
      </form>
    </div>
  )
}

export default Register