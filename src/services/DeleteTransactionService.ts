import "dotenv";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { TransactionRepositoryLocal } from "../repositories/TransactionRepositoryLocal";

interface IRequest {
    id: Number;
}

class DeleteTransactionService {
    async execute({ id }: IRequest): Promise<String> {
        const transactionRepository = process.env.DADOS == "mysql" ? new TransactionRepository() : new TransactionRepositoryLocal();

        const result = await transactionRepository.deleteTransaction({ id });

        return result;
    }
}

export { DeleteTransactionService }