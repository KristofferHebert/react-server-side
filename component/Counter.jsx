const React = require('react')

const Counter = React.createClass({
    getInitialState(){
        return {
            clicks: 0
        }
    },
    increment(e){
        e.preventDefault()

        let clicks = this.state.click++

        this.state({clicks: clicks })

    },
    render(){
        return (
            <span>
                <a onClick={this.increment}>Clicks: {this.state.clicks}</a>
            </span>
        )
    }
})

module.exports = Counter
