import { ItemsService } from "@/client/services/ItemsService";

// OpenAPIをベースに自動生成したコードの検証ファイル
export async function main() {
  const response = await ItemsService.createItemItemsPost({
    requestBody: 
      {
        name: "pen",
        price: 100
      }
  });
  return response;
}
