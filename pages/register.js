import Layout from "../layout/Layout";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import login_validate from "../lib/validate";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { useState } from "react";
import { useFormik } from "formik";
const register = () => {
  const [show, setShow] = useState({ password: false, cfpassword: false });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cfpassword: "",
    },

    onSubmit,
  });
  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <Layout>
        <section className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4">
            <h1 className=" font-bold text-center text-3xl text-blue-800">
              REGISTER
            </h1>
            <form
              className="flex flex-col gap-y-4 "
              onSubmit={formik.handleSubmit}
            >
              <div className="flex justify-center items-center bg-slate-300 rounded-md">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  className={styles.inputGroup}
                  {...formik.getFieldProps("username")}
                />
                <span>
                  <AiOutlineUser />
                </span>
              </div>
              <div className="flex justify-center items-center bg-slate-300 rounded-md">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.inputGroup}
                  {...formik.getFieldProps("email")}
                />
                <span>
                  <AiOutlineMail />
                </span>
              </div>
              <div className="flex justify-center items-center bg-slate-300 rounded-md">
                <input
                  type={`${show.password ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className={styles.inputGroup}
                  {...formik.getFieldProps("password")}
                />
                <span
                  onClick={() => setShow({ ...show, password: !show.password })}
                >
                  {show.password ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
              <div className="flex justify-center items-center bg-slate-300 rounded-md">
                <input
                  type={`${show.cfpassword ? "text" : "password"}`}
                  name="cfpassword"
                  placeholder="Confirm Password"
                  className={styles.inputGroup}
                  {...formik.getFieldProps("cfpassword")}
                />
                <span
                  onClick={() =>
                    setShow({ ...show, cfpassword: !show.cfpassword })
                  }
                >
                  {show.cfpassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </div>
              <button
                type="submit"
                className=" bg-blue-800 p-2 rounded text-white text-xl"
              >
                Register
              </button>
              <button
                type="submit"
                className=" p-2 rounded flex justify-center items-center gap-x-2"
              >
                Sign Up with Google
                <FcGoogle />
              </button>
              <button
                type="submit"
                className=" p-2 rounded flex justify-center items-center gap-x-2"
              >
                Sign Up with Github
                <AiFillGithub />
              </button>
            </form>
            {/* Link */}
            <p className="text-center">
              Have an account?
              <Link href={"/login"} className="text-blue-800">
                Sign In
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default register;
