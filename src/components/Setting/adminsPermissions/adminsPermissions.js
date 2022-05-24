import React, {useState} from 'react';
import SwitchButton from '../../../Shared/Components/Switch/SwitchButton';


const AdminsPermissions = () => {

  const initialPermissions = {
    all: false,
    contactAdmin: false,
    CustomerLatePayment: false,
    payingSubscriptions: false,
    changeCustomerInformation: false,
    addNewCustomer: false,
    stopClient: false,
    deleteClient: false,
    
  }

    const [checked, setChecked] = useState(initialPermissions);


    const handleChange = (e, name) => {
      if (name === 'all') {
        
      } else{
        setChecked({...checked, [name]: !e[name]});
      }
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
                        value={checked['all']} 
                        onChange={() => handleChange(checked, 'all')} label='تحديد الكل:' 
                      />
                      <SwitchButton id='contactAdmin'
                        value={checked['contactAdmin']} 
                        onChange={() => handleChange(checked, 'contactAdmin')} label='تنبيه عند إتصال مشرف:' 
                      />
                      <SwitchButton id='CustomerLatePayment'
                        value={checked['CustomerLatePayment']} 
                        onChange={() => handleChange(checked, 'CustomerLatePayment')} label='تنبيه لتأخر دفع العميل:' 
                      />
                      <SwitchButton id='payingSubscriptions'
                        value={checked['payingSubscriptions']} 
                        onChange={() => handleChange(checked, 'payingSubscriptions')} label='تنبيه عند دفع الاشتراكات:' 
                      />
                      
                      <h5 className='my-3'> :تنبيه عن اي تغير عن طريق مشرف في </h5>

                      <SwitchButton id='changeCustomerInformation' 
                        value={checked['changeCustomerInformation']} 
                        onChange={() => handleChange(checked, 'changeCustomerInformation')} label='تغير معلومات العميل:' 
                      />
                      <SwitchButton id='addNewCustomer'
                        value={checked['addNewCustomer']} 
                        onChange={() => handleChange(checked, 'addNewCustomer')} label='إضافه عميل جديد:' 
                      />
                      <SwitchButton id='stopClient'
                        value={checked['stopClient']} 
                        onChange={() => handleChange(checked, 'stopClient')} label='إيقاف عميل:' 
                      />
                      <SwitchButton id='deleteClient'
                        value={checked['deleteClient']} 
                        onChange={() => handleChange(checked, 'deleteClient')} label='حذف عميل:' 
                      />


                    </div>
                    <div className="col-lg-6">
                      
                    </div>
                  </div>
                </form>
              </div>
    );
}

export default AdminsPermissions;
