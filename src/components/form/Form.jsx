import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Form = ({
  gridLayout = "grid-cols-1",
  fields = [],
  submit_label = "global.confirm",
  onSubmit,
  initial_values,
}) => {
  const { t } = useTranslation("global");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const handleFormSubmit = async (data) => {
    await onSubmit(data);

    reset();
  };

  useEffect(() => {
    if (initial_values) reset(initial_values);
  }, [initial_values, reset]);
  return (
    <form
      encType="multipart/form-data"
      className={`w-full flex flex-col gap-4`}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className={`w-full grid ${gridLayout} gap-8`}>
        {fields.map((field) => (
          <div
            key={field.name}
            className={`${field.width ? field.width : "w-full"} flex flex-col gap-2`}
          >
            {/* <label htmlFor={field.name} className={`text-black text-sm`}>
              {field.label}
            </label> */}
            {field.type === "text" && (
              <input
                type="text"
                {...register(field.name, field.validations)}
                id={field.name}
                placeholder={field.placeholder}
                className={`${errors[field.name] ? "border border-red-400" : ""} w-full p-3 border outline-none focus:outline-none rounded border-gray-200 text-sm placeholder:font-light text-second-color placeholder:text-gray-400 focus:border-footer-color transition-all duration-200 ease-in-out`}
              />
            )}
            {field.type === "textArea" && (
              <textarea
                {...register(field.name, field.validations)}
                id={field.name}
                placeholder={field.placeholder}
                className={`${errors[field.name] ? "border-red-400" : ""} w-full p-3 border outline-none focus:outline-none rounded border-gray-200 text-sm placeholder:font-light text-second-color placeholder:text-gray-400 focus:border-footer-color transition-all duration-200 ease-in-out`}
              ></textarea>
            )}

            {errors[field.name] && errors[field.name].message && (
              <span
                className={`text-red-400 text-xs flex flex-row items-center`}
              >
                * {errors[field.name].message}
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Buttons */}
      <div className={`w-full flex flex-row gap-2 flex-wrap items-center `}>
        <button
          className={`h-12 w-36 rounded-md bg-btn-confirm-color hover:bg-btn-color transition-all duration-200 ease-in-out cursor-pointer text-white font-medium text-sm`}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? t("global.submit_loading") : t(submit_label)}
        </button>
      </div>
    </form>
  );
};

export default Form;
