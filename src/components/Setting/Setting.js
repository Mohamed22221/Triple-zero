import React, {useState} from 'react'
import AdminsAlerts from './AdminsAlerts/AdminsAlerts';
import AdminsPermissions from './AdminsPermissions/AdminsPermissions';
import './setting.scss'


const SettingTabs = () => {
  


  
    return (
      <div className="setting-page my-5">
      
        <div className='row'>
          <div className='col-lg-3 p-lg-0 mt-lg-5 pt-lg-3'>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-alerts-tab" data-bs-toggle="tab" data-bs-target="#nav-alerts" role="tab" aria-controls="nav-alerts" aria-selected="true">التنبيهات</button>
              <button className="nav-link" id="nav-permissions-tab" data-bs-toggle="tab" data-bs-target="#nav-permissions" role="tab" aria-controls="nav-permissions" aria-selected="false">المشرفين</button>
            </div>
          </div>

          <div className="col-lg-9 p-lg-0">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-alerts" role="tabpanel" aria-labelledby="nav-alerts-tab" tabIndex={0}>
                <AdminsAlerts />
              </div>
              
              <div className="tab-pane" id="nav-permissions" role="tabpanel" aria-labelledby="nav-permissions-tab">
                <AdminsPermissions />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  
}

export default SettingTabs;
