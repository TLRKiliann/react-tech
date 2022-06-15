import React from 'react';
import $ from 'jquery';
//with jQuery only !


class ThirdComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stuff: ''
        };
    }

    componentDidMount() {
        $('.btn-one').on('click', function() {
            $('#domElem').css('background', 'navy')
        })
        $('.btn-two').on('click', function() {
            $('#domElemTwo').css('color', 'orange');
        })
        $('.btn-three').on('click', function() {
            $('#domElemThree').hide();
        })
    }

    render() {
        return (
            <div className="third--class">
                <h2>
                    ThirdComponent (jQuery)
                </h2>
                <div className="hbtn--class">
                    <h3 id="domElem">
                        first test
                    </h3>
                    <button type='button' className="btn-one">
                        Click
                    </button>
                </div>

                <div className="hbtn--class">
                    <h3 id="domElemTwo">
                        second test
                    </h3>
                    <button type='button' className="btn-two">
                        Click
                    </button>
                </div>


                <div className="hbtn--class">
                    <h3 id="domElemThree">
                        third test {this.state.stuff}
                    </h3>
                    <button type='button' className="btn-three">
                        Hide
                    </button>
                </div>

            </div>
        );
    }
}

export default ThirdComponent;
