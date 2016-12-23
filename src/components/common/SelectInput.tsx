import { FormEvent } from "react";
import { KeyValuePair } from '../../interfaces/common/object.interfaces';

interface ISelectInput {
    name: string;
    label: string;
    onChange: (e: FormEvent) => void;
    defaultOption: any;
    value: any;
    error?: string;
    options: KeyValuePair<string,string>[];
    disabled?: boolean;
}

export const SelectInput = ({name, label, onChange, defaultOption, value, error, options, disabled}: ISelectInput) => {
    return (
        <div class="form-group">
            <label htmlFor={name}>{label}</label>
            <div class="field">
                {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                <select
                    disabled={disabled}
                    name={name}
                    value={value}
                    onChange={onChange}
                    class="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map((option) => {
                        return <option key={Math.random()} value={option.Key}>{option.Value}</option>;
                    })
                    }
                </select>
                {error && <div class="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};