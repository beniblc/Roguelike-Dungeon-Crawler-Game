import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { gridStatus } from '../actions/index';

class GameBoard  extends Component {
    render() {
        console.log(this.props.board);
        return(
            <div>
                <svg width="991" height="551">
                    {
                        this.props.board[1].map(
                            (item , i) => ( // i is the row
                                item.map(
                                    (item2, j) => ( // j is the col
                                        <rect
                                            id={this.props.board[0].row*i+(j+1)}
                                            key={j} 
                                            width="10"
                                            height="10"
                                            x={(j*11)+1}
                                            y={(i*11)+1}
                                            style={item2.live == false ? {fill: 'gainsboro' }: {fill:'palegreen'} }
                                        />
                                    )
                                )
                            )
                        )
                    }
                </svg>
            </div>
        )
    }
}

function mapStateToProps (state) { return { board: state.gridStatus } }

function mapDispatchToProps (dispatch) { return bindActionCreators({ grindStatus: gridStatus }, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);