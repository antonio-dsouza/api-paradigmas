import "dotenv";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { TransactionRepositoryLocal } from "../repositories/TransactionRepositoryLocal";

interface IRequest {
    description: String;
    value: Number;
    category: String;
    action: String;
    date: String;
}

class CreateNewTransactionService {
    async execute({ description, value, category, action, date }: IRequest): Promise<String> {
        const transactionRepository = process.env.DADOS == "mysql" ? new TransactionRepository() : new TransactionRepositoryLocal();

        const result = await transactionRepository.saveTransaction({ description, value, category, action, date });

        return result;
    }
}

export { CreateNewTransactionService }