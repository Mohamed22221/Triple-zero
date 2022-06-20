import React from 'react';
import Dropzone from "react-dropzone";
import { AiOutlineCloudUpload } from 'react-icons/ai';




const UploadComponent = ({ handleAcceptedFiles, selectedFiles }) => {
    return (
        <div className='row'>
            <div className='col-8'>
                <label htmlFor="logo" className="form-label">اضف شعار<span>*</span> </label>
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
    );
}

export default UploadComponent;
