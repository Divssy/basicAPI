import { Request, Response } from "express";

//cara mendesikan data berupa array
type Nilai = {
    nama: string
    nilaiLiterasi: number
    nilaiNumerasi: number
    nilaiRerata?: number
    /** "?" artinya opsional */
}
const countAverage = (req: Request, res: Response) => {
    try {
        /** read request data */
        const nilai: Nilai[] = req.body.nilai
        for (let index = 0; index < nilai.length; index++) {
            nilai[index].nilaiRerata = (nilai[index].nilaiLiterasi + nilai[index].nilaiNumerasi) / 2
        }

        /** mapping array for select only "nama" and "nilaiRerata" */
        const result = nilai
        .map(item => {
            let {nama, nilaiRerata} = item
            return {nama, nilaiRerata}
        })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export { countAverage }