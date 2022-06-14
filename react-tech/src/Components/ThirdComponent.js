import React from 'react';
import $ from 'jquery';
//with jQuery only !


class ThirdComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleQueryOne = this.handleQueryOne.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleQueryThree = this.handleQueryThree.bind(this);
    }

    handleQueryOne = () => {
        $('#domElem').css('color', 'yellow');
    };

    handleQuery = () => {
        $('#domElemTwo').css('color', 'orange');
    };

    handleQueryThree = () => {
        $('#domElemThree').css('color', 'red');
    };

    render() {
        return (
            <div className="third--class">
                <h2>
                    ThirdComponent
                </h2>
                <div className="hbtn--class">
                    <h3 id="domElem">
                        first test
                    </h3>
                    <button type='button' onClick={this.handleQueryOne}>
                        Click
                    </button>
                </div>

                <div className="hbtn--class">
                    <h3 id="domElemTwo">
                        second test
                    </h3>
                    <button type='button' onClick={this.handleQuery}>
                        Click
                    </button>
                </div>


                <div className="hbtn--class">
                    <h3 id="domElemThree">
                        third test
                    </h3>
                    <button type='button' onClick={this.handleQueryThree}>
                        Click
                    </button>
                </div>

            </div>
        );
    }
}

export default ThirdComponent;