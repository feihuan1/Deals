'use Server'
import { scrapeAmazonProduct } from "../scraper";

 


export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return ; 

    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl)
        
    } catch (error: any) {
        throw new Error(`failed to create/update product: ${error.massage}`)
    }

}