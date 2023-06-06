import fs from 'fs';

interface ITransaction {
  id?: Number;
  description: String;
  value: Number;
  category: String;
  action: String;
  date: String;
}

interface ITransactionDelete {
  id?: Number;
}

let transactions: ITransaction[] = [];
let lastTransactionId = 0;

class TransactionRepositoryLocal {
  transactionsFilePath = 'transactions.json';

  async saveTransaction({ description, value, category, action, date }: ITransaction): Promise<string> {
    const newTransaction: ITransaction = {
      id: ++lastTransactionId,
      description,
      value,
      category,
      action,
      date,
    };

    transactions.push(newTransaction);
    await this.saveTransactionsToFile();
    return 'Transaction created';
  }

  async updateTransaction({ description, value, category, action, date, id }: ITransaction): Promise<string> {
    const transaction = transactions.find((t) => t.id === id);
    if (transaction) {
      transaction.description = description;
      transaction.value = value;
      transaction.category = category;
      transaction.action = action;
      transaction.date = date;
      await this.saveTransactionsToFile();
      return 'Transaction updated';
    }

    return 'Transaction not found';
  }

  async deleteTransaction({ id }: ITransactionDelete): Promise<string> {
    const index = transactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
      await this.saveTransactionsToFile();
      return 'Transaction deleted';
    }

    return 'Transaction not found';
  }

  async getTransactions(): Promise<ITransaction[]> {
    await this.loadTransactionsFromFile();
    return transactions;
  }

  private async saveTransactionsToFile(): Promise<any> {
    try {
      await fs.promises.writeFile(
        this.transactionsFilePath,
        JSON.stringify(transactions, null, 2)
      );
    } catch (error) {
      return 'Error saving transactions to file: ' + error;
    }
  }

  private async loadTransactionsFromFile(): Promise<any> {
    try {
      const fileContent = await fs.promises.readFile(this.transactionsFilePath, 'utf8');
      transactions = JSON.parse(fileContent);
      lastTransactionId = transactions.length;
    } catch (error) {
      return 'Error loading transactions from file:' + error;
    }
  }
}

export { TransactionRepositoryLocal };