import React, {Component} from 'react'
import Grid from '../template/grid'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import {changeDescription, search, add, clear} from "./todoActions"

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const {add, search, description, clear} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const {add, search, clear, description} = this.props

        return (
            <div className="row">
                <Grid cols="12 9 10">
                    <input id="description"
                           className="form-control"
                           type="text"
                           placeholder="description"
                           onChange={this.props.changeDescription}
                           value={this.props.description}
                           onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus"
                                onClick={() => add(description)}/>
                    <IconButton style="info" icon="search"
                                onClick={search}/>
                    <IconButton style="default" icon="close"
                                onClick={() => clear()}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({changeDescription, search, add, clear}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
