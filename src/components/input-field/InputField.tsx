import clsx from "clsx";
import {
  COLOR_TEXT_FIELD_INPUT,
  COLOR_TEXT_FIELD_BORDER,
  COLOR_TEXT_FIELD_ERROR_BORDER,
  COLOR_TEXT_FIELD_PLACE_HOLDER,
  COLOR_TEXT_FIELD_FOCUS_BORDER,
  COLOR_TEXT_FIELD_HOVER_BORDER,
  COLOR_TEXT_FIELD_LABEL,
  COLOR_TEXT_FIELD_FOCUS_LABEL,
} from "@constants/color.constants";

interface IInputField {
  id: string;
  name: string;
  label: string;
  value: any;
  error?: string;
  disabled?: boolean;
  handleChangeInput: (value: any) => void;
}

const InputField = ({
  id,
  name,
  label,
  value,
  error,
  disabled,
  handleChangeInput,
}: IInputField) => {
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
            `peer w-full bg-transparent placeholder:${COLOR_TEXT_FIELD_PLACE_HOLDER}`,
            `text-sm ${COLOR_TEXT_FIELD_INPUT}`,
            `border ${
              error ? COLOR_TEXT_FIELD_ERROR_BORDER : COLOR_TEXT_FIELD_BORDER
            }`,
            `rounded-lg px-3 py-2 transition duration-300 ease `,
            `focus:outline-none focus:${COLOR_TEXT_FIELD_FOCUS_BORDER}`,
            `hover: ${COLOR_TEXT_FIELD_HOVER_BORDER}`,
            `shadow-sm focus:shadow `
          )}
        />
        <label
          htmlFor={id}
          className={clsx(
            `absolute cursor-text bg-white px-1 left-2.5 top-2.5 `,
            `${COLOR_TEXT_FIELD_LABEL} text-sm transition-all transform origin-left `,
            `peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:${COLOR_TEXT_FIELD_FOCUS_LABEL} peer-focus:scale-90`
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
