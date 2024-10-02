
import { TextField, Stack, Button } from '@mui/material';
import './App.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';






function App() {

  //state
  const [fullName, setFullName] = useState(0)
  const [gender, setGender] = useState(0)
  const [dob, setDob] = useState(0)
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState(0)
  const [address, setAddress] = useState(0)
  const [courses, setCourses] = useState(0)

  // state for validation
  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)


  const userInputValidation = (inputTag) => {
    // used to validate all user inputs

    // destructuring
    const { name, value } = inputTag
    console.log(name, value);


    console.log(!!value.match(/^[A-Za-zÀ-ÿ'.-]+(?: [A-Za-zÀ-ÿ'.-]+)*$/));

    if (name == "fullName") {
      setFullName(value)
      console.log(value);

      !!value.match(/^[A-Za-zÀ-ÿ'.-]+(?: [A-Za-zÀ-ÿ'.-]+)*$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
    } else if (name == "phone") {
      setPhone(value)
      console.log(value);
      console.log(!!value.match(/^[6789]\d{9}$/));


      !!value.match(/^[6789]\d{9}$/) ? setIsPhoneInvalid(false) : setIsPhoneInvalid(true)
    } else if (name == "email") {
      setEmail(value)
      console.log(value);

      !!value.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)

    } else if (name == "female") {
      setGender(value)
      console.log(value);

    } else if (name == "male") {
      setGender(value)
      console.log(value);

    } else if (name == "female") {
      setGender(value)
      console.log(value);

    } else if (name == "DOB") {
      setDob(value)
      console.log(value);

    } else if (name == "address") {
      setAddress(value)
      console.log(value);

    } else if (name == "courses") {
      setCourses(value)
      console.log(value);

    }


  }

  const handleSubmit = () => {
    if (fullName && address && phone && email && dob && gender && courses) {
      console.log(`Details of the student : ${fullName}, ${address}, ${phone}, ${email}, ${dob}, ${gender}, ${courses}`);
      sessionStorage.setItem("Name", fullName)
      sessionStorage.setItem("Address", address)
      sessionStorage.setItem("Phone", phone)
      sessionStorage.setItem("Email", email)
      sessionStorage.setItem("Gender", gender)
      sessionStorage.setItem("Dob", dob)
      sessionStorage.setItem("Courses", courses)


      const getFullName = sessionStorage.getItem("Name")
      const getAddress = sessionStorage.getItem("Address")
      const getPhone = sessionStorage.getItem("Phone")
      const getEmail = sessionStorage.getItem("Email")
      const getGender = sessionStorage.getItem("Gender")
      const getDob = sessionStorage.getItem("Dob")
      const getCourse = sessionStorage.getItem("Courses")

      alert(`Submitted Form Successfully!!!
            Name of Student       : ${getFullName}
            Address                 : ${getAddress}
            Gender                  : ${getGender}
            Date of Birth           : ${getDob}
            Contact Number          : ${getPhone}
            Email id                : ${getEmail}
            Course Selected        : ${getCourse}
            

        
        `,
        handleReset()
      )

    } else {
      alert("please fill")
    }
  }

  const handleReset = () => {



    setFullName(0)
    setGender(0)
    setDob(0)
    setPhone(0)
    setEmail(0)
    setAddress(0)
    setCourses(0)

    setIsEmailInvalid(false)
    setIsNameInvalid(false)
    setIsPhoneInvalid(false)

  }


  return (
    <>
      <div className="row bg-light border rounded m-5">

        <div className="col-lg-6">
          <div style={{ opacity: '.8' }} className="">

            <div style={{ width: '800px' }} className=' rounded p-5'>
              <h1 style={{ marginBottom: '40px', color: 'violet' }} className='text-left fw-bolder '>Online Student Registration Portal</h1>
              {/* form */}
              <form className="mt-3">
                <div className="">
                  {/* <h6  style={{display:'inline', textAlign:'center'}}>First name : </h6> */}
                  <label style={{ marginRight: '130px' }} className='mt-3  mb-5 fw-bolder' htmlFor="">Name :</label>

                  <TextField value={fullName || ""} onChange={e => userInputValidation(e.target)} name='fullName' className='w-40 me-5' id="fullName" label="Name" variant="outlined" />
                  <br />
                  {
                    isNameInvalid &&
                    <div className="mb-3 fw-bolder text-danger">*Invalid Name</div>
                  }

                  <FormLabel id="demo-row-radio-buttons-group-label" className='fw-bolder'>Gender :</FormLabel>
                  <RadioGroup value={gender || ""} onChange={e => userInputValidation(e.target)} style={{ marginTop: '-30px', marginLeft: '100px' }} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel value="female" name='female' control={<Radio />} label="Female" />
                    <FormControlLabel value="male" name='male' control={<Radio />} label="Male" />
                    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}

                  </RadioGroup>

                  <br />

                  <div >
                    <label className='me-5 mt-4 fw-bolder' for="birthday">Date of Birth :</label>
                    <input value={dob || ""} onChange={e => userInputValidation(e.target)} name='DOB' type="date" />
                  </div>
                  <br /><br />

                  <label className='mt-3 me-5 mb-5 fw-bolder' htmlFor="">Contact Number    :</label>

                  <TextField value={phone || ""} spacing={3} name='phone' onChange={e => userInputValidation(e.target)} className='w-40 me-5' id="phone" label="Mobile Number" variant="outlined" />

                  <br />
                  {
                    isPhoneInvalid &&
                    <div className="mb-3 fw-bolder text-danger">*Invalid Contact Number</div>
                  } <br />


                  <label style={{ marginRight: '40px' }} className='mt-3  mb-5 fw-bolder' htmlFor="">Email ID    :</label>

                  <TextField value={email || ""} spacing={3} name='email' onChange={e => userInputValidation(e.target)} style={{ marginLeft: '60px' }} className='w-40  me-5' id="email" label="Email Id" variant="outlined" />
                  {
                    isEmailInvalid &&
                    <div className="mb-3 fw-bolder text-danger">*Invalid Email ID</div>
                  }
                  <br /><br />

                  <div className='d-flex justify-content-center flex-row'>
                    <div>
                      <label className='ms-5  fw-bolder' htmlFor="">&nbsp;&nbsp; Address    :</label>
                      <TextField value={address || ""} style={{ marginLeft: '200px', marginTop: '-30px', width: '200px' }} name='address' onChange={e => userInputValidation(e.target)} id="outlined-multiline-static" label="Address" multiline rows={1} />

                    </div>


                    <div>
                      <label className='ms-5 fw-bolder' htmlFor="">Select your Course :</label>
                      <Box className='' sx={{ minWidth: 120 }}>
                        <FormControl style={{ width: '200px', marginTop: '-40px', marginLeft: '230px' }} >
                          <InputLabel id="demo-simple-select-label">Course</InputLabel>
                          <Select value={courses || ""} onChange={e => userInputValidation(e.target)}
                            labelId="demo-simple-select-label" name='courses'
                            id="demo-simple-select"
                            // value={age}
                            label="Select your course"
                          // onChange={handleChange}
                          >
                            <MenuItem value={'Biology'}>Biology</MenuItem>
                            <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
                            <MenuItem value={'Commerce'}>Commerce</MenuItem>
                            <MenuItem value={'Humanities'}>Humanities</MenuItem>

                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </div>

                  <hr />

                  <Stack style={{ marginTop: '80px', marginLeft: '230px' }} direction="row" spacing={2}>
                    <Button disabled={isNameInvalid || isPhoneInvalid || isEmailInvalid} onClick={handleSubmit} style={{ width: '30%', color: 'white', backgroundColor: 'violet', height: '60px' }} variant="contained">Register</Button>
                    <Button onClick={handleReset} style={{ width: '30%', height: '60px' }} className='border border-dark' variant="outlined">Cancel</Button>
                  </Stack>
                </div>



              </form>

            </div>
          </div>
        </div>
        <div className="col-lg"></div>

        <div className="col-lg-5">
          <img style={{ width: '500px', height: '400px', marginLeft: '-80px', marginTop: '140px' }} src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=" alt="" />
        </div>

      </div>




    </>
  )
}

export default App
