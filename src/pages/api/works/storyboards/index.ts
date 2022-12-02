import path from "path";
import fs from "fs";
import { type NextApiRequest, type NextApiResponse } from "next";

import { Storyboard } from "../../../../interfaces";

export type ResponseData = {
    storyboards: Array<Storyboard>;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    const jsonDirectory = path.join(process.cwd(), "json");
    const jsonData = fs.readFileSync(jsonDirectory + "/storyboards.json", "utf8");
    const storyboards = JSON.parse(jsonData) as Array<Storyboard>;

    res.status(200).json({
        storyboards,
    });
};

export default handler;
