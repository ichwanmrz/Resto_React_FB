import React from 'react';
import { Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 ">

            {/* <!-- Section: Social media --> */}
            <section className="mb-4 ms-5">
              <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                ><i className="fab fa-facebook-f"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                ><i className="fab fa-twitter"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                ><i className="fab fa-google"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                ><i className="fab fa-instagram"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                ><i className="fab fa-linkedin-in"></i
              ></a>
              <a className="btn btn-outline-light btn-floating m-1" href="/#" role="button"
                ><i className="fab fa-github"></i
              ></a>
            </section>

            {/* <!-- Section: Form --> */}
            <section>
              <Form action="/">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" className="form-control" />
                      <label className="form-label" for="form5Example21">Email address</label>
                    </div>
                  </div>

                  <div className="col-auto">
                    <Button type="submit" className="btn btn-outline-light mb-4">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Form>
            </section>

            {/* <!-- Section: Text --> */}
            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
              </p>
            </section>

            {/* <!-- Section: Links --> */}
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Resto ID</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/#" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
 
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Goods</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/#" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Partner</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/#" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Talk to us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/#" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="/#" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright &nbsp;
            <a className="text-white" href="/#">MadanyDev</a>
          </div>
        </footer>
    </div>
  )
}

export default Footer