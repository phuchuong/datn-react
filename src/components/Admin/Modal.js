import React from 'react';
import './Modal.css';

import { useSelector } from 'react-redux';

export default function Modal() {

  var Component = useSelector(state => state.LoaiDTReducers.Component);

  return (
    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">CHÍ NGUYỄN MOBILE</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {Component}
          </div>
        </div>
      </div>
    </div>

  )
}





