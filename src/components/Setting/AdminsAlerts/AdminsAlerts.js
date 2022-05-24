import React, {useState} from 'react';
import SwitchButton from '../../../Shared/Components/Switch/SwitchButton';


const AdminsPermissions = () => {

  const initialAlerts = {
    all: false,
    contactAdmin: false,
    ClientLatePayment: false,
    payingSubscriptions: false,
    changeClientInformation: false,
    addNewClient: false,
    stopClient: false,
    deleteClient: false,
    
  }

    const [checked, setChecked] = useState(initialAlerts);


    const handleChange = (e, name) => {
      if (name === 'all') {
        setChecked({
          ...checked, 
          [name]: !e['all'],
          contactAdmin: !e['all'],
          ClientLatePayment: !e['all'],
          payingSubscriptions: !e['all'],
          changeClientInformation: !e['all'],
          addNewClient: !e['all'],
          stopClient: !e['all'],
          deleteClient: !e['all'],
        });
      } else{
        setChecked({
          ...checked,
          [name]: !e[name],
          all: false
        });

      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('checked', checked);
    }

    const defaultMode = () => {
      setChecked(initialAlerts)
    };



    return (
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'> 
            <h4>تعديل التنبيهات الواردة</h4>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-success btn-lg px-lg-5'>حفظ التعديل</button>
              <button type='button' onClick={defaultMode} className="btn btn-link text-dark">إرجاع للوضع الافتراضي</button>
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
            <SwitchButton id='ClientLatePayment'
              value={checked['ClientLatePayment']} 
              onChange={() => handleChange(checked, 'ClientLatePayment')} label='تنبيه لتأخر دفع العميل:' 
            />
            <SwitchButton id='payingSubscriptions'
              value={checked['payingSubscriptions']} 
              onChange={() => handleChange(checked, 'payingSubscriptions')} label='تنبيه عند دفع الاشتراكات:' 
            />
            
            <h5 className='mt-5 mb-3'>تنبيه عن اي تغير عن طريق مشرف في: </h5>

            <SwitchButton id='changeClientInformation' 
              value={checked['changeClientInformation']} 
              onChange={() => handleChange(checked, 'changeClientInformation')} label='تغير معلومات العميل:' 
            />
            <SwitchButton id='addNewClient'
              value={checked['addNewClient']} 
              onChange={() => handleChange(checked, 'addNewClient')} label='إضافه عميل جديد:' 
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
            <div className='flex-center h-100'>
              <div className='text-center px-lg-5'>
                <svg className='mb-4' xmlns="http://www.w3.org/2000/svg" width="61.953" height="61.953" viewBox="0 0 61.953 61.953">
                <g id="Group_671" data-name="Group 671" transform="translate(1.5 1.5)">
                  <path id="Path_154" data-name="Path 154" d="M61.953,32.477A29.477,29.477,0,1,1,32.477,3,29.477,29.477,0,0,1,61.953,32.477Z" transform="translate(-3 -3)" fill="none" stroke="#6e6e6e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                  <path id="Path_155" data-name="Path 155" d="M18,29.791V18" transform="translate(11.477 11.477)" fill="none" stroke="#6e6e6e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                  <path id="Path_156" data-name="Path 156" d="M18,12h0" transform="translate(11.477 5.686)" fill="none" stroke="#6e6e6e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                </g>
              </svg>
              <p>
                يمكنك تعديل التنبيهات الواردة من نشاط العملاء او
                المشرفين و التحكم في اللذي تريد متابعته
              </p>
              </div>

            </div>    
          </div>
        </div>
      </form>
    );
}

export default AdminsPermissions;

