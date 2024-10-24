import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  async applyFilters() {
    // Collect filter values
    const developer_id = (document.getElementById("developer_idFilter") as HTMLInputElement).value;
    const state = (document.getElementById("stateFilter") as HTMLInputElement).value;
    const developer_name = (document.getElementById("developer_nameFilter") as HTMLInputElement).value;
    const developer_status = (document.getElementById("developer_statusFilter") as HTMLInputElement).value;
    const category = (document.getElementById("categoryFilter") as HTMLInputElement).value;
  
    // Create an object to hold the filter parameters
    const filterParams: { [key: string]: string } = {
      ...(developer_id && { developer_id }),
      ...(state && { state }),
      ...(developer_name && { developer_name }),
      ...(developer_status && { developer_status }),
      ...(category && { category }),
    };
  
    // Construct the query string from the filter parameters
    const queryString = new URLSearchParams(filterParams).toString();
  
    // Construct the full URL
    const url = `http://15.207.85.127/api/v1/addModelJson?${queryString}`;
  
    try {
      // Fetch data from the constructed URL
      const response = await fetch(url);
  
      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON data from the response
      const data = await response.json();
  
      // Check if data is available
      if (!data || data.length === 0) {
        alert("No data found");
      } else {
        // You can replace this with your data handling logic
        console.log(data);
      }
    } catch (error) {
      // Handle any errors that occur during fetch
      alert("Data not found");
      console.error("Error fetching data:", error);
    }
  }
  
}
