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

const transactions: ITransaction[] = [];
let lastTransactionId = 0;

class TransactionRepositoryLocal {
    async saveTransaction({ description, value, category, date }: ITransaction): Promise<any> {
        const newTransaction = {
            id: ++lastTransactionId,
            description,
            value,
            category,
            date
        }
        
        transactions.push(newTransaction);

        return "Transaction created";
    }

    async updateTransaction({ description, value, category, date, id }: ITransaction): Promise<any> {
        const transaction = transactions.find((t) => t.id === id);
        if (transaction) {
            transaction.description = description;
            transaction.value = value;
            transaction.category = category;
            transaction.date = date;
            return "Transaction updated";
        }

        return "Transaction not found";
    }

    async deleteTransaction({ id }: ITransactionDelete): Promise<any> {
        const index = transactions.findIndex((t) => t.id === id);
        if (index !== -1) {
            transactions.splice(index, 1);
            return "Transaction deleted";
        }

        return "Transaction not found";
    }

    async getTransactions(): Promise<any> {
        return transactions;
    }
}

export { TransactionRepositoryLocal }