"use client";
import Link from "next/link";
import { useState } from "react";

export default function Faqs3() {
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
      <section
        id="faqs"
        className="pt-10 pb-8 position-relative"
      >
        <div className="container position-relative z-2" >
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div className="text-start pe-lg-2">
                <div className="d-flex align-items-center position-relative z-2 d-inline-flex rounded-pill px-2 py-1" style={{ backgroundColor: '#EDF8FF' }}>
                  <span className="fs-9 fw-bold rounded-pill px-2 py-1 text-white" style={{ backgroundColor: '#1E90FF' }}>New</span>
                  <span className="fs-7 fw-medium mx-2" style={{ color: '#1E90FF' }}>
                    FAQ
                  </span>
                </div>
                <h3 className="ds-4 mt-3 mb-3 fw-regular">
                  Presentation design <span className="fw-bold">questions?</span> <br className="d-none d-lg-inline" />
                  We've got answers
                </h3>
                <div className="position-relative d-inline-block mt-3 mb-4 mb-lg-6">
                  <img
                    src="/assets/imgs/faqs-3/img-1.png"
                    alt=""
                    className="rounded-pill border border-3 border-white"
                    style={{ width: '60px', height: '60px' }}
                  />
                  <img
                    src="/assets/imgs/faqs-3/img-2.png"
                    alt=""
                    className="position-absolute z-1 top-0 start-50 mt-2 rounded-pill border border-3 border-white"
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <p className="fs-5 fs-md-4 mb-0 pe-lg-8">
                  Quick answers to presentation design questions. Can't <br className="d-none d-lg-inline" />
                  find what you're looking for? Get in touch with us.
                </p>
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-center mt-5 gap-3">
                  <Link
                    href="/contact"
                    className="btn btn-gradient btn-hover rounded-pill px-3 py-2"
                    style={{
                      backgroundColor: "#1E90FF", 
                      borderColor: "#1E90FF",
                      color: "white",
                      transition: "all 0.3s ease",
                      fontSize: "0.8rem"
                    }}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-8 ">
              <div className="accordion">
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(1)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        What are the key benefits of using{" "}
                        <span style={{ color: "#1E90FF" }}>
                          Presentation Design Services
                        </span>
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#1E90FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse1"
                    className={
                      activeItem == 1
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0card-body">
                      Professional presentation design services save you time,
                      ensure brand consistency, improve audience engagement, and
                      deliver presentations that make a lasting impact on your
                      viewers.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(2)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">
                        How long does it take to create a{" "}
                        <span style={{ color: "#1E90FF" }}>
                          presentation design
                        </span>
                        ?
                      </h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#1E90FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse2"
                    className={
                      activeItem == 2
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0card-body">
                      The timeline depends on the complexity and length of your presentation. 
                      Simple presentations take 2-3 days, while complex corporate presentations 
                      with custom graphics and animations may take 5-7 days.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(3)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">What types of <span style={{ color: "#1E90FF" }}>presentations</span> do you design?</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#1E90FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse3"
                    className={
                      activeItem == 3
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0card-body">
                      We design all types of presentations including corporate presentations, 
                      sales pitches, investor decks, training materials, conference presentations, 
                      product launches, and educational content.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(4)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">Do you provide <span style={{ color: "#1E90FF" }}>revisions</span> and edits?</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#1E90FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse4"
                    className={
                      activeItem == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0card-body">
                      Yes, we provide up to 3 rounds of revisions included in our standard package. 
                      We work closely with you to ensure the final presentation meets your 
                      expectations and requirements.
                    </p>
                  </div>
                </div>
                <div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(5)}
                      data-bs-toggle="collapse"
                    >
                      <h6 className="m-0">What formats do you deliver <span style={{ color: "#1E90FF" }}>presentations</span> in?</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#1E90FF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapse5"
                    className={
                      activeItem == 5
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="ps-0card-body">
                      We deliver presentations in multiple formats including PowerPoint (PPTX), 
                      Google Slides, Keynote, PDF, and can also provide source files in 
                      Adobe Creative Suite formats if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
