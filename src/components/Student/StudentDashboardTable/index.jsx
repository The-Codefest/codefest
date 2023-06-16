import React, { useEffect } from 'react'
import Table from '../Table'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from '../Table/TableSlice';
import Loader from '../Loader/inde';



const StudentDashboardTable = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.course.status)

   
    useEffect(() => {
        // dispatch(fetchCourse());
    }, [dispatch]);

  return (
    <div>
         {/* {status === 'loading' ? (
                    <Loader />
                ) : ( */}
          <Table
            details={""} /> 
                {/* )} */}
    </div>
  )
}

export default StudentDashboardTable
