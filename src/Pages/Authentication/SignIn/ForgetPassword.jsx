import React from "react";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;

  const onSubmit = (data) => {};
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Change Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <p>
                  We will send you an email with further instructions on how to
                  reset your password.{" "}
                </p>
              </label>
              <div className="p-2"></div>
              <input
                type="email"
                placeholder="Enter your Email for reset password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-xs text-white"
              type="email"
              value="Send Email"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
