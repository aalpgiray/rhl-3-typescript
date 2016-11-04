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
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          disabled={disabled}
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
        {help && <span id="helpBlock" className="help-block">{help}</span>}
      </div>
    </div>
  );
};
