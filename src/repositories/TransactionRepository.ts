import { createPool } from "mysql2/promise";
import { connect } from "../database/database"

interface ITransaction {
    id?: Number;
    description: String;
    value: Number;
    category: String;
    date: String;
}

interface ITransactionDelete {
    id?: Number;
}

class TransactionRepository {
    async saveTransaction({ description, value, category, date }: ITransaction): Promise<any> {
        const connection = await connect();

        const newTransaction = {
            description,
            value,
            category,
            date
        }
        
        const result = await connection.query('INSERT INTO transactions SET ?', [newTransaction]);

        return "Transaction created";
    }

    async updateTransaction({ description, value, category, date, id }: ITransaction): Promise<any> {
        const connection = await connect();

        const updatedTransaction = {
            description,
            value,
            category,
            date
        }
        
        const result = await connection.query('UPDATE transactions SET ? WHERE id = ?', [updatedTransaction, id]);

        return "Transaction updated";
    }

    async deleteTransaction({ id }: ITransactionDelete): Promise<any> {
        const connection = await connect();
        
        const result = await connection.query('DELETE FROM transactions WHERE id = ?', [id]);

        return "Transaction deleted";
    }

    async getTransactions(): Promise<any> {
        const connection = await connect();

        const result = await connection.query("SELECT * FROM transactions");

        return result[0];
    }
}

export { TransactionRepository }