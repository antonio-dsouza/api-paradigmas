import { Request, Response } from "express";
import { DeleteTransactionService } from "../services/DeleteTransactionService";

class DeleteTransactionController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;

        const deleteTransactionService = new DeleteTransactionService();
    
        const results = await deleteTransactionService.execute({ id });
    
        return response.json(results);
    }
}

export { DeleteTransactionController }