import React, {useState} from 'react'
import { Tabs, Radio, Space } from 'antd';
import './setting.scss'
import { Row, Col } from 'antd';

const { TabPane } = Tabs;

const SettingTabs = () => {
  


  
    return (
      <div className="setting-page mt-50">
      
        <Tabs tabPosition='left'>
          <TabPane tab="التنبيهات" key="1">
            <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
            </Row>      
          </TabPane>
          <TabPane tab="المشرفين" key="2">
            Content of Tab 2
          </TabPane>
        </Tabs>
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