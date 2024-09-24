import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import generateUniqueId from 'generate-unique-id';
import './App.css'
import getdata from './Components/js/main';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import CharteredForm from './Components/CharteredForm/CharteredForm'
import ViewData from './Components/ViewData/ViewData';
import UpdateData from './Components/UpdateData/UpdateData';
import PendingData from './Components/PendingRec/PendingData';
import Approved from './Components/Approved/Approved';
import CompleteAppointments from './Components/CompleteAppointments/CompleteAppointments';
function App() {

  const [FromInput, setFormInput] = useState({
    id: '',
    name: '',
    email: '',
    contact: '',
    date: '',
    time: '',
    charteredStatus : "" ,
  })

  const [storage, setStorage] = useState(getdata())

  const [editData, setEditData] = useState(null);
  
  const [filteredData, setFilteredData] = useState({
    approved: [],
    pending: [],
    completed: [],
  });

  const navigate = useNavigate();


  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormInput({
      ...FromInput,
      [name]: value
    })
  }
  const handleEdit = (id) => {
    const editData = storage.find((item) => item.id === id);
    setEditData(editData);
    navigate('/UpdateData');
  };

  const handleUpdata = (rec) => {
    const updatedStorage = storage.map((item) =>
      item.id === rec.id ? rec : item
    );

    setStorage(updatedStorage);
    navigate('/ViewData');
  };


  const PendingRec = () => {
    navigate('/PendingData');
  };
  

  const handleApproved = () => {
    navigate('/ApprovedData');
  };

    const handleComplete = () => {
     
      navigate('/CompleteAppointments');
    };
  
  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...FromInput,
      id: generateUniqueId({
        length: 4,
        useLetters: false
      })
    };

    setStorage([...storage, obj]);

    navigate('/ViewData')

    setFormInput({
      name: '',
      email: '',
      contact: '',
      date: '',
      time: '',
    })
  }

  useEffect(() => {
  
    localStorage.setItem('AppointmentData', JSON.stringify(storage));

    
    const approved = storage.filter(item => item.charteredStatus === "Approved");
    const pending = storage.filter(item => item.charteredStatus === "Pending");
    const completed = storage.filter(item => item.charteredStatus === "Completed");

    setFilteredData({ approved, pending, completed });
  }, [storage]);


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CharteredForm' element={<CharteredForm handleForm={handleForm} handlesubmit={handlesubmit} />} />

        <Route path='/ViewData' element={<ViewData storage={storage} handleEdit = {handleEdit}  PendingRec ={PendingRec} handleApproved = {handleApproved} handleComplete = {handleComplete}/>} />

        <Route path='/UpdateData' element={<UpdateData editData={editData} handleUpdata={handleUpdata} />} />

        <Route path='/PendingData' element={<PendingData selectedAppointment={filteredData.pending} />} />

        <Route path='/ApprovedData' element={<Approved ApprovedData={filteredData.approved} />} />
        
        <Route path='/CompleteAppointments' element={<CompleteAppointments  completeAppointment={filteredData.completed}  />} />
      


        <Route path="*" element={<h1 className="text-center p-3">404 page not found</h1>} />
        </Routes>
    </>
  );
}

export default App
