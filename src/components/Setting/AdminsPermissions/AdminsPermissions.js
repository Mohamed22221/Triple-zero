

import React, {useState} from 'react';
import SwitchButton from '../../../Shared/Components/Switch/SwitchButton';


const AdminsAlerts = () => {

  const initialPermissions = {
    all: false,
    addNewClient: false,
    editClientAccounts: false,
    stopClient: false,
    deleteClient: false,
    reactivateClients: false,
    viewClientActivityHistory: false,
    
    
  }

    const [checked, setChecked] = useState(initialPermissions);


    const handleChange = (e, name) => {
      if (name === 'all') {
        setChecked({
          ...checked, 
          [name]: !e['all'],
          addNewClient: !e['all'],
          editClientAccounts: !e['all'],
          stopClient: !e['all'],
          deleteClient: !e['all'],
          reactivateClients: !e['all'],
          viewClientActivityHistory: !e['all'],
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
      // console.log('submit', checked);
    }

    const defaultMode = () => {
      setChecked(initialPermissions)
    };





    

    return (
      <form>
        <div className='row'>
          <div className='col-lg-6'> 
            <h4>تعديل سلطات المشرفين الافتراضيه</h4>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-center'>
              <button onClick={handleSubmit} className='btn btn-success btn-lg px-lg-5'>حفظ التعديل</button>
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
            <SwitchButton id='addNewClient'
              value={checked['addNewClient']} 
              onChange={() => handleChange(checked, 'addNewClient')} label='إضافة العملاء الجدد:' 
            />
            <SwitchButton id='editClientAccounts'
              value={checked['editClientAccounts']} 
              onChange={() => handleChange(checked, 'editClientAccounts')} label=' :تعديل حسابات العملاء:' 
            />
            <SwitchButton id='stopClient'
              value={checked['stopClient']} 
              onChange={() => handleChange(checked, 'stopClient')} label=' :إقاف العملاء:' 
            />                
            <SwitchButton id='deleteClient' 
              value={checked['deleteClient']} 
              onChange={() => handleChange(checked, 'deleteClient')} label=' :حذف العملاء:' 
            />
            <SwitchButton id='reactivateClients'
              value={checked['reactivateClients']} 
              onChange={() => handleChange(checked, 'reactivateClients')} label='أعاده تفعيل العملاء بعد الاقاف/ الحذف:' 
            />
            <SwitchButton id='viewClientActivityHistory'
              value={checked['viewClientActivityHistory']} 
              onChange={() => handleChange(checked, 'viewClientActivityHistory')} label='مشاهده سجل نشاط العملاء:' 
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
               يمكنك تعديل سلطات المشرفين الافتراضيه لكل المشرفين
               و سوف تغير المشرفين اللذين على وضع السلطات الافتارضيه
               فقط و لن تعدل اللذي عٌ دلوا بصوره يدوية
              </p>
              </div>

            </div>    
          </div>
        </div>
      </form>
    );
}

export default AdminsAlerts;
