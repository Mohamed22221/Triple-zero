import React, {useState} from 'react'
import AdminsAlerts from './adminsAlerts/adminsAlerts';
import AdminsPermissions from './adminsPermissions/adminsPermissions';
import './setting.scss'


const SettingTabs = () => {
  


  
    return (
      <div className="setting-page mt-50">
      
        <div className='row'>
          <div className='col-lg-3 p-lg-0 mt-lg-5 pt-lg-3'>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">التنبيهات</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">المشرفين</button>
            </div>
          </div>

          <div className="col-lg-9 p-lg-0">
            <div className="tab-content" id="nav-tabContent">
              <AdminsPermissions />
              <AdminsAlerts />
            </div>
            
          </div>
        </div>

      </div>
    );
  
}

export default SettingTabs;


// import { Tabs, Radio } from 'antd';

// const { TabPane } = Tabs;

// class Demo extends React.Component {
//   state = { size: 'small' };

//   onChange = e => {
//     this.setState({ size: e.target.value });
//   };

//   render() {
//     const { size } = this.state;
//     return (
//       <div>
//         <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
//           <Radio.Button value="small">Small</Radio.Button>
//           <Radio.Button value="default">Default</Radio.Button>
//           <Radio.Button value="large">Large</Radio.Button>
//         </Radio.Group>
//         <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
//           <TabPane tab="Tab 1" key="1">
//             Content of tab 1
//           </TabPane>
//           <TabPane tab="Tab 2" key="2">
//             Content of tab 2
//           </TabPane>
//           <TabPane tab="Tab 3" key="3">
//             Content of tab 3
//           </TabPane>
//         </Tabs>
//         <Tabs defaultActiveKey="1" type="card" size={size}>
//           <TabPane tab="Card Tab 1" key="1">
//             Content of card tab 1
//           </TabPane>
//           <TabPane tab="Card Tab 2" key="2">
//             Content of card tab 2
//           </TabPane>
//           <TabPane tab="Card Tab 3" key="3">
//             Content of card tab 3
//           </TabPane>
//         </Tabs>
//       </div>
//     );
//   }
// }

// export default Demo;