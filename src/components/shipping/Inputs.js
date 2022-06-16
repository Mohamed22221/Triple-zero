import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import Dropzone from "react-dropzone";
import { Link } from 'react-router-dom';
// import SwitchButton from '../../Shared/Components/Switch/SwitchButton'
// import { SendShipping } from '../../store/ShippingSlice';
// import { MdPersonAddAlt } from 'react-icons/md';
// import { HideSlider } from '../../store/StateSlice';
// import swal from 'sweetalert';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Switch from "react-switch";
import LocationSearchInput from './Location';
import TestSvg from './Map';

const FormAddShipping = ({ values, setValues }) => {
    const [selectedFiles, setselectedFiles] = useState([]);
    const handleAcceptedFiles = (files) => {
        // const Reader = new FileReader()
        // Reader.onload = () => {
        //     if (Reader.readyState === 2) {
        //         setValues({ ...values, photo: e.target.files[0] })
        //     }
        // }
        // Reader.readAsDataURL(e.target.files[0])

        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size)
            })
        );

        // console.log(files[0]);
        setselectedFiles(files)

        // setSelectedFiles(files)
        setValues({ ...values, photo: files[0] })
    }

    

    const staustSwittch = (e) => {
        if (values.status == 1) {
            setValues({ ...values, status: 0 })
        } else {
            setValues({ ...values, status: 1 })
        }
        console.log('values', values.status, typeof (values.status));
    }

    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    const valueSwitch = values.status == 1 ? true : false

    return (
        <div className='main-input px-2'>
            <div className='row'>
                {/* Block Item */}
                <div className='col-lg-12'>
                    <div className="mb-3">
                        <div className='row'>
                            <div className='col-8'>
                                <label htmlFor="logo" className="form-label">اضف شعار<span>*</span> </label>
                                {/* <input type="file" className="form-control" id="logo" required onChange={ImgeHandeler} /> */}
                                <Dropzone
                                    onDrop={acceptedFiles =>
                                        handleAcceptedFiles(acceptedFiles)
                                    }
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div className="dropzone">
                                            <div
                                                className="dz-message needsclick"
                                                {...getRootProps()}
                                            >
                                                <input {...getInputProps()} />
                                                    <AiOutlineCloudUpload className='icon-wedget' />
                                                    {/* <i className="display-4 text-muted ri-upload-cloud-2-line"></i> */}
                                                <h6>قم بسحب الملفات هنا أو انقر للتحميل..</h6>
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>

                            </div>
                            <div className='col-4'>
                                <div
                                    className="dropzone-previews mt-3"
                                    id="file-previews"
                                >
                                    {selectedFiles.map((f, i) => {
                                        return (
                                            <div
                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                key={i + "-file"}
                                            >
                                                <div className="p-2">
                                                    <div className="row align-items-center flex-center text-center">
                                                        <div className="col col-auto">
                                                            <img
                                                                data-dz-thumbnail=""
                                                                height="80"
                                                                className="avatar-sm rounded bg-light w-100"
                                                                alt={f.name}
                                                                src={f.preview}
                                                            />
                                                        </div>
                                                        <div className='col'>
                                                            <a
                                                            target='_blank'
                                                                href={f.preview}
                                                                className="text-muted fw-bold"
                                                            >
                                                                {f.name}
                                                            </a>
                                                            <p className="mb-0">
                                                                <sapn>{f.formattedSize}</sapn>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">الايميل<span>*</span> </label>
                        <input type="email" className="form-control" id="email" placeholder="اكتب الايميل" value={values.email} required onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="en_name" className="form-label">الاسم بالانجليزي<span>*</span> </label>
                        <input type="text" className="form-control" id="en_name" placeholder="اكتب الاسم بالانجليزي" value={values.en_name} required onChange={(e) => setValues({ ...values, en_name: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="ar_name" className="form-label">الاسم بالعربي<span>*</span> </label>
                        <input type="text" className="form-control" id="ar_name" placeholder="اكتب الاسم بالعربي" value={values.ar_name} required onChange={(e) => setValues({ ...values, ar_name: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">التليفون<span>*</span> </label>
                        <input type="number" className="form-control" id="mobile" placeholder="اكتب التليفون" value={values.mobile} required onChange={(e) => setValues({ ...values, mobile: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"> كلة السر<span>*</span> </label>
                        <input type="password" className="form-control" id="password" placeholder="اكتب  كلة السر" value={values.password} required onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                {/* <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label"> العنوان<span>*</span> </label>
                        <input type="text" className="form-control" id="address" placeholder="اكتب  العنوان" value={values.address} required onChange={(e) => setValues({ ...values, address: e.target.value })} />
                    </div>
                </div> */}
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="switch-add-shipping" className="form-label d-block">الحالة</label>
                        <label className="switch-item" htmlFor='switch-add-shipping'>
                            <Switch
                                checked={valueSwitch}
                                onChange={staustSwittch}
                                id='switch-add-shipping'
                                handleDiameter={28}
                                offColor="#dfdcdc"
                                onColor="#f7d294"
                                offHandleColor="#707070"
                                onHandleColor="#FB9E00"
                                height={30}
                                width={70}
                                borderRadius={50}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                className="react-switch"
                            />
                        </label>
                    </div>
                </div>

                <div className='col-12'>
                    <div className="mb-3 position-relative">
                        <LocationSearchInput values={values} setValues={setValues} />

                    </div>
                </div>

                <TestSvg values={values} />
            </div>

        </div>
    )
}

export default FormAddShipping