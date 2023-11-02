import axios from "axios";

export const getObjectName = async (objectURL: string) => {
  const response = await axios.get(objectURL);
  return response.data.name;
};

export const getObjectNames = async (
  objectUrls: string[],
  getObjectFn: (url: string) => Promise<string>
) => {
  let objectNames: string[] = [];
  if (objectUrls.length > 0) {
    objectNames = await Promise.all(
      objectUrls.map(async (objectUrl: string) => {
        return await getObjectFn(objectUrl);
      })
    );
  }
  return objectNames;
};
