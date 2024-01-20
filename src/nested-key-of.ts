type KeyValueObject = Record<string, any>;
type PrimitiveValue = undefined | null | number | boolean | string | bigint | symbol;
type IndexPattern = `[${number}]`;

type Path<T> = T extends ReadonlyArray<infer V> ? PathItem<IndexPattern, V> : { [K in keyof T]-?: PathItem<K & string, T[K]>; }[keyof T];

type PathItem<K extends string | number, V> = V extends PrimitiveValue ? `${K}` : `${K}` | `${K}.${Path<V>}`;

export type NestedKeyOf<T extends KeyValueObject> = Path<T>;
