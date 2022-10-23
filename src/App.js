import React from  'react';

import ChartContainer from "./containers/ChartContainer";
import UserListContainer from "./containers/UserListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ChartReact } from "./components/UserList"


const stylesApp = {
    marginTop: 40
}

const App = () =>  {

        return (
            <div className="container">
                <div className="row" style={stylesApp}>
                    <div className="col-md-6">

                        <UserListContainer/>
                        {/*<ChartReact />*/}
                    </div>
                    <div className="col-md-6">
                        <ChartContainer/>
                    </div>
                </div>
            </div>
        );

}

export default App
