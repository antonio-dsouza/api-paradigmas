import { Request, Response } from "express";
import { GetAllTransactionsService } from "../services/GetAllTransactionsService";

class GetAllTransactionsController {
    async handle(request: Request, response: Response) {
        const getAllTransactionsService = new GetAllTransactionsService();
    
        const results = await getAllTransactionsService.execute();
    
        return response.json(results);
    }
}

export { GetAllTransactionsController }