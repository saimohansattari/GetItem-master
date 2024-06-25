import {v4 as uuidv4} from 'uuid';

export const UniqIed = (products: any[]) => {
    return products.map((product: any) => ({...product, id: uuidv4()}));
}