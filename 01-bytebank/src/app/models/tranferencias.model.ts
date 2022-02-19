
    export interface Transferencia {
        id?: number;
        valor: number;
        destino: string | number;
        data?: Date;
    }

    export interface RootObject {
        transferencia: Transferencia[];
    }

