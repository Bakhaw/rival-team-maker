import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxComponent extends React.Component {
  state = {
    checked: false,
  };

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex">
          <div className="col-md-4">
            <Checkbox
              label="Plateforme"
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              style={styles.checkbox}
            />
            <Checkbox
              label="Horaires"
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              style={styles.checkbox}
            />
          </div>
          <div className="col-md-4">
            <Checkbox
              label="Niveau"
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              style={styles.checkbox}
            />
            <Checkbox
              label="DLC"
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              style={styles.checkbox}
            />
          </div>
          <div className="col-md-4">
            <Checkbox
              label="Pays"
              labelStyle={{ color: 'white' }}
              iconStyle={{ fill: 'white' }}
              style={styles.checkbox}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxComponent;
