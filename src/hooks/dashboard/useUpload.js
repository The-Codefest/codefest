import React, { useState } from 'react'
import { API } from 'services/api'

const useUpload = () => {
    const [upload, setUpload] = useState()

    useEffect(() => {
        const fetchUploadData = async () => {
          try {
            const response = await API.post("/dashboard/report/");
            const uploadData = response?.data
            console.log("uploadData: ", uploadData)
           
            // for (let device in uploadData) {
            //   deviceArray.push({
            //     id: device,
            //     label: device,
            //     value: uploadData?.[device],
            //   });
            // }
            setUpload(() => deviceArray);
          } catch (error) {
            console.error(error);
          }
        };
        fetchUploadData();
      }, []);

  return upload
}

export default useUpload