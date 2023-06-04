import { Request, Response } from "express";
import { CreateNewTransactionService } from "../services/CreateNewTransactionService";

class CreateNewTransactionController {
    async handle(request: Request, response: Response) {
        const { description, value, category, date } = request.body;

        const createNewTransactionService = new CreateNewTransactionService();
    
        const results = await createNewTransactionService.execute({ description, value, category, date });
    
        return response.json(results);
    }
}

export { CreateNewTransactionController }