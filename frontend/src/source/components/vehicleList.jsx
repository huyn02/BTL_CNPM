import React from 'react';

function VehicleList() {
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Name MCP</th>
            <th>Collector in charge</th>
            <th>Companion Janitor</th>
            <th>Delete assignment</th>
            <th>Change assignment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>Nguyen Van A</td>
            <td>Nguyen Van B</td>
            <td>Xoa<i className="fa-solid fa-plus deleteJC"></i></td>
            <td>Sua<i className="fa-solid fa-wrench ChangeJC"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VehicleList;