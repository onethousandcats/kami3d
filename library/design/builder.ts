export type Builder<T> = {
    [k in keyof T]-?: (arg: T[k]) => Builder<T>;
} & {
    build(): T;
};

export function ModelBuilder<T>(): Builder<T> {
    const built: Record<string, unknown> = {};
    const builder = new Proxy(
        {},
        {
            get(target, prop) {
                if ("build" === prop) {
                    return () => built;
                }

                return (x: unknown): unknown => {
                    built[prop.toString()] = x;
                    return builder;
                };
            },
        }
    );

    return builder as Builder<T>;
}

export interface User {
    id: number;
    name: string;
    email: string;
}