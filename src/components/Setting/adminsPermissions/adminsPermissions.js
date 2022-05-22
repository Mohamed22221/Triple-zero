import React, {useState} from 'react';
import SwitchButton from '../../../Shared/Components/Switch/Switch';


const AdminsPermissions = () => {


    const [checked, setChecked] = useState(false);


    const handleChange = (e) => {
        setChecked(!e);
        console.log('checked', e);
    }


    return (
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                <form>
                  <div className='row'>
                    <div className='col-lg-6'> 
                      <h4>تعديل التنبيهات الواردة</h4>
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
                    
                   <SwitchButton id='all' 
                    value={checked} 
                    onChange={() => handleChange(checked)} label='تحديد الكل:' />





                    </div>
                    <div className="col-lg-6">
                      
                    </div>
                  </div>
                </form>
              </div>
    );
}

export default AdminsPermissions;
