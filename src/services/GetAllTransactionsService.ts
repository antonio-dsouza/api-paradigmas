import "dotenv";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { TransactionRepositoryLocal } from "../repositories/TransactionRepositoryLocal";

class GetAllTransactionsService {
    async execute(): Promise<any> {
        const transactionRepository = process.env.DADOS == "mysql" ? new TransactionRepository() : new TransactionRepositoryLocal();

        const result = await transactionRepository.getTransactions();

        return result;
    }
}

export { GetAllTransactionsService }