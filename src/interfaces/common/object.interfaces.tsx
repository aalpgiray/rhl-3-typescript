export interface Dictionary<T> {
    [key: string]: T;
}

export interface KeyValuePair<TKey,TValue>{
    Key:TKey;
    Value:TValue;
}