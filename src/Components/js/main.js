const getdata = () => {
    let data = JSON.parse(localStorage.getItem('AppointmentData'));
    if(!data){
        return[]
    }else{
        return data
    }
}

export default getdata