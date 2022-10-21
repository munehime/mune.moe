import path from "path";
import fs from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";

import { Storyboard } from "../../../../interfaces";

export type ResponseData = {
    storyboard: Storyboard
}

type ResponseError = {
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData | ResponseError>) => {
    const { id } = req.query;

    const jsonDirectory = path.join(process.cwd(), "json");
    const jsonData = fs.readFileSync(jsonDirectory + "/storyboards.json", "utf8");
    const storyboards = JSON.parse(jsonData) as Array<Storyboard>;
    const storyboard = storyboards.find(storyboard => storyboard.id === Number(id));

    return storyboard ?
        res.status(200).json({
            storyboard
        }) :
        res.status(404).json({
            message: "Not Found",
        });
};

export default handler;
