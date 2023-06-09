import { Request, Response } from "express";
import { UpdateTransactionService } from "../services/UpdateTransactionService";

class UpdateTransactionController {
    async handle(request: Request, response: Response) {
        const { description, value, category, action, date, id } = request.body;

        const updateTransactionService = new UpdateTransactionService();
    
        const results = await updateTransactionService.execute({ description, value, category, action, date, id });
    
        return response.json(results);
    }
}

export { UpdateTransactionController }