import Express from "express";
import ShapeRoute from "./router/bangunDatarRouter"
import GeometryRoute from "./router/bangunRuangRouter"
import ComparationRouter from "./router/comparationRouter"
import ANBKRouter from "./router/anbkRouter"

const app = Express()
/** define address for route of bangunDatar */

/** allow read data from body request that use JSON type */
app.use(Express.json())

app.use(`/shape`, ShapeRoute)
/** use diatas digunakan untuk menambahkan prefik pada url yang mengarah ke route bangun datar */

app.use(`/geometry`, GeometryRoute)
app.use(`/comparation`, ComparationRouter)
app.use(`/anbk`, ANBKRouter)

/** define running PORT */
const PORT = 8080

/** run a server */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})