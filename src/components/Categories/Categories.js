import React from "react";
import { Table } from "react-bootstrap";
import './Categories.css'
const Categories = () => {
  return (
    <div className="">
          <h3 className="fw-bold pt-5 pb-3">Categories</h3>
      <Table className="">
        <tbody >
          <tr>
            <td>Business</td>
            <td>
              <span>
                <p >05</p>
              </span>
            </td>
          </tr>
          <tr>
            <td>Introductions</td>
            <td>
              <span>
                <p >09</p>
              </span>
            </td>
          </tr>
          <tr>
            <td>Design Blog</td>
            <td>
              <span>
                <p >36</p>
              </span>
            </td>
          </tr>
          <tr>
            <td>UI/UX Design</td>
            <td>
              <span>
                <p >25</p>
              </span>
            </td>
          </tr>
          <tr>
            <td>App Development</td>
            <td>
              <span>
                <p >15</p>
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Categories;
