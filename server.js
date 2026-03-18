import express from express;
import { fruitService } from "./services/fruit.service";

const app = express();
const port = 3000;

app.get("/fruits", fruitsRoutes)

app.listen(port, ()=>{
    console.log('o servidor esta funcionandoo na porta: http://localhost:${port')
})

