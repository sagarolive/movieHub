import axios from "axios";
import { useCallback, useState } from "react";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import Input from "@/components/Input";
import { Form, Formik } from "formik";

const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .required("User name is required")
    .max(100, "User name cannot be more than 100 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const LoginForm = () => {
  const router = useRouter();

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(
    async (email: any, password: any) => {
      try {
        await signIn("credentials", {
          email,
          password,
          redirect: false,
          callbackUrl: "/",
        }).then(({ ok, error }: any) => {
          if (ok) {
            toast.success("Successfully logged in.");
          } else {
            toast.error("Email or password doesnot match.");
          }
        });

        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [router]
  );

  const handleSubmit = async (values: any, formik: any) => {
    try {
      formik.setSubmitting(true);
      if (variant === "login") {
        await login(values["email"], values["password"]);
      } else {
        await axios
          .post("/api/register", {
            email: values["email"],
            name: values["userName"],
            password: values["password"],
          })
          .then(() => toast.success("User successfully registered."));

        login(values["email"], values["password"]);
      }

      router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      formik.setSubmitting(false);
    }
  };

  return (
    <>
      <div className=" w-96 h-96 bg-[#212529]">
        <div className="flex justify-center">
          <div className="w-full">
            <h2 className="text-white text-3xl mb-4 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <Formik
              initialValues={
                variant === "register"
                  ? {
                      email: "",
                      password: "",
                      userName: "",
                      confirmPassword: "",
                    }
                  : {
                      email: "",
                      password: "",
                    }
              }
              onSubmit={handleSubmit}
              validationSchema={
                variant === "login" ? loginSchema : registerSchema
              }
            >
              {({ isSubmitting, dirty, isValid, values }) => {
                console.log(values);
                const isDisabled = !(isValid && dirty) || isSubmitting;
                return (
                  <Form>
                    <div className="flex flex-col gap-10">
                      {variant === "register" && (
                        <Input
                          id="name"
                          type="text"
                          label="Username"
                          name="userName"
                        />
                      )}
                      <Input
                        id="email"
                        type="email"
                        label="Email address"
                        name="email"
                      />
                      <Input
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                      />
                      {variant === "register" && (
                        <Input
                          type="confirmPassword"
                          id="confirmPassword"
                          label="Confirm Password"
                          name="confirmPassword"
                        />
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isDisabled}
                      className={`bg-teal-500 py-3 text-white rounded-md w-full mt-10 hover:bg-teal-700 transition ${
                        isDisabled ? "bg-opacity-30" : "bg-opacity-95"
                      }`}
                    >
                      {variant === "login"
                        ? isSubmitting
                          ? "Logging in..."
                          : "Login"
                        : isSubmitting
                        ? "Signing up..."
                        : "Sign up"}
                    </button>
                  </Form>
                );
              }}
            </Formik>

            <p className="text-neutral-500 text-center mt-10 ">
              {variant === "login"
                ? "First time using movieHub? "
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? (
                  <span className="text-teal-400">Create an account</span>
                ) : (
                  <span className="text-teal-500">Login</span>
                )}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
