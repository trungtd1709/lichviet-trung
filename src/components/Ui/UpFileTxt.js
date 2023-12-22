import React from "react";
const UpFileTxt = () =>{
    var file_path = '../../../public/file/app-ads.txt';
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return (
        <>
        </>
    );
}
export default UpFileTxt;