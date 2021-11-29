import Main from '../pages/Main'
import Repositorio from "../pages/Repositorio";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Erro from "../pages/Erro";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/repositorio/:repositorio" component={Repositorio} />
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}