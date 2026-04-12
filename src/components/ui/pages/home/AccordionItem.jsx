import React from "react";
import { useTranslation } from "react-i18next";
import { BsPlus, BsDash } from "react-icons/bs";

const AccordionItem = ({
  question,
  answer,
  list,
  hint,
  isOpen,
  onClick,
  type,
}) => {
  const { t } = useTranslation("global");
  return (
    <div className={`w-full flex flex-col gap-4 bg-gray-100 p-4 rounded-lg`}>
      {/* Question */}
      <div
        onClick={onClick}
        className={`flex flex-row justify-between items-center w-full cursor-pointer`}
      >
        <span>{t(question)}</span>

        <div
          className={`w-6 h-6 flex items-center justify-center bg-fifth-color text-white rounded-md`}
        >
          {isOpen ? (
            <BsDash className={`transition-all duration-150 ease-in`} />
          ) : (
            <BsPlus className={`transition-all duration-150 ease-in`} />
          )}
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? `max-h-40 opacity-100` : `max-h-0 opacity-0`
        }`}
      >
        <div className={`w-full h-[0.5px] my-2 bg-gray-200`}></div>

        {type === "text" && <p className={`text-sm text-black`}>{t(answer)}</p>}

        {type === "list" && (
          <div className={`flex flex-col gap-2`}>
            {list?.map((ele, index) => (
              <p className={`text-sm text-black`} key={index}>
                {t(ele)}
              </p>
            ))}
            <span>{t(hint)}</span>
          </div>
        )}

        {type === "jsx" && <>{answer}</>}
      </div>
    </div>
  );
};

export default AccordionItem;
