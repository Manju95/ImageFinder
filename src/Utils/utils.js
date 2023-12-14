import { errorTexts } from "../Data/data";

export const getApiResponse = (statusCode) => {
    var apiResponse = new ApiResponse();
    switch (statusCode) {
        case 404:   apiResponse.statusCode = 404;
                    apiResponse.statusMessage = errorTexts.notFoundText;
                    apiResponse.responseData = null;
            break;
        case 500:
                    apiResponse.statusCode = 500;
                    apiResponse.statusMessage = errorTexts.internalServerErrorText;
                    apiResponse.responseData = null;
            break;
        case 403:
                    apiResponse.statusCode = 403;
                    apiResponse.statusMessage = errorTexts.unauthorisedText;
                    apiResponse.responseData = null;    
            break;
        default:
                    apiResponse.statusCode = 0;
                    apiResponse.statusMessage = errorTexts.generalText;
                    apiResponse.responseData = null;
            break;
    }

    return apiResponse;
}

export function ApiResponse(statusCode,message,responseData) {
    this.statusCode = statusCode;
    this.statusMessage = message;
    this.responseData = responseData;
}