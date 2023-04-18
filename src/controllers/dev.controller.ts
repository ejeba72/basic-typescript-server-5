import express from "express";

export default function devController(req: express.Request, res: express.Response): void {
    res.send([`no shaking!`])
}