import React from 'react'

export default props => (
    <div>
        <div role='form' className='todoForm row'>
            <div className='col-10'>
                <input id='description' className='form-control' type="text" placeholder='description'/>
            </div>
            <div className='col-2'>
                <button className='btn btn-primary'>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
        </div>
    </div>
)
