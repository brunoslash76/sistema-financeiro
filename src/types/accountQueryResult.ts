import { OperationType } from "./transactionTypes"

export interface Transaction {
  createdAt: string
  type: OperationType
  value: number
  _id: string
}

export interface Account {
  balance: number
  transactions: Transaction[]
}

export interface AccountQueryResult {
  account: Account
}
