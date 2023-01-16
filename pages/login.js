import Head from "next/head";
import Layout from "../layout/Layout";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { Formik, useFormik } from "formik";
import login_validate from "../lib/validate";
const login = () => {
  const [show, setShow] = useState(false);

  // Using formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  console.log(formik.errors);
  // const onSubmit = async (values) => {
  //   console.log(values);
  // };
  async function onSubmit(values) {
    console.log(values);
  }

  // Google handle signIn
  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "https://localhost:3000" });
  };

  // GitHub handle signIn
  const handleGitHubSignIn = async () => {
    signIn("github", { callbackUrl: "https://localhost:3000" });
  };
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <section className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4">
            <h1 className=" font-bold text-center text-3xl text-blue-800">
              LOGIN
            </h1>
            <form
              className="flex flex-col gap-y-4 "
              onSubmit={formik.handleSubmit}
            >
              <div className="flex justify-center items-center bg-slate-300 rounded-md">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.inputGroup}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <span>
                  <AiOutlineMail />
                </span>
              </div>
              <div className="flex justify-center items-center bg-slate-300 rounded-md">
                <input
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className={styles.inputGroup}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <span onClick={() => setShow(!show)}>
                  {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
              <button
                type="submit"
                className=" bg-blue-800 p-2 rounded text-white text-xl"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className=" p-2 rounded flex justify-center items-center gap-x-2"
              >
                Sign in with Google
                <FcGoogle />
              </button>
              <button
                type="button"
                onClick={handleGitHubSignIn}
                className=" p-2 rounded flex justify-center items-center gap-x-2"
              >
                Sign in with Github
                <AiFillGithub />
              </button>
            </form>
            {/* Link */}
            <p className="text-center">
              Don't have an account yet?
              <Link href={"/register"} className="text-blue-800">
                Sign Up
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default login;
