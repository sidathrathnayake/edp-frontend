import clsx from "clsx";
import { COLOR_PALETTE } from "@constants/color.constants";
import { IInputFieldStyles } from "@services/interfaces";
import { getColor } from "../../helpers/common.helpers";

interface IInputField {
  id: string;
  name: string;
  label: string;
  value: any;
  error?: string;
  customStyles?: IInputFieldStyles;
  disabled?: boolean;
  handleChangeInput: (value: any) => void;
}

const InputField = ({
  id,
  name,
  label,
  value,
  error,
  customStyles,
  disabled,
  handleChangeInput,
}: IInputField) => {
  const textColor = customStyles?.textColor || COLOR_PALETTE.GRAY;

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={(e) => handleChangeInput(e.target.value)}
          className={clsx(
            `peer w-full bg-transparent`,
            `placeholder:${getColor({type: "text", color: textColor, shade: "400"})} `,
            `placeholder:opacity-0`,
            `text-sm ${getColor({type: "text", color: textColor, shade: "700"})} `,
            `border `,
            getColor({type: "border", color: textColor, shade: "200"}),
            `rounded-lg px-3 py-2 transition duration-300 ease `,
            `focus:outline-none focus:${getColor({type: "border", color: textColor, shade: "400"})} `,
            `hover:${getColor({type: "border", color: textColor, shade: "300"})} `,
            `shadow-sm focus:shadow `,
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        />
        <label
          htmlFor={id}
          className={clsx(
            `absolute cursor-text bg-white px-1 left-2.5 top-2.5 `,
            `${getColor({type: "text", color: textColor, shade: "400"})} `,
            `text-sm transition-all transform origin-left `,
            `peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs `,
            `peer-focus:${getColor({type: "text", color: textColor, shade: "400"})} `,
            `peer-focus:scale-90`
          )}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

InputField.displayName = "InputField";
export default InputField;
