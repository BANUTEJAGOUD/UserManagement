
export interface Country {
    name?: string;
    code?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    verified?: boolean;
    balance?: number;
    canRead?: boolean;
    canWrite?: boolean;
    canExecute?: boolean;
}