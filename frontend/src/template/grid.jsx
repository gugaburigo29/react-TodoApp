import React, {Component} from 'react'

export default class Grid extends Component {
     static toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if (cols[0]) classes += `col-${cols[0]} `
        if (cols[1]) classes += `col-sm-${cols[1]} `
        if (cols[3]) classes += `col-md-${cols[3]} `
        if (cols[4]) classes += `col-lg-${cols[4]} `
        if (cols[5]) classes += `col-xl-${cols[5]} `

        return classes
    }

    render() {
        const gridClasses = Grid.toCssClasses(this.props.cols || 12)

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}
