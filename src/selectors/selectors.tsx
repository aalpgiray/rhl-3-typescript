import { KeyValuePair } from '../interfaces/common/object.interfaces';

export function formatDataForDropDown<T>(
    data: T[],
    selectText: (data: T) => string,
    selectValue: (data: T) => string
): KeyValuePair<string, string>[] {
    return data.map(p => {
        return {
            Key: selectValue(p),
            Value: selectText(p)
        }
    })
}