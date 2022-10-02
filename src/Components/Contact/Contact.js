import React from "react";
import contactUs from "../../Image/contact-us.jpg";
function Contact(props) {
  return (
    <>
      {/* <main className="form-signin">
        <form>
          <h1 className="h1 mb-3 fw-bold text-center">Contact Us</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-1">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button className="w-100 btn btn-lg btn-success my-3" type="submit">
            Submit
          </button>
        </form>
      </main> */}

      <section>
        <div className="container py-5">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-center">Contact Us</h3>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">User Name</label>
                    <input type="text" className="form-control" placeholder="Enter your username" />
                  </div>
                  <div className="form-group py-3">
                    <label className="mb-1">Email</label>
                    <input type="text" className="form-control" placeholder="example123@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea name="" id="" cols="3" className="form-control" placeholder="Type your problem ..."></textarea>
                  </div>
                  <div className="form-group pt-3">
                    <button type="button" className="btn btn-success shadow w-100">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start text-center">
                  <img src={contactUs} alt="" width="420" height="420" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
