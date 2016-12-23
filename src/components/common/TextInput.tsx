import {FormEvent} from "react";

interface ITextInput {
  name: string;
  label: string;
  onChange: (e: FormEvent)=>void
  placeholder?: string
  value?: any;
  error?: string;
  disabled?: boolean;
  help?: string;
}

export const TextInput = ({name, label, onChange, placeholder, value, error, disabled, help}:ITextInput) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div class={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div class="field">
        <input
          disabled={disabled}
          type="text"
          name={name}
          class="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div class="alert alert-danger">{error}</div>}
        {help && <span id="helpBlock" class="help-block">{help}</span>}
      </div>
    </div>
  );
};
