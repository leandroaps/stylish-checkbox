import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './starter-template.css';
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <h1 className="navbar-brand">Stylish Radio and Checkbox</h1>
      </nav>

      <main role="main" className="container-fluid">
        <div className="starter-template">
          <div className="row">
            <h2>HTML: Checkboxes</h2>
          </div>
          <div className="row">
            <label for="defaultCheckbox" className="si si-checkbox">
              <input type="checkbox" id="defaultCheckbox" />
              <span className="si-label">Default checkbox state</span>
            </label>
            <label for="defaultCheckbox1" className="si si-checkbox">
              <input type="checkbox" id="defaultCheckbox1" />
              <span className="si-label">Default checkbox state</span>
            </label>
            <label for="defaultCheckbox2" className="si si-checkbox">
              <input type="checkbox" id="defaultCheckbox2" />
              <span className="si-label">Default checkbox state</span>
            </label>
            <label for="checkedCheckbox3" className="si si-checkbox">
              <input type="checkbox" id="checkedCheckbox3" checked />
              <span className="si-label">Checked checkbox state</span>
            </label>
          </div>
          <div className="row">
            <h2 className>HTML: Radio buttons group</h2>
          </div>
          <div className="row">
            <label for="defaultRadio" className="si si-radio">
              <input type="radio" id="defaultRadio" name="radioGroup" />
              <span className="si-label">Default radio state</span>
            </label>
            <label for="checkedRadio" className="si si-radio">
              <input type="radio" id="checkedRadio" name="radioGroup" checked />
              <span className="si-label">Checked radio state</span>
            </label>
          </div>{' '}
          <div className="row">
            <h2 className>HTML: Switcher</h2>
          </div>
          <div className="row">
            <label for="defaultSwitcher" className="si si-switcher">
              <input type="checkbox" id="defaultSwitcher" />
              <span className="si-label">Default switcher state</span>
            </label>
            <label for="checkedSwitcher" className="si si-switcher">
              <input type="checkbox" id="checkedSwitcher" checked />
              <span className="si-label">Checked switcher state</span>
            </label>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
