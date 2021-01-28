import { Request, Response } from "express";
import MySQL from "../database/mysql";

export const getHeroes = (req: Request, res: Response) => {
    const query = `
        SELECT *
        FROM heroes`;

    MySQL.instance.runQuery(query, (error: any, heroes: Object[]) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error,
            });
        } else {
            res.json({
                ok: true,
                heroes,
            });
        }
    });
};

export const getHeroe = (req: Request, res: Response) => {
    const { id } = req.params;

    const escapedId = MySQL.instance.connection.escape(id);

    const query = `
        SELECT *
        FROM heroes
        WHERE id = ${escapedId}`;

    MySQL.instance.runQuery(query, (error: any, heroe: Object[]) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error,
            });
        } else {
            res.json({
                ok: true,
                heroe: heroe[0],
            });
        }
    });
};
