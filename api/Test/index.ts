import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const responseMessage = "Hello! This HTTP triggered function executed successfully."
    context.res = {
        // status: 200, /* Defaults to 200 */
        text: responseMessage
    };

};

export default httpTrigger;