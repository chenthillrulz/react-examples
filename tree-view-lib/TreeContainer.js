'use strict';

import React from 'react';
import TreeNode from './TreeNode';

class TreeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {selectedNodeId: undefined};
        this.hasInitializedIds = false;
    }

    onSelectionChanged (node) {
        //console.log("TreeContainer selected node id - " + node.id);

        // expand/collapse
        if (Array.isArray(node.children) && node.children.length)
            node.expanded = !node.expanded;

        this.setState({selectedNodeId: node.id});
    }

    setNodeIds (node) {
        node.id = node.id || this.nodeCounter;
        this.nodeCounter += 1;

        if (!Array.isArray(node.children) || node.children.length == 0) return;

        node.children.forEach ((child, index) => {
            this.setNodeIds(child);
        });
    }

    render () {
        let data = this.props.data;
        //console.log("rendering tree container");

        // Allows array and single field data
        if(!Array.isArray(data)){ data = [data]; }


        if (!this.hasInitializedIds) {
            //console.log ("intializing ids");
            this.nodeCounter = 1;
            data.forEach((node) => this.setNodeIds(node));
            this.hasInitializedIds = true;
        }

        // Only share the tree properties needed after stripping unwanted ones
        var options = Object.assign({}, this.props);
        delete options['data'];

        return(
            <div className="treeview">
                <ul>
                    {data.map((node, index) =>
                        <TreeNode node={node}
                            key={node.id}
                            onSelectionChangedCallBack={this.onSelectionChanged.bind(this)}
                            selectedNodeId={this.state.selectedNodeId}
                            options={options}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

TreeContainer.defaultProps = {
    expandIcon: 'glyphicon glyphicon-plus',
    collapseIcon: 'glyphicon glyphicon-minus',
    emptyIcon: 'glyphicon',
};

TreeContainer.propTypes = {
    data: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.Array
    ]).isRequired,
    highlightSelected: React.PropTypes.bool,
    expandIcon: React.PropTypes.string,
    collapseIcon: React.PropTypes.string,
    emptyIcon: React.PropTypes.string,
}

export default TreeContainer;