export type OperationType = 'saque' | 'deposito' | 'transferencia'

export interface GetTransactionTypes {
  value: OperationType
  display: string
}

export interface TransactionTypes {
  getTransactionTypes: GetTransactionTypes[]
}