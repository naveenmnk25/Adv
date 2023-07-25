import { useState } from 'react'

function App() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-2">
          <div className="col-12">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <div className="row p-3">
          <h3>User List</h3>
          <div className="col-12 mb-2">
            <label className='p-2'>
              <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
              <label class="btn btn-outline-secondary" for="btncheck1">item 1</label>
            </label>
            <button className='btn btn-danger'>Delete</button>
          </div>
          <div className="col-12 mb-2">
            <label className='p-2'>
              <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
              <label class="btn btn-outline-secondary" for="btncheck2">item 2</label>

            </label>
            <button className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
