import React, { Component } from 'react';

class Checkbox extends Component{
  render(){
    return(
    <div className="allCheckboxes">
    <h2 className="title">Filters</h2>
      <div className="checkboxes">
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/> Platform
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/> Country
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/> Level
          </label>
        </div>
      </div>
      <div className="checkboxesTwo">
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"/> Horaires
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5"/> DLC
          </label>
        </div>
      </div>
    </div>
    )
  }
}

export default Checkbox;
