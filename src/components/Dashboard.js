import { useEffect, useState } from "react";

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div class="col main pt-5">
      <div class="row mt-3">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">
            Check More Records of Employees
          </h5>
          <div class="table-responsive">
            <table class="table table-striped">
              <table class="table table-striped">
                <thead class="thead-light">
                  <tr>
                    <th style={{ backgroundColor: "#85b1d2" }}>No</th>
                    <th style={{ backgroundColor: "#85b1d2" }}>Label</th>
                    <th style={{ backgroundColor: "#85b1d2" }}>Header</th>
                    <th style={{ backgroundColor: "#85b1d2" }}>Column</th>
                    <th style={{ backgroundColor: "#85b1d2" }}>Record Data</th>
                  </tr>
                </thead>
                <tbody>
                  {record.slice(0, 5).map((output, index) => (
                    <tr
                      key={output.id}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#c2d8e8" : "#aecbe1",
                      }}
                    >
                      <td>{output.id}</td>
                      <td>{output.name}</td>
                      <td>{output.email}</td>
                      <td>{output.username}</td>
                      <td>{output.website}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </table>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div
            class="card  text-white h-95 "
            style={{
              height: "250px",
              marginLeft: "20px",
              marginTop: "54px",
              backgroundColor: "#498abc",
            }}
          >
            <div class="card-body ">
              <div class="rotate">
                <i class="fa-solid fa-book-open-reader fa-2x"></i>
              </div>
              <h6 class="text-uppercase" style={{ marginTop: "20px" }}>
                Total courses registered
              </h6>
              <h1 class="display-6">134</h1>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div
            class="card text-white  "
            style={{
              height: "250px",
              marginLeft: "20px",
              marginTop: "54px",
              backgroundColor: "#498abc",
            }}
          >
            <div class="card-body ">
              <div class="rotate">
                <i class="fa-regular fa-calendar-days fa-2x"></i>
              </div>
              <h6 class="text-uppercase" style={{ marginTop: "20px" }}>
                Total events registered
              </h6>
              <h1 class="display-6">125</h1>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      <hr />
    </div>
  );
};

export default Dashboard;
