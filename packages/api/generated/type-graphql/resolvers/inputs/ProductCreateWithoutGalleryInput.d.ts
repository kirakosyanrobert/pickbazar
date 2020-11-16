import { AuthorCreateOneWithoutProductInput } from "../inputs/AuthorCreateOneWithoutProductInput";
import { CategoryCreateManyWithoutProductInput } from "../inputs/CategoryCreateManyWithoutProductInput";
import { MetaCreateOneWithoutProductInput } from "../inputs/MetaCreateOneWithoutProductInput";
export declare class ProductCreateWithoutGalleryInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    slug: string;
    title: string;
    description: string;
    unit: string;
    image: string;
    price: number;
    salePrice: number;
    discountInPercent: number;
    per_unit: number;
    quantity: number;
    views?: number | undefined;
    sales?: number | undefined;
    type: "BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY";
    author?: AuthorCreateOneWithoutProductInput | undefined;
    meta?: MetaCreateOneWithoutProductInput | undefined;
    categories?: CategoryCreateManyWithoutProductInput | undefined;
}
