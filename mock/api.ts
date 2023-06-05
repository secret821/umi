import mockjs from "mockjs";

export default {
  "get /api/biye/get_mock": mockjs.mock({
    success: true,
    "data|10": [
      {
        id: "@id",
        title: "@name",
        description: "@cparagraph(2)",
        type:false
      },
    ],
  }),
};