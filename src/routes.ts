import { Router } from "express";
import { CreateNewTransactionController } from "./controllers/CreateNewTransactionController";
import { GetAllTransactionsController } from "./controllers/GetAllTransactionsController";
import { UpdateTransactionController } from "./controllers/UpdateTransactionController";
import { DeleteTransactionController } from "./controllers/DeleteTransactionController";

const router = Router();

const getAllTransactionsController = new GetAllTransactionsController();
const createNewTransactionController = new CreateNewTransactionController();
const updateTransactionController = new UpdateTransactionController();
const deleteTransactionController = new DeleteTransactionController();

router.get('/get-transactions', getAllTransactionsController.handle);
router.post('/create-transaction', createNewTransactionController.handle);
router.delete('/delete-transaction', deleteTransactionController.handle);
router.put('/update-transaction', updateTransactionController.handle);

export { router };