const React = require('react')

const Counter = React.createClass({
    getInitialState(){
        return {
            clicks: 0
        }
    },
    increment(e){
        e.preventDefault()

        this.state({clicks: this.state.click++})

    },
    render(){
        return (
            <span>
                <a href="#" onClick={this.increment}>Clicks {this.state.clicks}</a>
            </span>
        )
    }
})

module.exports = Counter
