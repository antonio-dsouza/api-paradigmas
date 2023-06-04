import "dotenv";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { TransactionRepositoryLocal } from "../repositories/TransactionRepositoryLocal";

interface IRequest {
    id: Number;
    description: String;
    value: Number;
    category: String;
    date: String;
}

class UpdateTransactionService {
    async execute({ description, value, category, date, id }: IRequest): Promise<String> {
        const transactionRepository = process.env.DADOS == "mysql" ? new TransactionRepository() : new TransactionRepositoryLocal();

        const result = await transactionRepository.updateTransaction({ description, value, category, date, id });

        return result;
    }
}

export { UpdateTransactionService }