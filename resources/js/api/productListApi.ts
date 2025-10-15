import axios from "axios";
import catchError from "../services/catchError";
import { ListApi, LoginApi, ProductModel } from "../app.types";

export async function productListApi() {
    try {


        const { data } = await axios.get<ListApi<ProductModel>>(`http://localhost:8080/api/products`);

        return data;

    } catch (error) {
        return catchError(error);
    }
}

export async function deleteProduct(id: number): Promise<ListApi<ProductModel>> {
    try {
        const { data } = await axios.delete<ListApi<ProductModel>>(`http://localhost:8080/api/products/${id}`);
        return data;
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
    }
}

export async function createProduct(){

    try{
        
        const { data } = await axios.post<ListApi<ProductModel>>(`http://localhost:8080/api/products`);
        return data;
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
    }
}