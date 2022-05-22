import React from 'react';
import { Switch } from 'antd';

const AdminsPermissions = () => {

    const onChange = (checked) => {
        console.log('checked.target', checked.target);
        console.log(`switch to ${checked}`);
    };


    return (
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                <form>
                  <div className='row'>
                    <div className='col-lg-6'> 
                      <h5>تعديل التنبيهات الواردة</h5>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex justify-content-center'>
                        <button className='btn btn-success btn-lg px-lg-5'>حفظ التعديل</button>
                        <button  className="btn btn-link text-dark">إرجاع للوضع الافتراضي</button>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-lg-5">
                    <div className="col-lg-6">
                      <Switch defaultChecked name='test' onChange={onChange}></Switch>
                    </div>
                    <div className="col-lg-6">
                      
                    </div>
                  </div>
                </form>
              </div>
    );
}

export default AdminsPermissions;
