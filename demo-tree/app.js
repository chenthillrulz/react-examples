'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {TreeContainer} from '../tree-view-lib/index';
import data from '../tree-view-lib/data';

class DemoTree extends React.Component {
    constructor(props){
        super(props);
    }

       render(){
           return  (<TreeContainer
                    data={data}
                    highlightSelected={true}
           />);

    }
}

const content = document.getElementById('root');
ReactDOM.render(<DemoTree/>, content);
